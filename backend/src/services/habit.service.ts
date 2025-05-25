import pool from '../config/db';
import { Habit } from '../models/habit.model'

export async function getAllHabits(): Promise<Habit[]> {
    const result = await pool.query('SELECT * FROM habits ORDER BY created_at DESC');
    return result.rows;
}

export async function getUserHabits(userId: string): Promise<Habit[] | null> {
    try {
        const result = await pool.query(`SELECT * FROM habits WHERE user_id = ${userId} ORDER BY created_at DESC`);
        return result.rows;
    } catch (error) {
        console.error('Error fetching habits:', error);
        if (error instanceof Error) {
            throw error;
        }
        throw new Error('Failed to fetch habits');
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