
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CodeSchema = new Schema({

  code: {
    type: String,
    unique: true,
    required: 'A code is required'
  },

  email: {
    type: String,
    default: '',
    
  },

  used: {
    type: Boolean,
    default: false
  }

});

var Code = mongoose.model('Code', CodeSchema);
module.exports = Code;
