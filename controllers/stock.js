const Stock = require('../models/Stock')

// @desc    Get Stocks by Date
// @route   GET /api/v1/date_range
// @access  Public
exports.getStocksByDate = async (req, res) => {
  try {
    const ticker = req.params.ticker
    const start = req.params.start
    const end = req.params.end
    if (ticker === '' || start === '' || end === '') {
      return res.status(400).json({
        status: 'failure',
        message: 'Please ensure you pick two dates',
      })
    }
    console.log({ ticker, start, end })
    const stocks = await Stock.find({
      Knicker: ticker,
      Date: {
        $gte: start,
        $lt: end,
      },
    }).sort({ Date: 'asc' })

    if (!stocks) {
      return res.status(404).json({
        status: 'failure',
        message: 'Could not retrieve transactions',
      })
    }

    res.status(200).json({
      status: 'success',
      data: stocks,
    })
  } catch (err) {
    return res.status(500).json({
      status: 'failure',
      error: err.message,
    })
  }
}
