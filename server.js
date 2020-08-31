const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')

const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env' })

// Connect to database
connectDB()

// Route files
const stocks = require('./routes/Stock')
const portfolios = require('./routes/Portfolio')

const app = express()

// Body parser
// app.use(express.json())
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb' }))

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Mount routers
app.use('/api/v1/stocks', stocks)
app.use('/api/v1/portfolios', portfolios)

const PORT = process.env.PORT || 5000

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
