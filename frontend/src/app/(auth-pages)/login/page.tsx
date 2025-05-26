"use client"
 
import { useState } from "react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useLogin } from "@/hooks/useLogin"

export default function Login() {
    const [formError, setFormError] = useState(null);
    const { form, onSubmit} = useLogin();
    
    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="border p-24 rounded-lg bg-card space-y-4 shadow-lg">
                <p className="text-2xl">Login</p>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="Enter your email" {...field} />
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