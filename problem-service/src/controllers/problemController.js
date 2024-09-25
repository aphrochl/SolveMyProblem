const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'host.docker.internal',
    database: 'mydatabase',
    password: '7666',
    port: 5432,
});

const submitProblem = async (req, res) => {
    // Destructure the required fields from the request body
    const { description, title, user, input_data } = req.body;

    try {
        // Insert the new problem into the database
        const result = await pool.query(
            'INSERT INTO problems (description, title, status, created_at, "user", input_data) VALUES ($1, $2, $3, NOW(), $4, $5) RETURNING *',
            [description, title, 'Pending', user, input_data]
        );

        // Respond with the newly created problem
        res.json({ success: true, problem: result.rows[0] });
    } catch (error) {
        console.error('Error inserting problem into database:', error);
        res.status(500).json({ success: false, message: 'Failed to submit problem' });
    }
};


const deleteProblem = async (req, res) => {
    const id = parseInt(req.params.id, 10); // Ensure id is an integer
    if (isNaN(id)) {
        return res.status(400).json({ success: false, message: 'Invalid problem ID' });
    }

    try {
        const result = await pool.query('DELETE FROM problems WHERE id = $1 RETURNING *', [id]);
        if (result.rowCount === 0) {
            return res.status(404).json({ success: false, message: 'Problem not found' });
        } else {
            return res.json({ success: true, message: 'Problem deleted successfully', problem: result.rows[0] });
        }
    } catch (error) {
        console.error('Error deleting problem from database:', error);
        res.status(500).json({ success: false, message: 'Failed to delete problem' });
    }
};

const getView = async (req, res) => {
    const id = parseInt(req.params.id, 10); // Ensure id is an integer
    if (isNaN(id)) {
        return res.status(400).json({ success: false, message: 'Invalid problem ID' });
    }

    try {
        // Query to fetch the results for the specific problem ID
        const result = await pool.query(
            'SELECT results FROM problems WHERE id = $1',
            [id]
        );

        // Check if the problem exists
        if (result.rows.length === 0) {
            return res.status(404).json({ success: false, message: 'Problem not found' });
        }

        // Parse the results field from text to JSON
        const results = JSON.parse(result.rows[0].results);

        // Separate the metadata and input_data (from within the data object)
        const metadata = results.metadata;
        const input_data = results.data.input_data;

        // Respond with the separated metadata and input_data
        res.json({ success: true, metadata, input_data });
    } catch (error) {
        console.error('Error fetching and parsing results from database:', error);
        res.status(500).json({ success: false, message: 'Failed to retrieve results' });
    }
};


const getResults = async (req, res) => {
    const id = parseInt(req.params.id, 10); // Ensure id is an integer
    if (isNaN(id)) {
        return res.status(400).json({ success: false, message: 'Invalid problem ID' });
    }

    try {
        // Query to fetch the results for the specific problem ID
        const result = await pool.query(
            'SELECT results FROM problems WHERE id = $1',
            [id]
        );

        // Check if the problem exists
        if (result.rows.length === 0) {
            return res.status(404).json({ success: false, message: 'Problem not found' });
        }

        // Parse the results field from text to JSON
        const results = JSON.parse(result.rows[0].results);

        // Separate the metadata and solution
        const metadata = results.metadata;
        const solution = results.solution;

        // Respond with the separated metadata and solution
        res.json({ success: true, metadata, solution });
    } catch (error) {
        console.error('Error fetching and parsing results from database:', error);
        res.status(500).json({ success: false, message: 'Failed to retrieve results' });
    }
};


module.exports = {
    submitProblem,
    deleteProblem,
    getView,
    getResults
};
