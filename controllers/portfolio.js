const Portfolio = require('../models/Portfolio')

exports.createPortfolio = async (req, res) => {
  try {
    const { startYear, endYear, initialAmount, portfolioWrapper } = req.body
    const newPortfolio = new Portfolio({
      startYear,
      endYear,
      initialAmount,
      portfolioWrapper,
    })

    const portfolio = await newPortfolio.save()

    res.json(portfolio)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
}

exports.getLatestPortfolio = async (req, res) => {
  const portfolio = await Portfolio.findOne().sort({ createdAt: -1 })

  res.json(portfolio)
}
