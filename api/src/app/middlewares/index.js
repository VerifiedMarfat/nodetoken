const express = require('express')
const router = express.Router()

const errorHandler = require('utils/errorHandler')

router.use((request, response, next) => {
  if (request.headers['authorization']) return next()

  response.status(401).send(errorHandler('Missing authorization in header'))
})

module.exports = router
