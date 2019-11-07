import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
// Middleware
import Middleware from './src/middleware'
// Utils
import responseHandle from './src/utils/response'
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

// Handle error page not found
app.use((req, res) => {
  responseHandle({ code: 404 }, res, null)
})

const port = global.env.port || 3000
app.listen(port, () => {
  console.log(`(${global.env.NODE_ENV}) Server is running on port ${port}.`)

  
})
