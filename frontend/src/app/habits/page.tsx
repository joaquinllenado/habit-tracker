import Habit from "@/components/habits/habit";
import HabitTracker from "@/components/habits/habit-tracker";
import { cookies } from "next/headers";

export default async function HabitsPage(){
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        return <div>Please log in to view your habits.</div>;
    }

    const res = await fetch('http://localhost:4000/api/habits', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        cache: "no-store"
    });

    if (!res.ok) {
        <div>Failed to load habits. Please try again.</div>
    }

    const habits = await res.json();
    console.log(habits)

    return(
        <div className="flex flex-col w-full h-full items-center justify-center space-y-5">
            <h1 className="text-4xl">Welcome to the Habits Page</h1>
            <HabitTracker token={token}/>
            {habits.map((habit:any) => (
                <Habit key={habit.id} habit={habit} token={token}/>
            ))}
        </div>
    )
}