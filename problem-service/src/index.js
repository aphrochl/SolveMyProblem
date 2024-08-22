 // problem-service/src/index.js
require('dotenv').config(); // Φόρτωση των μεταβλητών περιβάλλοντος

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const problemRoutes = require('./routes/problems'); // Ενημερώστε το path αν είναι διαφορετικό
const pool = require('./db');

const app = express();
const port = process.env.PORT || 3003;

// Ενεργοποίηση CORS
app.use(cors({
  origin: 'http://localhost:3006',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Χρήση του body-parser middleware
app.use(bodyParser.json());

// Ορισμός των routes
app.use('/problems', problemRoutes);

// Έλεγχος σύνδεσης στη βάση δεδομένων
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('PostgreSQL connected');

  // Κλείσιμο της σύνδεσης για αποφυγή διαρροών
  release();
});

// Έλεγχος της σύνδεσης με ένα απλό query
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error executing query', err.stack);
  } else {
    console.log('Database connected:', res.rows[0]);
  }
});

app.listen(port, () => {
  console.log(`Problem service running on port ${port}`);
});
