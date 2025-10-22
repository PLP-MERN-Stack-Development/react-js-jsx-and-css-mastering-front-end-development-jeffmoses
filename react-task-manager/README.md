React Task Manager

A modern, responsive, single-page To-Do List application built with React and integrated with Google Firestore for real-time data persistence. TaskFlow allows users to manage their tasks effectively with a clean interface and robust dark mode support.

🌟 Features

Real-time Task Management (CRUD):

Create: Add new tasks easily.

Read: View pending and completed tasks separately in real time.

Update: Toggle tasks between incomplete and complete status.

Delete: Remove tasks permanently.

Data Persistence: Tasks are stored securely and privately for each user using Firestore, ensuring data is available across sessions.

Dark/Light Mode: A dynamic theme toggle allows the user to switch between a bright light mode and a comfortable dark mode, persisting the preference in local storage.

Responsive Design: Built using Tailwind CSS for an adaptive layout that looks great on both mobile and desktop screens.

Single-File Deployment: The entire application logic is contained within a single App.jsx file for easy deployment in constrained environments like Canvas.

🛠️ Technology Stack

Category

Technology

Purpose

Frontend

React (with Hooks)

Component-based UI development and state management.

Styling

Tailwind CSS

Utility-first CSS framework for rapid and responsive styling.

Database

Google Firestore

Real-time, NoSQL database for storing task data.

Authentication

Firebase Auth

Manages user sessions (using Custom Tokens or Anonymous Sign-in).

📁 Project Structure

This project follows a component-driven architecture, organizing related files into dedicated folders even though the deployed output is a single bundled file.

react-task-manager/
├── src/
│   ├── components/      # Reusable UI elements (e.g., Navbar, TaskItem)
│   ├── context/         # Global state providers (ThemeContext, TaskContext)
│   ├── pages/           # View-level components (TasksPage, AboutPage)
│   ├── App.jsx          # The primary, self-contained application component
│   └── main.jsx         # The root entry point that renders the App component
├── .gitignore
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
└── vite.config.js       # Configuration for the Vite build tool




🚀 Getting Started (Local Installation)

Follow these steps to set up and run the React Task Manager on your local machine using standard development tools.

Prerequisites

Ensure you have Node.js and a package manager (npm or Yarn) installed.

Installation Steps

Clone the repository:
Open your terminal and clone the project from GitHub.

git clone https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-jeffmoses.git


Navigate to the project directory:

cd react-task-manager


Install dependencies:
This command installs all necessary libraries (React, Firebase, etc.).

npm install
# or
yarn install


Run the development server:
The application will start the development server, typically opening at http://localhost:5173.

npm run dev


Note: If running locally, you must provide your own Firebase configuration and API keys, as the application relies on global variables for the Canvas environment (detailed below).

☁️ Deployment & Setup Notes (Canvas Environment)

This section details the unique environment variables required for deployment within the Canvas single-file environment.

Data Storage Path

All user data (tasks) is stored securely within Firestore under the following path structure, ensuring privacy for each unique user ID (userId):

/artifacts/{__app_id}/users/{userId}/tasks/{taskId}



Required Global Variables

The application relies on the following global variables being available in the runtime environment:

__firebase_config: The JSON configuration object required to initialize the Firebase application.

__app_id: A unique identifier for the current application instance, used in the Firestore data path.

__initial_auth_token: An optional Firebase Custom Auth Token used to sign in the user for persistent data access. If not provided, the app falls back to anonymous sign-in.


