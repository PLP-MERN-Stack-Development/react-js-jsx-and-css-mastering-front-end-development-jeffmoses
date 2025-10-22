import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

const Home = () => {
    return (
        <div className="mx-auto max-w-3xl p-4">
            <h1>Welcome to Task Manager</h1>
            <div className="text-center mt-6">
                <p>Manage your tasks efficiently with our simple task management system.</p>
                <div className="mt-4 space-x-4">
                    <Link to="/tasks" className="btn btn-primary">
                        View Tasks
                    </Link>
                    <Link to="/tasks/new" className="btn btn-success">
                        Create New Task
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;