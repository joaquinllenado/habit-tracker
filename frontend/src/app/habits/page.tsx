import HabitTracker from "@/components/habits/habit-tracker";

export default function HabitsPage(){
    
    return(
        <div className="flex flex-col w-full h-full items-center justify-center">
            <h1 className="text-4xl">Welcome to the Habits Page</h1>
            <HabitTracker />
        </div>
    )
}