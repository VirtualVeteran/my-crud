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

app.get('/items', async (req, res) => {
    try {
      const items = await knex('items').select('*'); // Query your table
      res.json(items); // Send the data as a JSON response
    } catch (error) {
      console.error('Error fetching items:', error);
      res.status(500).send('Error fetching items');
    }
  });

// Post route to fetch items
app.post('/items', async (req, res) => {
    try {
        console.log('Received request for items');
        // Query the database to fetch items
        const items = await knex('items').select('*');
        res.status(200).json(items); // Send items as response
    } catch (error) {
        console.error('Error fetching items: ', error.message);
        res.status(500).json({ error: 'Failed to fetch items' });
    }
});

//item detail page
app.get('/items/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const item = await knex('items').where({ id }).first();
    if (!item) {
      return res.status(404).send('Item not found');
    }
    res.json(item);
  } catch (error) {
    console.error('Error fetching item:', error);
    res.status(500).send('Error fetching item');
  }
});

//login
app.post('/login', async (req, res) => {
  console.log('Received data:', req.body); // Log the request body

  const { username, password } = req.body;

  if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
  }

  try {
      const user = await knex('users').where({ username }).first();

      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }

      if (user.password === password) {
          res.status(200).json({ message: 'Login successful', user });
      } else {
          res.status(401).json({ error: 'Invalid password' });
      }
  } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'Failed to log in' });
  }
});
// Start the Express server
app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});
