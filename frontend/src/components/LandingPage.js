// src/components/LandingPage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Εισάγουμε το CSS αρχείο για στυλ

const LandingPage = () => {
    const navigate = useNavigate(); // Χρησιμοποιούμε το useNavigate για να πλοηγηθούμε

    return (
        <div className="landing-page">
            <header className="landing-header">
                <div className="logo">solveME logo area (70%)</div>

                {/* Προσθέτουμε τα κουμπιά "Administrator" και "User" κάτω από το logo */}
                <div className="user-buttons">
                    <button className="admin-button" onClick={() => navigate('/admin')}>Administrator</button>
                    <button className="guest-button" onClick={() => navigate('/user')}>User</button> {/* Ενημερώθηκε η διαδρομή για τον χρήστη */}
                </div>

                <div className="login">Login</div>
                <div className="system-info">system info: date/time, health...</div>
            </header>

            <main className="landing-main">
                <div className="photo">big solveME photo</div>
            </main>

            <nav className="landing-nav">
                <button>About</button>
                <button>Demo</button>
                <button>Instructions</button>
            </nav>

            <footer className="landing-footer">
                footer: solveME stuff (legal, etc)
            </footer>
        </div>
    );
};

export default LandingPage;
