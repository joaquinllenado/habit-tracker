import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import z from "zod";

const signupSchema = z.object({
    name: z.string().min(1, {
        message: "Username must be at least 1 character"
    }),
    email: z.string().email(),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters"
    })
})

export function useSignup() {
    const router = useRouter();

    const form = useForm<z.infer<typeof signupSchema>>({
            resolver: zodResolver(signupSchema),
            defaultValues: {
                name: "",
                email: "",
                password: "",
            },
        })
    
    function onSubmit(values: z.infer<typeof signupSchema>) {
        fetch('http://localhost:4000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
        .then(async (res) => {
            if (!res.ok) {
                const errorData = await res.json();
                alert(errorData.message || "Failed to create user");
                return;
            }
            const data = await res.json();
            router.push('/login');
        })
        .catch((error) => {
            alert("Network error: " + error.message);
        })
    }
    
    return { form, onSubmit };
}