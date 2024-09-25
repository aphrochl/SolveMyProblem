import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewPage.css';
import Header from './Header';
import Footer from './Footer';

const ViewPage = () => {
    const navigate = useNavigate(); // Initialize navigate

    return (
        <div className="view-page">
            <Header />

            {/* Metadata Section */}
            <div className="metadata-section">
                <h2><strong>Metadata</strong></h2>
                <table className="metadata-table">
                    <thead>
                        <tr>
                            <th>Created at</th>
                            <th>Solved at</th>
                            <th>User</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{/* Insert Created at value here */}</td>
                            <td>{/* Insert Solved at value here */}</td>
                            <td>{/* Insert User value here */}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Input Data Section */}
            <div className="input-data-section">
                <div className="input-row">
                    <div className="dataset-details">
                        <p><strong>Input Data:</strong> {/* Insert Dataset ID here */}</p>
                    </div>
                    <div className="graph-section">
                        {/* Add actual graph component or graph rendering logic */}
                        <img src="/path/to/graph-placeholder.png" alt="Graph Placeholder" />
                    </div>
                    <div className="action-buttons">
                        <button>Upload</button>
                        <button>Download</button>
                    </div>
                </div>
            </div>

            {/* Done Button */}
            <div className="done-button-section">
                <button className="done-button">Done</button>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ViewPage;
