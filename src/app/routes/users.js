const express = require('express')
const router = express.Router()

const usersController = require('app/controllers/usersController')
const errorHandler = require('utils/errorHandler')

router.param('id', (request,response, next, id) => {
  if (Number.isInteger(parseInt(id))) return next()
  response.status(400).send(errorHandler('Id must be an integer'))
})

router.get('/', (request, response) => {
  const { headers: { name } } = request

  try {
    response.json(usersController.greetUser(name || false))
  } catch (error) {
    response.status(400).send(errorHandler(error.message))
  }
})

router.get('/:id', (request, response) => {
  const { params: { id } } = request

  try {
    const user = usersController.getById(id)
    response.json(user)
  } catch (error) {
    response.status(400).send(errorHandler(error.message))
  }
})

module.exports = router
