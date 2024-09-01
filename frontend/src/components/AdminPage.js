// src/components/AdminPage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPage.css';

const AdminPage = () => {
    const navigate = useNavigate();
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        const fetchProblems = async () => {
            try {
                const response = await fetch('http://localhost:3007/problems'); // Ensure this port is correct
                const data = await response.json();
                setProblems(data);
            } catch (error) {
                console.error('Error fetching problems:', error);
            }
        };

        fetchProblems();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this problem?')) {
            try {
                const response = await fetch(`http://localhost:3007/problems/delete-problem/${id}`, { // Ensure this port is correct
                    method: 'DELETE',
                });
                const data = await response.json();
                if (data.success) {
                    setProblems(problems.filter(problem => problem.id !== id));
                    alert('Problem deleted successfully');
                } else {
                    throw new Error(data.message);
                }
            } catch (error) {
                console.error('Error deleting problem:', error);
                alert('Failed to delete problem');
            }
        }
    };

    return (
        <div className="admin-page">
            <header className="admin-header">
                <div className="logo">solveME logo area (70%)</div>
                <div className="system-info">system info: date/time, health...</div>
            </header>

            <button className="back-button" onClick={() => navigate(-1)}>Back</button>

            <main className="admin-main">
                <h2>Activity</h2>
                <div className="activity-table">
                    {problems.map((problem) => (
                        <div className="activity-row" key={problem.id}>
                            <span>{problem.title || 'No Title'}</span>
                            <span>{problem.creator || 'creator'}</span>
                            <span>{problem.description || 'No Description'}</span>
                            <span>created on {new Date(problem.created_at).toLocaleDateString()}</span>
                            <span>{problem.status || 'Status Unknown'}</span>
                            <button onClick={() => navigate(`/edit/${problem.id}`)}>view/edit</button>
                            <button onClick={() => navigate(`/run/${problem.id}`)}>run</button>
                            <button onClick={() => navigate(`/results/${problem.id}`)}>view results</button> {/* Updated line */}
                            <button onClick={() => handleDelete(problem.id)}>delete</button>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="admin-footer">
                footer: solveME stuff (legal, etc)
            </footer>
        </div>
    );
};

export default AdminPage;
