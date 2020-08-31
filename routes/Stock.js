const express = require('express')
const { getStocksByDate } = require('../controllers/stock')

const Stock = require('../models/Stock')

const router = express.Router()

router.route('/:ticker/:start/:end').get(getStocksByDate)

module.exports = router
