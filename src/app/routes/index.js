const express = require('express')
const router = express.Router()

const logger = require('utils/logger')
const serializer = require('utils/serializer').format

router.get('/', (request, response) => {
  logger.info('Made a request to root at /')
  response.json(serializer('Hooray! The API is officially Verified!!'))
})

module.exports = router
