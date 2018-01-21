const { attributes } = require('structure');
 
module.exports = attributes({
  id: Number,
  name: String,
  age: {
    type: Number,
    default: 18
  },
  birthday: Date
})(class User {
  get() {
    return this
  }

  greet() {
    return `Hello ${this.name}!`;
  }
})
