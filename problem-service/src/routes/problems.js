const express = require('express');
const { submitProblem, deleteProblem } = require('../controllers/problemController');
const router = express.Router();

router.post('/submit-problem', submitProblem);
router.delete('/delete-problem/:id', deleteProblem);
module.exports = router;
