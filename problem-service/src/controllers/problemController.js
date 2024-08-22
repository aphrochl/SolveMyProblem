// problem-service/src/controllers/problemController.js
const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mydatabase',
    password: 'Admin',
    port: 5433,
});

const submitProblem = async (req, res) => {
    const { description } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO problems (description, status, created_at) VALUES ($1, $2, NOW()) RETURNING *',
            [description, 'new']
        );

        res.json({ success: true, problem: result.rows[0] });
    } catch (error) {
        console.error('Error inserting problem into database:', error);
        res.status(500).json({ success: false, message: 'Failed to submit problem' });
    }
};

const getProblems = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM problems');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching problems:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch problems' });
    }
};

const getStatistics = async (req, res) => {
    try {
        const result = await pool.query('SELECT COUNT(*) AS totalProblems FROM problems');
        const totalProblems = parseInt(result.rows[0].totalproblems, 10);
        const solvedResult = await pool.query('SELECT COUNT(*) AS solvedProblems FROM problems WHERE status = $1', ['solved']);
        const solvedProblems = parseInt(solvedResult.rows[0].solvedproblems, 10);

        res.json({ totalProblems, solvedProblems });
    } catch (error) {
        console.error('Error fetching statistics:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch statistics' });
    }
};

const solveProblem = async (req, res) => {
    const problemId = req.params.id;

    try {
        const result = await pool.query(
            'UPDATE problems SET status = $1 WHERE id = $2 RETURNING *',
            ['solved', problemId]
        );

        await pool.query(
            'INSERT INTO statistics (problem_id, processing_time, created_at) VALUES ($1, $2, NOW()) RETURNING *',
            [problemId, Math.random() * 10]
        );

        res.json({ success: true, problem: result.rows[0] });
    } catch (error) {
        console.error('Error solving problem:', error);
        res.status(500).json({ success: false, message: 'Failed to solve problem' });
    }
};

module.exports = {
    submitProblem,
    getProblems,
    getStatistics,
    solveProblem
};
