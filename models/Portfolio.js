const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PortfolioSchema = new mongoose.Schema({
  startYear: {
    type: String,
  },
  endYear: {
    type: String,
  },
  initialAmount: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  portfolioWrapper: [
    {
      portfolio: [
        {
          asset: String,
          name: String,
          assetPercentage: String,
          intervalPrice: [
            {
              id: Schema.Types.ObjectId,
              Date: Date,
              Knicer: String,
              Name: String,
              Price: Number,
            },
          ],
        },
      ],
      portfolioName: String,
    },
  ],
})

// Geocode & create location field

module.exports = mongoose.model('Portfolio', PortfolioSchema)
