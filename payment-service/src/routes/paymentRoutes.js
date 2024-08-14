const express = require('express');
const { purchaseCredits } = require('../controllers/paymentController');

const router = express.Router();

// Make sure the route matches exactly
router.post('/purchase-credits', purchaseCredits);

module.exports = router;
