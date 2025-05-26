import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import z from "zod";

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters"
    })
})

export function useLogin() {
    const { setUser } = useUser();
    const router = useRouter();

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof loginSchema>) {
        fetch('http://localhost:4000/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
            credentials: 'include'
        })
        .then(async (res) => {
            if (!res.ok) {
                const errorData = await res.json();
                alert(errorData.message || "Failed to create user");
                return;
            }
            const data = await res.json();
            localStorage.setItem('token', data.token);
            setUser({ name: data.user.name, email: data.user.email })
            router.push('/habits');
        })
        .catch((error) => {
            alert("Network error: " + error.message);
        })
    }

    return { form, onSubmit };
}