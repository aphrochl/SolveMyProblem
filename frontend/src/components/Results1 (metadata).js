// src/components/SubmissionResults.js

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './SubmissionResults.css';
import Footer from './Footer';
import Header from './Header';

const SubmissionResults = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Get the problem ID from the URL
    const [metadata, setMetadata] = useState({ created_at: '', solved_at: '', user: '' }); // State for metadata

    // Handle the download functionality
    const handleDownload = () => {
        alert('Results Downloaded');
    };

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await fetch(`http://localhost:3003/problems/${id}/results`); // Adjust the URL as needed
                const data = await response.json();

                if (data.success) {
                    setMetadata(data.metadata); // Update state with metadata
                } else {
                    alert(data.message); // Handle errors appropriately
                }
            } catch (error) {
                console.error('Error fetching results:', error);
            }
        };

        fetchResults(); // Call the function to fetch results
    }, [id]); // Dependency array includes id

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
                                <td>{metadata.created_at}</td>
                                <td>{metadata.solved_at}</td>
                                <td>{metadata.user}</td>
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
