const express = require('express');
const cors = require('cors');
const knex = require('knex')(require('./knexfile.js')['development']);
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = 5000;

// Import controller functions
// const { addUser, getPassword, getAllItems, getItemById, getItemsByUserId, addItem, updateItem, deleteItem } = require('./db/controllers');

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

// Root route
app.get('/', (req, res) => {
    res.status(200).json('Hello from root route');
});

// View all items
app.get('/items', async (req, res) => {
    try {
        const items = await knex('items').select('*');
        res.status(200).json(items); // Send all items
    } catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).send('Error fetching items');
    }
});

// View specific item by ID
app.get('/items/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const item = await knex('items').where({ id }).first();
        if (!item) {
            return res.status(404).send('Item not found');
        }
        res.status(200).json(item); // Send the specific item
    } catch (error) {
        console.error('Error fetching item:', error);
        res.status(500).send('Error fetching item');
    }
});

// View items by user_id (user's items)
app.get('/user/:id', (req, res) => {
    const { id } = req.params;
    knex('items')
      .select('*')
      .where('user_id', id)  // Change this to 'user_id' to match the foreign key column
      .then(items => {
        const data = items.map((item) => item);
        res.status(200).send(data);
      })
      .catch(error => {
        console.error('Error fetching items:', error);
        res.status(500).json({ error: 'Failed to fetch items' });
      });
  });
  
// Login route
app.post('/login', async (req, res) => {
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
            res.cookie('userId', user.id, { 
                httpOnly: true, 
                secure: process.env.NODE_ENV === 'production', 
                expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), 
                path: '/' 
            });

            res.status(200).json({ message: 'Login successful', user });
        } else {
            res.status(401).json({ error: 'Invalid password' });
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Failed to log in' });
    }
});

// Register route
app.post('/register', async (req, res) => {
    const { username, first_name, last_name, password } = req.body;

    if (!username || !first_name || !last_name || !password) {
        return res.status(400).json({ error: 'Fields are required: username, first_name, last_name, password' });
    }

    try {
        const [newUser] = await knex('users')
            .insert({
                username,
                first_name,
                last_name,
                password, // Note: not hashed here; hash passwords for production.
            })
            .returning(['id', 'username', 'first_name', 'last_name']);

        res.status(201).json({
            message: 'User created successfully',
            user: newUser,
        });
    } catch (error) {
        if (error.code === '23505') {
            res.status(409).json({ error: 'Username already exists' });
        } else {
            res.status(500).json({ error: 'Failed to create user' });
        }
    }
});

// Add item (assuming the request body contains the necessary item data)
app.post('/items', async (req, res) => {
    const { name, description, price, user_id } = req.body;

    if (!name || !description || !price || !user_id) {
        return res.status(400).json({ error: 'All fields are required: name, description, price, user_id' });
    }

    try {
        const [newItem] = await knex('items')
            .insert({ name, description, price, user_id })
            .returning('*');
        res.status(201).json({ message: 'Item added successfully', item: newItem });
    } catch (error) {
        console.error('Error adding item:', error);
        res.status(500).json({ error: 'Failed to add item' });
    }
});

//edit items
app.put('/items/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
  
    try {
      const updatedItem = await knex('items')
        .where({ id })
        .update({ name, description })
        .returning('*');
  
      if (!updatedItem.length) {
        return res.status(404).json({ error: 'Item not found' });
      }
  
      res.status(200).json(updatedItem[0]);
    } catch (error) {
      console.error('Error updating item:', error);
      res.status(500).json({ error: 'Failed to update item' });
    }
  });



// Delete item
app.delete('/items/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const deleted = await knex('items').where({ id }).del();
  
      if (!deleted) {
        return res.status(404).json({ error: 'Item not found' });
      }
  
      res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
      console.error('Error deleting item:', error);
      res.status(500).json({ error: 'Failed to delete item' });
    }
  });

// Start the Express server
app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});
