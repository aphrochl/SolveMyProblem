Invoke-RestMethod -Uri http://localhost:3003/problems/delete-problem/15 -Method DELETE -Headers @{"Content-Type"="application/json"}


Invoke-RestMethod -Uri http://localhost:3003/problems/submit-problem -Method POST -H
eaders @{"Content-Type"="application/json"} -Body '{"description": "This is a sample problem description.", "title": "Sample Problem Title", "user": "john_doe", "input_data": "afro"}'


modifying the delete function to also delete the statistics:

```sh
const deleteProblem = async (req, res) => {
    const id = parseInt(req.params.id, 10); // Ensure id is an integer
    if (isNaN(id)) {
        return res.status(400).json({ success: false, message: 'Invalid problem ID' });
    }

    try {
        // Start a transaction
        await pool.query('BEGIN');

        // Delete related statistics first
        await pool.query('DELETE FROM statistics WHERE problem_id = $1', [id]);

        // Delete the problem
        const result = await pool.query('DELETE FROM problems WHERE id = $1 RETURNING *', [id]);

        if (result.rowCount === 0) {
            // Rollback if no problem is found
            await pool.query('ROLLBACK');
            return res.status(404).json({ success: false, message: 'Problem not found' });
        } else {
            // Commit the transaction if everything is successful
            await pool.query('COMMIT');
            return res.json({ success: true, message: 'Problem deleted successfully', problem: result.rows[0] });
        }
    } catch (error) {
        // Rollback in case of error
        await pool.query('ROLLBACK');
        console.error('Error deleting problem from database:', error);
        res.status(500).json({ success: false, message: 'Failed to delete problem' });
    }
};
```
