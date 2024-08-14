// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();

// Dummy route
router.get('/', (req, res) => {
    res.send('User Service is up and running!');
});

module.exports = router;
