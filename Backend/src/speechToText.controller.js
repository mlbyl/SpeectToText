const { ErrorResponse, SuccessResponse } = require('./helpers/responseHandler')
const speechService = require('./speechToTextService')


const speechToTextController = async (req, res) => {
  const prompt = req.body.prompt;
  try {
    if (!prompt) {
      throw new ErrorResponse('No prompt provided',404  )
    }
    const completion = await speechService(prompt);
    return res.status(200).send(new SuccessResponse('Completition fetched successfully', completion))
  } catch (error) {
    return res.status(500).send(new ErrorResponse(error))
  }
}

module.exports = speechToTextController;