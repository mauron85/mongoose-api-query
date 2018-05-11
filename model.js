var mongoose = require('mongoose');
var mongooseApiQuery = require('./lib/mongoose-api-query');

var monsterSchema = new mongoose.Schema({
  name: String,
  monster_identification_no: Number,
  monster_object_id: mongoose.Schema.ObjectId,
  eats_humans: Boolean,
  foods: [ new mongoose.Schema({
    name: String,
    vegetarian: Boolean,
    calories: Number
  })],
  loc: Array,
  data: {},
  nest: {
    cookoo: Boolean,
    phoneNr: String
  },
  born: Date,
  minion: new mongoose.Schema({
    name: String,
    evil: Boolean,
    birthday: Date
  })
});

monsterSchema.index({'loc':'2d'});
monsterSchema.plugin(mongooseApiQuery);

module.exports = mongoose.model('Monster', monsterSchema);