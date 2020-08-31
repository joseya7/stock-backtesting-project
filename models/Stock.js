const mongoose = require('mongoose')

const StockSchema = new mongoose.Schema({
  Date: {
    type: Date,
  },
  Knicker: {
    type: String,
  },
  Name: {
    type: String,
  },
  Price: {
    type: Number,
  },
})

module.exports = mongoose.model('Stock', StockSchema)
