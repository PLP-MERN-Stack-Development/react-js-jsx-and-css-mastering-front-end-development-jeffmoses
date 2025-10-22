import React from "react";

export default function Card({ task, onToggle, onDelete, onUpdate }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <button onClick={() => onToggle(task.id)}>Toggle</button>
            <button onClick={() => onUpdate(task.id)}>Update</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    );
}