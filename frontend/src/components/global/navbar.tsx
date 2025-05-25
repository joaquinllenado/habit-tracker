import Link from "next/link"
import { Button } from "../ui/button"

export default function Navbar(){
    return(
        <nav className=" w-full h-fit">
            <div className="flex flex-row w-full items-center justify-between px-4 py-2">
                <Link href='/'>
                    <span className="text-2xl">Habit Tracker</span>
                </Link>
                <div className="flex flex-row gap-3">
                    <Button variant="ghost" className="cursor-pointer">
                        <Link href='/login'>
                            Login
                        </Link>
                    </Button>
                    <Button className="cursor-pointer">
                        <Link href='/signup'>
                            Sign up
                        </Link>
                    </Button>
                </div>
            </div>
        </nav>
    )
}