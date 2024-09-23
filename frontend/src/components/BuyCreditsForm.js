import React, { useState } from 'react';

const getSessionId = () => {
    return 'some-session-id';
};

const BuyCreditsForm = () => {
    const [amount, setAmount] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const sessionId = getSessionId();

        try {
            const response = await fetch('http://localhost:3002/api/purchase-credits', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ sessionId, amount }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            console.log('Credits purchased successfully');

        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }

        setAmount('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Amount of Credits:
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Buy Credits</button>
        </form>
    );
};

export default BuyCreditsForm;
