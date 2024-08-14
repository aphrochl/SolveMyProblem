const express = require('express');
const app = express();
const port = 3001;

app.get('/test-db', (req, res) => {
    res.json({ now: new Date().toISOString() });
});

app.get('/users', (req, res) => {
    res.json([{ id: 1, name: 'User1' }, { id: 2, name: 'User2' }]);
});

app.listen(port, () => {
    console.log(`User service running on port ${port}`);
});
