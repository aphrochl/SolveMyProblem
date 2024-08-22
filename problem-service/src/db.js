// problem-service/src/db.js
const { Pool } = require('pg');
require('dotenv').config(); // Φόρτωση μεταβλητών περιβάλλοντος

// const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.POSTGRES_USER || 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    database: process.env.POSTGRES_DB || 'mydatabase',
    password: process.env.POSTGRES_PASSWORD || 'Admin',
    port: process.env.POSTGRES_PORT || 5433,
});

module.exports = pool;
