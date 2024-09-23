// src/components/SubmissionResults.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SubmissionResults.css';
import Footer from './Footer';
import Header from './Header';

const SubmissionResults = () => {
    const navigate = useNavigate();

    return (
        <div className="submission-results">
            <header className="results-header">
                <Header/>
            </header>

            <main className="results-main">
                <section className="results-metadata">
                    <h3>Metadata</h3>
                    <table>
                        <thead>
                        <tr>
                            <th>name</th>
                            <th>description</th>
                            <th>value</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>name1</td>
                            <td>description1</td>
                            <td>value1</td>
                        </tr>
                        <tr>
                            <td>name2</td>
                            <td>description2</td>
                            <td>value2</td>
                        </tr>
                        {/* Προσθέστε όσες σειρές χρειάζεται */}
                        </tbody>
                    </table>
                </section>

                <section className="results-charts">
                    <h3>Results</h3>
                    <div className="chart">
                        <p>dataset id: 1, dataset name: Dataset 1</p>
                        {/* Εδώ μπορείτε να προσθέσετε τα γραφήματα σας */}
                        <div className="chart-visualization">Chart visualization area</div>
                    </div>
                    <div className="chart">
                        <p>dataset id: 2, dataset name: Dataset 2</p>
                        {/* Εδώ μπορείτε να προσθέσετε τα γραφήματα σας */}
                        <div className="chart-visualization">Chart visualization area</div>
                    </div>
                </section>
            </main>

            <footer className="results-footer">
                <button>Download Excel</button>
                <button>Download Raw</button>
                <button onClick={() => navigate(-1)}>Return</button> {/* Επιστροφή στην προηγούμενη σελίδα */}
                <Footer/>
            </footer>
        </div>
    );
};

export default SubmissionResults;
