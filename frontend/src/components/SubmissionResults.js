// src/components/SubmissionResults.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SubmissionResults.css';
import Footer from './Footer';
import Header from './Header';

const SubmissionResults = ({ metadata, results }) => {
    const navigate = useNavigate();

    // Handle the download functionality (you can adjust it as needed)
    const handleDownload = () => {
        // Logic for downloading the results goes here
        alert('Results Downloaded');
    };

    return (
        <div className="submission-results">
            {/* Header */}
            <header className="results-header">
                <Header />
            </header>

            {/* Main Content */}
            <main className="results-main">
                {/* Metadata Section */}
                <section className="metadata-section">
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
                                {/* Safely access metadata properties */}
                                <td>{metadata?.created_at || 'N/A'}</td>
                                <td>{metadata?.solved_at || 'N/A'}</td>
                                <td>{metadata?.user || 'N/A'}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* Results Section */}
                <div className="results-section">
                    <div className="results-row">
                        <div className="results-details">
                            <p><strong>Results:</strong></p>
                            {/* Display the results as plain text */}
                            <p>{results || 'No results available'}</p>
                        </div>
                    </div>
                </div>

                {/* Results Charts Section */}
                <section className="results-charts">
                    <h3>Statistics Charts</h3>
                    <div className="chart">
                        <div className="chart-visualization">Chart visualization area</div>
                    </div>

                    {/* Download Results Button */}
                    <button className="download-button" onClick={handleDownload}>
                        Download Results
                    </button>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default SubmissionResults;
