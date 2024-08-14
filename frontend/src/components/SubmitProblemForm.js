import React, { useState } from 'react';

const SubmitProblemForm = () => {
    const [description, setDescription] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3007/submit-problem', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ description }), // Αφαίρεση του userId
            });

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            console.log('Problem submitted successfully');
            setDescription('');
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Problem Description:
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Submit Problem</button>
        </form>
    );
};

export default SubmitProblemForm;
