const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mydatabase',
    password: 'Admin',
    port: 5433,
});

const submitProblem = async (req, res) => {
    const { description, title } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO problems (description, title, status, created_at) VALUES ($1, $2, $3, NOW()) RETURNING *',
            [description, title, 'new']
        );
        res.json({ success: true, problem: result.rows[0] });
    } catch (error) {
        console.error('Error inserting problem into database:', error);
        res.status(500).json({ success: false, message: 'Failed to submit problem' });
    }
};

const deleteProblem = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM problems WHERE id = $1 RETURNING *', [id]);
        if (result.rowCount === 0) {
            res.status(404).json({ success: false, message: 'Problem not found' });
        } else {
            res.json({ success: true, message: 'Problem deleted successfully' });
        }
    } catch (error) {
        console.error('Error deleting problem from database:', error);
        res.status(500).json({ success: false, message: 'Failed to delete problem' });
    }
};

module.exports = {
    submitProblem,
    deleteProblem
};
