var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Book = mongoose.model('Book');

var autorSchema = new Schema({
  nombre: String,
  biografia: String,
  fecha_de_nacimiento: Date,
  nacionalidad: String
});

module.exports = mongoose.model('Autor', autorSchema);
