// Category model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CategorySchema = new Schema({
  title:{type: String, required: true},
  slug:{type: String, required: true},
  created:{type: Date, default: Date.now}
});

mongoose.model('Category', CategorySchema);

