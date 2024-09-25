const express = require('express');
const { submitProblem, deleteProblem, getViewMetadata, getViewData } = require('../controllers/problemController');
const router = express.Router();

router.post('/submit-problem', submitProblem);
router.delete('/delete-problem/:id', deleteProblem);
router.get('/:id/viewMetadata', getViewMetadata);
router.get('/:id/viewData', getViewData);


module.exports = router;
