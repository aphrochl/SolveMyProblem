import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ViewPage.css';
import Header from './Header';
import Footer from './Footer';

const ViewPage = () => {
    const [metadata, setMetadata] = useState({ created_at: '', solved_at: '', user: '' }); // State for metadata
    const [inputData, setInputData] = useState(''); // State for input data
    const navigate = useNavigate();
    const { id } = useParams(); // Get the problem ID from the URL

    useEffect(() => {
        const fetchMetadata = async () => {
            try {
                const response = await fetch(`http://localhost:3003/problems/${id}/view`); // Adjust URL as needed
                const data = await response.json();

                if (data.success) {
                    setMetadata(data.metadata); // Update state with metadata
                    setInputData(data.input_data); // Update state with input data
                } else {
                    alert(data.message); // Handle errors appropriately
                }
            } catch (error) {
                console.error('Error fetching metadata:', error);
            }
        };

        fetchMetadata(); // Call the function to fetch metadata
    }, [id]); // Dependency array includes id

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
                            <td>{metadata.created_at}</td>
                            <td>{metadata.solved_at}</td>
                            <td>{metadata.user}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Input Data Section */}
            <div className="input-data-section">
                <div className="input-row">
                    <div className="dataset-details">
                        <p><strong>Input Data:</strong></p>
                        {/* Display the input data */}
                        <pre>{JSON.stringify(inputData, null, 2)}</pre> {/* Format the input data for better readability */}
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
