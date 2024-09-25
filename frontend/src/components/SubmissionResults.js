import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './SubmissionResults.css';
import Footer from './Footer';
import Header from './Header';

const SubmissionResults = () => {
    const [metadata, setMetadata] = useState({ created_at: '', solved_at: '', user: '' });
    const [results, setResults] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await fetch(`http://localhost:3003/problems/${id}/results`);
                const data = await response.json();

                if (data.success) {
                    setMetadata(data.metadata);
                    setResults(data.solution);
                } else {
                    alert(data.message);
                }
            } catch (error) {
                console.error('Error fetching results:', error);
            }
        };

        fetchResults();
    }, [id]);

    const handleDownload = () => {
        const dataStr = JSON.stringify(results, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `results_${id}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="submission-results">
            <header className="results-header">
                <Header />
            </header>

            {/* Scrollable content */}
            <div className="scrollable-content">
                <main className="results-main">
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
                                    <td>{metadata.created_at || 'N/A'}</td>
                                    <td>{metadata.solved_at || 'N/A'}</td>
                                    <td>{metadata.user || 'N/A'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    {/* Results Section */}
                    <div className="results-section">
                        <div className="results-row">
                            <div className="results-details">
                                <p><strong>Results:</strong></p>
                                <pre
                                    className="json-display">{JSON.stringify(results, null, 2) || 'No results available'}</pre>
                            </div>
                            <div className="action-buttons">
                                {/* Download Results Button */}
                                <button className="save-button" onClick={handleDownload}>
                                    Download Results
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Results Charts Section */}
                    <section className="results-charts">
                        <h3>Statistics Charts</h3>
                        <div className="chart">
                            <div className="chart-visualization">Chart visualization area</div>
                        </div>
                    </section>
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default SubmissionResults;
