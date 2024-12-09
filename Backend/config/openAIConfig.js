const { ErrorResponse } = require('../src/helpers/responseHandler')
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config()

const connectionToOpenAI = async () => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    return genAI;
  } catch (error) {
    throw new ErrorResponse('Connection error', 500)
  }
}


module.exports = connectionToOpenAI;

