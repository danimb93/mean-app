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
  Autor.findById(req.params.id).populate('book').exec(function (err, post) {
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

/* GET SINGLE Autor BY Name */    /* ASIGNATURA*/
router.get('/filtro_nombre/:nombre', function(req, res, next) {
  Subject.find({"nombre" : req.params.nombre }, function (err, result) {
    if (err) return next(err);
    res.json(result);
  });
});
/* GET SINGLE Autor BY Titulacion*/    /* ASIGNATURA*/
router.get('/filtro_titulacion/:titulacion', function(req, res, next) {
  Subject.find({"titulacion" : req.params.nombre }, function (err, result) {
    if (err) return next(err);
    res.json(result);
  });
});
/* GET SINGLE Autor BY Cuatrimestre*/    /* ASIGNATURA*/
router.get('/filtro_cuatrimestre/:cuatrimestre', function(req, res, next) {
  Subject.find({"cuatrimestre" : req.params.cuatrimestre }, function (err, result) {
    if (err) return next(err);
    res.json(result);
  });
});

module.exports = router;
