// User model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  name:{type: String, required: true},
  password:{type: String, required: true},
  emai:{type: String, required: true},
  created:{type:Date, default: new Date()}
});

mongoose.model('User', UserSchema);

