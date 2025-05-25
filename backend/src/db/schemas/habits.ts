import pool from '../../config/db';

export async function createHabitsTable() {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS habits (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            user_id UUID,
            title VARCHAR(100) NOT NULL,
            description TEXT,
            frequency VARCHAR(50) NOT NULL,
            times_completed INT DEFAULT 0,
            streak INT DEFAULT 0,
            times_skipped INT DEFAULT 0,
            last_completed TIMESTAMP WITH TIME ZONE,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

        CONSTRAINT fk_user
            FOREIGN KEY(user_id)
            REFERENCES users(id)
            ON DELETE CASCADE
        );
    `)
}