const User = require('app/models/User')
const serializer = require('utils/serializer').format

const getById = (id) => {
  if (!id) throw new Error('Must provide id of user')

  const user = new User({ id })
  return serializer(user.get())
}

const greetUser = (name) => {
  if (!name) throw new Error('Must provide name of user')

  const user = new User({ name })
  return serializer(user.greet())
}

module.exports = {
  getById,
  greetUser
}
