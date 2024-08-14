// src/App.js
import React from 'react';
import BuyCreditsForm from './components/BuyCreditsForm';
import SubmitProblemForm from './components/SubmitProblemForm';
import ManageSolutions from './components/ManageSolutions';
import ProblemsList from './components/ProblemsList';
import Statistics from './components/Statistics';

const App = () => {
    return (
        <div>
            <h1>Problem Solving Application</h1>
            <BuyCreditsForm />
            <SubmitProblemForm />
            <ManageSolutions />
            <ProblemsList />
            <Statistics />
        </div>
    );
};

export default App;
