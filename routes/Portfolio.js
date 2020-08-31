const express = require('express')
const {
  createPortfolio,
  getLatestPortfolio,
} = require('../controllers/portfolio')

const Portfolio = require('../models/Portfolio')

const router = express.Router()

router.route('/').post(createPortfolio).get(getLatestPortfolio)

module.exports = router
