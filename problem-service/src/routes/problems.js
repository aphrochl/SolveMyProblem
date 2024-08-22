// problem-service/src/routes/problems.js
const express = require('express');
const { submitProblem, getProblems, getStatistics, solveProblem } = require('../controllers/problemController');

const router = express.Router();

router.post('/submit-problem', submitProblem);
router.get('/', getProblems);
router.get('/statistics', getStatistics);
router.post('/solve/:id', solveProblem);

module.exports = router;
