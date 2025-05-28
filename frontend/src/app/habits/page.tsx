import HabitTracker from "@/components/habits/habit-tracker";
import HabitsList from "@/components/habits/habits-list";
import { Separator } from "@/components/ui/separator";
import { cookies } from "next/headers";

export default async function HabitsPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        return <div>Please log in to view your habits.</div>;
    }

    return (
        <div className="flex flex-col w-full h-full items-center justify-center space-y-5">
            <h1 className="text-4xl">Welcome to the Habits Page</h1>
            <Separator className="w-full" />
            <HabitTracker token={token}/>
            <HabitsList token={token} />
        </div>
    );
}