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
