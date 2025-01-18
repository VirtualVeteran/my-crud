const express = require('express');

const app = express();

const port = 5000;

app.get('/', (req, res) => {
    res.status(200).json('hello from root route')
})

app.listen(port, () => console.log('Express server listening on port ${p}'))

