'use client';

import { useEffect, useState } from 'react';
import Habit from "./habit";
import { Separator } from "@/components/ui/separator";
import type { Habit as HabitType } from "@/types/habit-type";

export default function HabitsList({ token }: { token: string }) {
    const [habits, setHabits] = useState<HabitType[]>([]);

    const fetchHabits = async () => {
        const res = await fetch('http://localhost:4000/api/habits', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        });

        if (!res.ok) {
        console.error('Failed to load habits');
        return;
        }

        const data = await res.json();
        setHabits(data);
    };

  useEffect(() => {
    fetchHabits();
  }, [habits]);

  return (
    <div className="flex flex-col w-full h-full items-center justify-center space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
        {habits.map((habit) => (
          <Habit 
            key={habit.id} 
            habit={habit}
            token={token} 
            onHabitUpdate={fetchHabits}
          />
        ))}
      </div>
    </div>
  );
} 