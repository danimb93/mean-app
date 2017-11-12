var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Autor = require('../models/Autor.js');



/* GET ALL Autor */
router.get('/', function(req, res, next) {
  Autor.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Autor BY ID */
router.get('/:id', function(req, res, next) {
  Autor.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* SAVE autor */
router.post('/', function(req, res, next) {
   Autor.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE autor */
router.put('/:id', function(req, res, next) {
  Autor.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE autor */
router.delete('/:id', function(req, res, next) {
 Autor.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
