# Habit Tracker (Practice Project)

This is a full-stack habit tracking application built as a practice project. It features a PostgreSQL/Node/Express backend and a Next.js/React frontend. The goal is to help users set, track, and achieve their habits while learning modern web development best practices.

## Features (Planned & In Progress)
- User authentication (sign up, login, JWT-based protected routes)
- Habit creation, editing, and deletion
- Track habit completion, streaks, and skips
- User dashboard to visualize progress
- Admin panel for managing users and habits
- Responsive, modern UI with Next.js and Tailwind CSS
- Form validation with Zod (frontend & backend)
- Context-based user state management
- Secure password hashing (bcrypt)
- PostgreSQL database with proper schema and migrations
- API error handling and feedback

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- PostgreSQL (running locally)

### Backend Setup
1. Navigate to the backend folder:
   ```powershell
   cd backend
   ```
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Create a `.env` file in `backend/` with your database credentials (see `.env.example` or below):
   ```env
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=habit-tracker
   DB_HOST=localhost
   PORT=4000
   JWT_SECRET=your_jwt_secret
   ```
4. Ensure your PostgreSQL server is running and the database exists.
5. Start the backend server:
   ```powershell
   npm run dev
   ```

### Frontend Setup
1. Open a new terminal and navigate to the frontend folder:
   ```powershell
   cd frontend
   ```
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Start the frontend development server:
   ```powershell
   npm run dev
   ```
4. Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Usage
- Sign up for a new account.
- Log in to receive a JWT token (stored in localStorage).
- Create, view, and manage your habits from the dashboard.
- Only authenticated users can access protected routes (e.g., /habits).

## Folder Structure
- `backend/` — Express API, PostgreSQL integration, authentication, and business logic
- `frontend/` — Next.js app, UI components, hooks, context, and pages

## Notes
- This is a practice project for learning and experimenting with full-stack development.
- Features and code may change frequently.
- Contributions and suggestions are welcome!

---

© 2025 Joaquin Llenado. All rights reserved.
