const express = require('express');
const app = express();
const port = 3004;

app.get('/statistics', (req, res) => {
    res.json({ userCount: 100, paymentCount: 50 });
});

app.listen(port, () => {
    console.log(`Statistics service running on port ${port}`);
});
