const express = require('express');
const router = express.Router();

router.get('/items', async (req, res) => {
    try {
      const items = await knex('items').select('*');
      res.status(200).json(items);
    } catch (error) {
      console.error('Error fetching items: ', error.message);
      res.status(500).json({ error: 'Failed to fetch items' });
    }
  });
  
  module.exports = router;