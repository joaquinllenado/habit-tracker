import pool from '../config/db';
import { Habit } from '../models/habit.model'

export async function getAllHabits(): Promise<Habit[]> {
    const result = await pool.query('SELECT * FROM habits ORDER BY created_at DESC');
    return result.rows;
}

export async function getUserHabits(userId: string): Promise<Habit[] | null> {
    try {
        const result = await pool.query(
            `SELECT * FROM habits WHERE user_id = $1 ORDER BY created_at DESC`,
            [userId]
        );
        return result.rows;
    } catch (error) {
        console.error('Error fetching habits:', error);
        if (error instanceof Error) {
            throw error;
        }
        throw new Error('Failed to fetch habits');
    }
}

export async function updateHabit(habit: Habit): Promise<Habit | null> {
    try {
        const result = await pool.query(
            `UPDATE habits
             SET title = $1, description = $2, frequency = $3, times_completed = $4, streak = $5, times_skipped = $6, last_completed = $7
             WHERE id = $8
             RETURNING *`,
             [habit.title, habit.description, habit.frequency, habit.timesCompleted, habit.streak, habit.timesSkipped, habit.lastCompleted, habit.id]
        )
        return result.rows[0];
    } catch(error){
        console.error('Error updating habit:', error);
        if (error instanceof Error) {
            throw error;
        }
        throw new Error('Failed to update habit');
    }
    
}

export async function createHabit(userId: string, title: string, description: string, frequency: number): Promise<Habit | null> {
    try {
        const result = await pool.query(
            `INSERT INTO habits (user_id, title, description, frequency)
             VALUES ($1, $2, $3, $4)`,
            [userId, title, description, frequency]
        )
        return result.rows[0];
    } catch (error) {
        console.error('Error creating habit:', error);
        if (error instanceof Error) {
            throw error;
        }
        throw new Error('Failed to create habit');
    }
}

export async function deleteHabit(id: string): Promise<void> {
    try {
        await pool.query('DELETE FROM habits WHERE id = $1', [id]);
    } catch (error) {
        console.error('Error deleting habit:', error);
    }
}
