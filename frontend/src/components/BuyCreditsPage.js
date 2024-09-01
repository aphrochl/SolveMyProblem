// src/components/BuyCreditsPage.js

import React from 'react';
import BuyCreditsForm from './BuyCreditsForm';
import './BuyCreditsPage.css';

const BuyCreditsPage = () => {
    return (
        <div className="buy-credits-page">
            <header>
                <h1>Buy Credits</h1>
            </header>
            <BuyCreditsForm />
        </div>
    );
};

export default BuyCreditsPage;
