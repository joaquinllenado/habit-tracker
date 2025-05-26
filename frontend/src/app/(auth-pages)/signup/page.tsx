"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { redirect } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useSignup } from "@/hooks/useSignup"

const signUpSchema = z.object({
    name: z.string().min(1, {
        message: "Username must be at least 1 character"
    }),
    email: z.string().email(),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters"
    })
})

export default function SignUp(){
    const { form, onSubmit } = useSignup();
    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="border p-24 rounded-lg bg-card space-y-4 shadow-lg">
                <p className="text-2xl">Sign up</p>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Barry Allen" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="the_flash@gmail.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Enter your password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="cursor-pointer hover:bg-purple-500">Submit</Button>
            </form>
        </Form>
    )
}