var mongoose = require('mongoose');
mongoose.connect('mongodb://test:test@ds029735.mlab.com:29735/wk7dbtest');
var Schema = mongoose.Schema;

var personSchema = new Schema({
  firstname : String,
  lastname  : String
});
module.exports = mongoose.model('Person', personSchema);
