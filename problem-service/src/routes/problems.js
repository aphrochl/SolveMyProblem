const express = require('express');
const router = express.Router();
const { createProblem, getProblems } = require('../models/problem');

// Υποβολή νέου προβλήματος
router.post('/', async (req, res) => {
    try {
        const problem = await createProblem(req.body);
        res.status(201).json(problem);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to submit problem' });
    }
});

// Λήψη όλων των προβλημάτων
router.get('/', async (req, res) => {
    try {
        const problems = await getProblems();
        res.status(200).json(problems);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch problems' });
    }
});

module.exports = router;
