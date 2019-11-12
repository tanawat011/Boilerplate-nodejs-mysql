import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
// Middleware
import Middleware from './src/middleware'
// Utils
import { responseUrlNotFound } from './src/utils/response'
// Features
import FeatureCustomer from './src/features/customer'

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

// Middleware
Middleware(app)

// Default path
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to application.' })
})

//Features
FeatureCustomer(app)

// Handle error url not found
app.use((req, res) => {
  responseUrlNotFound(`Url: ${req.protocol}://${req.get('host')}${req.originalUrl} not found.`, res)
})

const port = global.env.port || 3000
app.listen(port, () => {
  console.log('\x1b[36m', `(${global.env.NODE_ENV}) Server is running on port ${port}.\n`)
})
