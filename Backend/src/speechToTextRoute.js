const express= require('express')
const speechToTextController = require('./speechToText.controller')
const router = express.Router()

router.post('/speech',speechToTextController)

module.exports= router