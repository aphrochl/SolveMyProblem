import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewPage.css';
import Header from './Header';
import Footer from './Footer';

const ViewPage = () => {
    const [problem] = useState({
        scenarioId: '12345',
        scenarioName: 'Sample Scenario',
        solverId: 'Solver01',
        creator: 'John Doe',
        created_at: '2023-09-24',
        status: 'Active',
        datasetId: 'D123',
        datasetName: 'Sample Dataset',
        fromTo: '2023-01-01 to 2023-12-31',
        timeRes: '1 min - 1 hour',
        uploads: true,
    });

    const navigate = useNavigate(); // Initialize navigate

    return (
        <div className="view-page">
            <Header />

            {/* Scenario Details Row */}
            <div className="scenario-details">
                <p><strong>Scenario ID:</strong> {problem.scenarioId}</p>
                <p><strong>Scenario Name:</strong> {problem.scenarioName}</p>
                <p><strong>Solver ID:</strong> {problem.solverId}</p>
                <p><strong>Creator:</strong> {problem.creator}</p>
                <p><strong>Created On:</strong> {new Date(problem.created_at).toLocaleDateString()}</p>
                <p><strong>Status:</strong> {problem.status}</p>
            </div>

            {/* Metadata Table */}
            <div className="metadata-section">
                <table className="metadata-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Value</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>String</td>
                            <td>{problem.scenarioId}</td>
                            <td>Description</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>String</td>
                            <td>{problem.scenarioId}</td>
                            <td>Description</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Input Data Section */}
            <div className="input-data-section">
                <div className="input-row">
                    <div className="dataset-details">
                        <p><strong>Dataset ID:</strong> {problem.datasetId}</p>
                        <p><strong>Dataset Name:</strong> {problem.datasetName}</p>
                        <p><strong>(from - to):</strong> {problem.fromTo}</p>
                        <p><strong>Time Res (min - max):</strong> {problem.timeRes}</p>
                        <p><strong>Uploads:</strong> {problem.uploads ? 'Uploaded' : 'Not uploaded'}</p>
                    </div>
                    <div className="graph-section">
                        {/* Add graphs here */}
                        <img src="/path/to/graph-placeholder.png" alt="Graph Placeholder" />
                    </div>
                    <div className="action-buttons">
                        <button>Template</button>
                        <button>Upload</button>
                        <button>Download</button>
                    </div>
                </div>

                {/* Add more rows for other datasets if needed */}
                <div className="input-row">
                    <div className="dataset-details">
                        <p><strong>Dataset ID:</strong> Not uploaded</p>
                        <p><strong>Dataset Name:</strong> </p>
                        <div className="upload-box">
                            Drag file to upload
                        </div>
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
