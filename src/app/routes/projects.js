const express = require('express')
const router = express.Router()

router.param('id', (req,res, next, id)=> {
  console.log(`Get project based on id which is ${id}`)
  next()
})

router.get('/', (req, res) => {
  res.json({ message: 'Request made to /projects succesfully' })
})

router.get('/:id', (req, res) => {
  res.json({ message: 'Single project request' })
})

module.exports = router
