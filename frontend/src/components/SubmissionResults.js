// src/components/SubmissionResults.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SubmissionResults.css';
import Footer from './Footer';
import Header from './Header';

const SubmissionResults = () => {
    const navigate = useNavigate();

    // Handle the download functionality (you can adjust it as needed)
    const handleDownload = () => {
        // Logic for downloading the results goes here
        alert('Results Downloaded');
    };

    return (
        <div className="submission-results">
            <header className="results-header">
                <Header />
            </header>

            <main className="results-main">
                <section className="results-metadata">
                    <h3>Metadata</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Created at</th>
                                <th>Solved at</th>
                                <th>User</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Created at</td>
                                <td>Solved at</td>
                                <td>User</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className="results-charts">
                    <h3>Results</h3>
                    <div className="chart">
                        <div className="chart-visualization">Chart visualization area</div>
                    </div>

                    {/* Download Results Button */}
                    <button className="download-button" onClick={handleDownload}>
                        Download Results
                    </button>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default SubmissionResults;
