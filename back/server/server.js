const express = require('express')
const dotEnv = require('dotenv')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const yaml = require('yamljs')
const swaggerDocs = yaml.load('./swagger.yaml')
const dbConnection = require('./database/connection')
const { db } = require('./database/models/userModel')
const { MongoClient } = require('mongodb')

dotEnv.config()

 const app = express()
const PORT = process.env.PORT || 3001

// Connect to the database
dbConnection()

// Handle CORS issues
app.use(cors())


// Request payload middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Handle custom routes
app.use('/api/v1/user', require('./routes/userRoutes'))

// API Documentation
if (process.env.NODE_ENV !== 'production') {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}
let data;
app.get('/', (req, res, next) => {
  
  
  res.send(data)
 
  
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
  const client = new MongoClient('mongodb://127.0.0.1:27017/argentBankDB')
  data = client.db('argentBankDB').collection('users').find({}).toArray();
  
})

