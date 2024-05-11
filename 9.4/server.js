const express = require('express');
const app = express();
const characterController = require('./disneyController');

app.use('/api/character', characterController);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
