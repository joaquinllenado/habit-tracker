import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center w-full h-full text-center gap-5">
            <h1 className="text-4xl font-bold text-foreground">
                Build Better Habits, <br/>One Day at a Time
            </h1>
            <p className="text-2xl text-muted-foreground">
                Habit Tracker helps you set, track, and achieve your goals. Stay motivated, visualize your progress, and create lasting positive change in your life.
            </p>
            <div className="flex flex-row gap-2">
                <Button size="lg">
                    <Link href="/signup">
                        Get Started
                    </Link>
                </Button>
            </div>
        </section>
    )
}