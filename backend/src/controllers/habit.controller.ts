import { Request, Response } from 'express';
import * as habitService from '../services/habit.service';
import { z } from 'zod';

const habitSchema = z.object({
    title: z.string().min(1),
    description: z.string(),
    frequency: z.string().min(1)
})

export const getAllHabits = async (req: Request, res: Response) => {
    try {
        const habits = await habitService.getAllHabits();
        res.json(habits)
    } catch (error) {
        console.error('Error fetching habits:', error);
        res.status(500).json({ message: 'Internal server error' })
    }
}

export const getUserHabits = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user?.userId;
        if (!userId) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const habits = await habitService.getUserHabits(userId);
        res.status(201).json(habits);
    } catch (error) {
        console.error('Error fetching user habits:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const updateHabit = async (req: Request, res: Response) => {
    try {
        const habitToUpdate = req.body;
        const habits = await habitService.updateHabit(habitToUpdate);
        res.status(201).json(habits);
    } catch (error) {
        console.error('Error updating habits', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const createHabit = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user?.userId;
        if (!userId) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const parsed = habitSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({ errors: parsed.error.errors })
        }
        const { title, description, frequency } = req.body;
        const newHabit = await habitService.createHabit(userId, title, description, frequency);
        res.status(201).json(newHabit);
    } catch (error) {
        console.error('Error creating habit:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const deleteHabit = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await habitService.deleteHabit(id);
        res.status(200).json({ message: 'Habit deleted successfully' });
    } catch (error) {
        console.error('Error deleting habit:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
