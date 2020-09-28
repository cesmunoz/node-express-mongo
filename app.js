const express = require('express');
const moongoose = require('mongoose');
const bodyParser = require('body-parser');

// Models
const book = require('./models/bookModel');

// Database
const db = moongoose.connect('mongodb://localhost/bookAPI');

// Express
const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// API Books
router = require('./routes/bookRoutes')(book);

// API General
app.use('/api', router);
app.get('/', function (req, res) {
    res.send('Welcome to my API');
});

app.listen(port, function () {
    console.log('Running app on PORT:' + port)
});