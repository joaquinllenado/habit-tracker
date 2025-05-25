import pool from '../config/db';
import { User } from '../models/user.model';
import bcrypt from 'bcrypt';

export async function getAllUsers(): Promise<User[]> {
    const result = await pool.query('SELECT * FROM users ORDER BY created_at DESC');
    return result.rows;
}

export async function getUserById(userId: string): Promise<User | null> {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
    return result.rows[0] || null;
}

export async function createUser(name: string, email: string, password: string): Promise<User> {
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const result = await pool.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, hashedPassword]
        );

        if (!result.rows[0]) {
            throw new Error('Failed to create form: no data returned');
        }

        return result.rows[0]
    } catch (error) {
        console.error('Error adding user:', error);
        if (error instanceof Error) {
            throw error;
        }
        throw new Error('Failed to create form');
    }
}

export async function loginUser(email: string, password: string): Promise<User | null> {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];
    if (!user) return null;

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return null;

    return user;
}