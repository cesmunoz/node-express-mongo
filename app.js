var express = require('express');
var moongoose = require('mongoose');
var bodyParser = require('body-parser');

// Models
var book = require('./models/bookModel');

// Database
var db = moongoose.connect('mongodb://localhost/bookAPI');

// Express
var app = express();
var port = process.env.PORT || 8000;

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