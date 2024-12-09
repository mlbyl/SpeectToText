const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const speechRoute= require('./src/speechToTextRoute')

const PORT = process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use('/api',speechRoute)
app.listen(PORT, () => {
  console.log(`App listening on port : ${PORT}`)
})