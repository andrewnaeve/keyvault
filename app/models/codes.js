
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
    // match: [/.+\@.+\..+/, "Please enter a valid e-mail address"],
  },

  used: {
    type: Boolean,
    default: false
  }

});

var Code = mongoose.model('Code', CodeSchema);
module.exports = Code;
