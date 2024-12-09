const genAI = require('../config/openAIConfig');
const { ErrorResponse } = require('./helpers/responseHandler');
const speechService = async (prompt) => {
  try {
   
    const api= await genAI()
    const model = api.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.log(error)
    throw new ErrorResponse('Error occurs while translating speech to text', 500)
  }
}

module.exports = speechService;

