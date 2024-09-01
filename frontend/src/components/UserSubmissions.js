// src/components/UserSubmissions.js

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserSubmissions.css';

const UserSubmissions = () => {
    const navigate = useNavigate();
    const [userSubmissions, setUserSubmissions] = useState([]);

    useEffect(() => {
        const fetchUserSubmissions = async () => {
            try {
                const response = await fetch('http://localhost:3007/user-submissions');
                const data = await response.json();
                setUserSubmissions(data);
            } catch (error) {
                console.error('Error fetching user submissions:', error);
            }
        };

        fetchUserSubmissions();
    }, []);

    return (
        <div className="user-submissions">
            <header className="submissions-header">
                <div className="logo">solveME logo area (70%)</div>
                <div className="system-info">system info: date/time, health...</div>
            </header>

            <button onClick={() => navigate('/buy-credits')}>Buy Credits</button>

            <main className="submissions-main">
                <h2>My submissions</h2>
                <div className="submissions-table">
                    {userSubmissions.map((submission) => (
                        <div className="submission-row" key={submission.id}>
                            <span>{submission.name || 'name'}</span>
                            <span>created on {submission.created_at || 'unknown'}</span>
                            <span>{submission.status || 'ready'}</span>
                            <button>view/edit</button>
                            <button>run</button>
                            <button>view results</button>
                            <button>delete</button>
                        </div>
                    ))}
                </div>
                <button className="new-problem-button" onClick={() => navigate('/submit-problem')}>New Problem</button> {/* Προσθήκη κουμπιού New Problem */}
            </main>

            <footer className="submissions-footer">
                footer: solveME stuff (legal, etc)
            </footer>
        </div>
    );
};

export default UserSubmissions;
