import express, { Request, Response } from 'express';
import * as habitController from '../controllers/habit.controller';
import * as userController from '../controllers/user.controller';

const router = express.Router();

router.get('/habits', (req: Request, res: Response) => {
    habitController.getAllHabits(req, res);
});

router.get('/users', (req: Request, res: Response) => {
    userController.getAllUsers(req, res);
})

export default router;