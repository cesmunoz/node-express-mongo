const express = require('express');

const routes = (book) => {
    const router = express.Router();

    router.route('/books')
        .get(function (req, res) {
            let query = {};

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
            const model = new book(req.body);
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