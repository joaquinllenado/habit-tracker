"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { useUser } from "@/context/UserContext";

export default function Navbar(){
    const { user } = useUser();
    return(
        <nav className=" w-full h-fit">
            <div className="flex flex-row w-full items-center justify-between px-4 py-2">
                <Link href='/'>
                    <span className="text-2xl">Habit Tracker</span>
                </Link>
                { user ? 
                <p className="text-lg">Welcome, {user.name}</p>
                : (
                <div className="flex flex-row gap-3">
                    <Button variant="ghost" className="cursor-pointer hover:text-purple-500">
                        <Link href='/login'>
                            Login
                        </Link>
                    </Button>
                    <Button className="cursor-pointer hover:bg-purple-500">
                        <Link href='/signup'>
                            Sign up
                        </Link>
                    </Button>
                </div>
                )}
            </div>
        </nav>
    )
}