// src/components/BuyCreditsPage.js

import React, { useState } from 'react';
import BuyCreditsForm from './BuyCreditsForm';
import './BuyCreditsPage.css';
import Footer from './Footer'; // Import Footer component
import Header from './Header'; // Import Header component

const BuyCreditsPage = () => {
    // Dummy data for balance and available credits
    const [balance, setBalance] = useState(100);  // Initial balance
    const [availableCredits, setAvailableCredits] = useState(50); // Available credits
    const [newBalance, setNewBalance] = useState(balance); // Updated balance after purchasing credits

    return (
        <div className="buy-credits-page">
            <Header/>
            <h1>Buy Credits</h1>

            <div className="info-box">
                <div className="balance-info">
                    <label>Balance:</label>
                    <div className="balance-box">{balance}</div>
                </div>

                <div className="credits-info">
                    <label>Available Credits:</label>
                    <div className="credits-box">{availableCredits}</div>
                </div>
            </div>

            <BuyCreditsForm setNewBalance={setNewBalance} />

            <div className="new-balance-info">
                <label>New Balance:</label>
                <div className="new-balance-box">{newBalance}</div>
            </div>

            <Footer/>
        </div>
    );
};

export default BuyCreditsPage;
