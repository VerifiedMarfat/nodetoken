'use strict'
require('app-module-path').addPath('./src')

const express = require('express')
const bodyParser = require('body-parser')
const logger = require('utils/logger')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(require('app/middlewares'))

app.use('/', require('app/routes'))
// @TODO find a simplier way to link the usage with appropiate route based on filenames
app.use('/users', require('app/routes/users'))
app.use('/projects', require('app/routes/projects'))

const port = process.env.PORT || 8100

module.exports = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
