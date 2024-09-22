import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Import CSS
import logo from '../logo.png'; // Import the logo image

const LandingPage = () => {
    const navigate = useNavigate(); // Use useNavigate to navigate
    const [dateTime, setDateTime] = useState(new Date()); // Initialize state for date/time
    const [systemHealth, setSystemHealth] = useState('Healthy'); // Simulate system health status

    // Use useEffect to update date and time every second
    useEffect(() => {
        const interval = setInterval(() => setDateTime(new Date()), 1000); // Update time every second
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="landing-page">
            <header className="landing-header">

                {/* Buttons for Administrator and User */}
                <div className="user-buttons">
                    <button className="admin-button" onClick={() => navigate('/admin')}>Administrator</button>
                    <button className="guest-button" onClick={() => navigate('/user')}>User</button>
                </div>

                <div className="system-info">
                    <span>{`System info: ${dateTime.toLocaleString()}`}</span> {/* Display date and time */}
                    <span>{`, System Health: ${systemHealth}`}</span> {/* Display system health */}
                </div>
            </header>
            <div className="logo">
                <img src={logo} alt="solveME Logo" style={{width: '70%'}}/> {/* Display the logo image */}
            </div>
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
