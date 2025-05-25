import express, { Request, Response } from 'express';
import * as userController from '../controllers/user.controller';

const router = express.Router();

router.get('/:id', (req: Request, res: Response) => {
    const userId = req.params.id;
    userController.getUserById(req, res, userId);
});

router.post('/', (req: Request, res: Response) => {
    userController.createUser(req, res)
})

router.post('/login', (req: Request, res: Response) => {
    userController.login(req, res)
})

export default router;