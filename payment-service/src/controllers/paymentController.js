const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mydatabase',
    password: '2372002',
    port: 5433,
});

const purchaseCredits = async (req, res) => {
    const { amount } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO payments (amount) VALUES ($1) RETURNING *',
            [amount]
        );

        res.json({ success: true, payment: result.rows[0] });
    } catch (error) {
        console.error('Error processing payment:', error);
        res.status(500).json({ success: false, message: 'Failed to process payment' });
    }
};

module.exports = {
    purchaseCredits,
};
