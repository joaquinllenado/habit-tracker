export interface Habit {
    id: string,
    userId: string,
    title: string,
    description?: string,
    frequency: string,
    timesCompleted: number,
    streak: number,
    timesSkipped: number,
    lastCompleted: Date,
    createdAt: Date
};