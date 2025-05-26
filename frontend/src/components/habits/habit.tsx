'use client'

import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card";
import type { Habit } from "@/types/habit-type"

export default function Habit({ habit, token } : { habit: Habit, token: string }) {
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
        console.log('Successfully updated')
    }

    return(
        <Card className="flex flex-col text-center items-center justify-center gap-3">
            <CardHeader className="w-full">
                <CardTitle>{habit.title}</CardTitle>
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