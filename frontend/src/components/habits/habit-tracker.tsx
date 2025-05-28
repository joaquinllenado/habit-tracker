"use client"

import { useState, useEffect } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

const exampleHabits = [
    "Drink more water",
    "Go to the gym 3x a week",
    "Spend more time with family",
    "Hang out with friends",
    "Learn a new skill"
]
    
export default function HabitTracker({ token } : { token: string }) {
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [habitTitle, setHabitTitle] = useState("");
    const [habitDescription, setHabitDescription] = useState("");
    const [habitFrequency, setHabitFrequency] = useState("");

    const handleCreateHabit = () => {
        fetch("http://localhost:4000/api/habits", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: habitTitle,
                description: habitDescription,
                frequency: habitFrequency
            })
        })
        .catch(error => {
            console.error("Error creating habit:", error);
        });
        setHabitTitle("");
        setHabitDescription("");
        setHabitFrequency("");
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIndex((prev) => (prev + 1) % exampleHabits.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="border p-5 rounded-lg space-y-2">

            <Label>What would you like to accomplish?</Label>
            <Input 
                type="text" 
                placeholder={exampleHabits[placeholderIndex]} 
                onChange={(e) => setHabitTitle(e.target.value)} 
                required
            />
            <Label>Description</Label>
            <Input 
                type="text" 
                placeholder="Description" 
                onChange={(e) => setHabitDescription(e.target.value)}
            />
            <Label>Frequency</Label>
            <Input 
                type="text" 
                placeholder="Frequency" 
                onChange={(e) => setHabitFrequency(e.target.value)}
                required
            />
            <Button onClick={handleCreateHabit} className="mt-4 cursor-pointer">Create Habit</Button>
        </div>
    )
}