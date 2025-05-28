import express, { Request, Response } from 'express';
import * as habitController from '../controllers/habit.controller';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    habitController.getUserHabits(req, res);
});

router.post('/', (req: Request, res: Response) => {
    habitController.createHabit(req, res);
})

router.post('/:id', (req: Request, res: Response) => {
    habitController.updateHabit(req, res);
})

router.delete('/:id', (req: Request, res: Response) => {
    habitController.deleteHabit(req, res);
})

export default router;