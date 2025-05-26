"use client"

import { useState, useEffect } from "react";
import { Input } from "../ui/input";

const exampleHabits = [
    "Drink more water",
    "Go to the gym 3x a week",
    "Spend more time with family",
    "Hang out with friends",
    "Learn a new skill"
]
    
export default function HabitTracker({ token } : { token: string }) {
    const [placeholderIndex, setPlaceholderIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIndex((prev) => (prev + 1) % exampleHabits.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="border p-5 rounded-lg space-y-2">
            <p className="text-lg">What would you like to accomplish?</p>
            <Input type="text" placeholder={exampleHabits[placeholderIndex]}/>
        </div>
    )
}