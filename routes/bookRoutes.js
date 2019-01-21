var express = require('express');

var routes = function (book) {
    var router = express.Router();

    router.route('/books')
        .get(function (req, res) {
            var query = {};

            if (req.query.genre) {
                query.genre = req.query.genre;
            }

            book.find(query, function (err, books) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(books);
                }
            });
        })
        .post(function (req, res) {
            var model = new book(req.body);
            model.save();
            res.status(201).send(model);
        });

    router.route('/books/:id')
        .get(function (req, res) {
            book.findById(req.params.id, function (err, book) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(book);
                }
            });
        });
    
        return router;
};


module.exports = routes;