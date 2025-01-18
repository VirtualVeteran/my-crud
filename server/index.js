const express = require('express');
const cors = require('cors');
const knex = require('knex')(require('./knexfile.js')["development"]);
const bodyParser = require('body-parser');
const app = express();
const port = 5000;



app.use(cors());
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
    res.status(200).json('Hello from root route');
});

// Post route to fetch items
app.post('/items', async (req, res) => {
    try {
        console.log('Received request for items');
        // Query the database to fetch items
        const items = await knex('inventory_stock').select('*');
        res.status(200).json(items); // Send items as response
    } catch (error) {
        console.error('Error fetching items: ', error.message);
        res.status(500).json({ error: 'Failed to fetch items' });
    }
});

// Start the Express server
app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});
