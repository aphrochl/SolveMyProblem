import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPage.css';

const AdminPage = () => {
    const navigate = useNavigate(); // Use useNavigate to navigate
    const [dateTime, setDateTime] = useState(new Date()); // Initialize state for date/time
    const [systemHealth, setSystemHealth] = useState('Healthy'); // Simulate system health status
    const [problems, setProblems] = useState([]);

    // Use useEffect to update date and time every second
    useEffect(() => {
        const interval = setInterval(() => setDateTime(new Date()), 1000); // Update time every second
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    // Fetch problems on component mount
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

    // Handle problem deletion
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
                <div className="system-info">
                    <span>{`System info: ${dateTime.toLocaleString()}`}</span> {/* Display date and time */}
                    <span>{`, System Health: ${systemHealth}`}</span> {/* Display system health */}
                </div>
            </header>

            <button className="back-button" onClick={() => navigate(-1)}>Back</button>

            <main className="admin-main">
                <h2>Manage Problems</h2>
                <div className="activity-table">
                    {problems.map((problem) => (
                        <div className="activity-row" key={problem.id}>
                            <span>{problem.title || 'No Title'}</span>
                            <span>{problem.creator || 'creator'}</span>
                            <span>{problem.description || 'No Description'}</span>
                            <span>created on {new Date(problem.created_at).toLocaleDateString()}</span>
                            <span>{problem.status || 'Status Unknown'}</span>
                            <button onClick={() => navigate(`/edit/${problem.id}`)}>View/Edit</button>
                            <button onClick={() => navigate(`/run/${problem.id}`)}>Run</button>
                            <button onClick={() => navigate(`/results/${problem.id}`)}>View Results</button> {/* Updated line */}
                            <button onClick={() => handleDelete(problem.id)}>Delete</button>
                        </div>
                    ))}
                </div>
            </main>

        </div>
    );
};

export default AdminPage;
