'use client'

import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card";
import type { Habit } from "@/types/habit-type"
import { X } from "lucide-react";

export default function Habit({ habit, token, onHabitUpdate } : { habit: Habit, token: string, onHabitUpdate: () => Promise<void> }) {
    const [timesCompleted, setTimesCompleted] = useState(habit.timesCompleted || 0);

    function handleCompleted() {
        setTimesCompleted((habit.timesCompleted || 0) + 1);
        const updatedHabit = {
            ...habit,
            timesCompleted: timesCompleted,
            lastCompleted: new Date().toISOString(),
        }

        fetch(`http://localhost:4000/api/habits/${habit.id}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedHabit)
        });
        onHabitUpdate();
        console.log('Successfully updated')
    }

    function handleDelete() {
        fetch(`http://localhost:4000/api/habits/${habit.id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        onHabitUpdate();
        console.log('Successfully deleted')
    }

    return(
        <Card className="flex flex-col text-center items-center justify-center gap-3 relative">
            <CardHeader className="w-full">
                <CardTitle>{habit.title}</CardTitle>
                <X className="cursor-pointer absolute top-2 right-2" onClick={handleDelete}/>
            </CardHeader>
            <CardContent>
                <p className="text-md text-muted-foreground">
                    Times completed: <br/>{timesCompleted}
                </p>
            </CardContent>
            <CardFooter>
                <Button className="cursor-pointer hover:bg-purple-500" onClick={handleCompleted}>
                    Completed
                </Button>
            </CardFooter>
        </Card>
    )
}