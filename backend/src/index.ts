import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db'
import userRoutes from './routes/user.routes';
import habitRoutes from './routes/habit.routes';
import adminRoutes from './routes/admin.routes';
import { createUsersTable } from './db/schemas/users';
import { createHabitsTable } from './db/schemas/habits';
import { authenticateToken } from './middleware/auth';

dotenv.config();

async function initializeServer() {
    try {
        await pool.connect();
        console.log('Connected to the database');

        await createUsersTable();
        await createHabitsTable();
        console.log('Database tables created');

        const app = express();
        const PORT = process.env.PORT || 3000;

        app.use(cors());
        app.use(express.json());
        

        app.get('/', (req, res) => {
            res.send('Welcome to the Habit Tracker API');
        });
        
        app.use('/api/users', userRoutes);
        app.use('/api/habits', authenticateToken, habitRoutes);
        app.use('/admin', authenticateToken, adminRoutes)

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error initializing server:', error);
        process.exit(1);
    }
}

initializeServer();