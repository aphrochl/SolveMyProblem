// src/components/SubmitProblemPage.js
import React, { useState } from 'react';
import './SubmitProblemPage.css';
import Footer from './Footer';
import Header from './Header';

const SubmitProblemPage = () => {
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [user, setUser] = useState('');
    const [input, setInput] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3003/problems/submit-problem', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ description, title, user, input_data: input })
            });
            if (!response.ok) throw new Error('Problem submission failed');
            console.log('Problem submitted successfully');
            setDescription('');
            setTitle('');
            setUser('');
            setInput('');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="submit-problem-page">
            <header className="header">
                <Header />
            </header>

            <main className="main-content">
                <div className="solver-model-dropdown">
                    <label>Solver Model</label>
                    <select>
                        {/* Populate with options as needed */}
                        <option>Model 1</option>
                        <option>Model 2</option>
                    </select>
                </div>

                <div className="model-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Model ID</th>
                                <th>Title</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Replace with dynamic content as needed */}
                            <tr>
                                <td>1</td>
                                <td>Model Title 1</td>
                                <td>Notes 1</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Model Title 2</td>
                                <td>Notes 2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="new-submission-section">
                    <h3>New Problem Submission for &lt;model&gt;</h3>
                    <button className="upload-button">Upload Submission Metadata</button>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                placeholder="Title"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                placeholder="Description"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                                required
                                placeholder="User"
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                required
                                placeholder="Input Data"
                            />
                        </div>
                        <div className="form-actions">
                            <button type="submit" className="create-button">Submit</button>
                            <button type="button" className="cancel-button" onClick={() => {
                                setTitle('');
                                setDescription('');
                                setUser('');
                                setInput('');
                            }}>Cancel</button>
                        </div>
                    </form>
                </div>

                <div className="message-area">
                    {/* Display any success or error messages here */}
                </div>
            </main>

            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
};

export default SubmitProblemPage;
