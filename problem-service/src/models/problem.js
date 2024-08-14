const pool = require('../db');

const createProblem = async (problem) => {
    const { title, description, userId } = problem;
    const query = `
    INSERT INTO problems (title, description, status, user_id, created_at, updated_at)
    VALUES ($1, $2, 'submitted', $3, NOW(), NOW())
    RETURNING *;
  `;
    const values = [title, description, userId];
    const res = await pool.query(query, values);
    return res.rows[0];
};

const getProblems = async () => {
    const query = `
    SELECT * FROM problems ORDER BY created_at DESC;
  `;
    const res = await pool.query(query);
    return res.rows;
};

module.exports = {
    createProblem,
    getProblems,
};
