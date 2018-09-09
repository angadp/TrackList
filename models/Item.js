const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  tracking_num:{
    type: String
  },
  Status:{
    type: String,
    default: "In Transit"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);
