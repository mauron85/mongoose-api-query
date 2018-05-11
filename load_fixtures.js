var fs = require('fs')
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Monster = require('./model');
var monsters = require('./fixtures');

Monster.collection.remove({});

monsters
  .map(m => new Monster(m))
  .forEach(m => m.save().then(() => console.log(m.name + " saved!")));

