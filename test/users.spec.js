const chai = require('chai')
chai.use(require('chai-http'))

process.env.NODE_ENV = 'test'
process.env.PORT = 8200

const expect = chai.expect
const server = require('../server')

const url = '/users'

afterEach(() => {
  server.close()
})

describe('Succesful requests', () => {
  it(`should get greeting for user`, async () => {
    const name = 'Token';
    const response = await chai.request(server).get(url).set('authorization', 'monkeys').set('name', name)
    expect(response).to.have.status(200)
    expect(response.body.data).to.eql(`Hello ${name}!`)
  })

  it(`should get specific user based on id`, async () => {
    const response = await chai.request(server).get(`${url}/1`).set('authorization', 'monkeys')
    expect(response).to.have.status(200)
    expect(response.body.data).to.deep.eql({ id: 1, age: 18 })
  })
})

describe('Unsuccesful requests', () => {
  it(`should fail because of auth`, async () => {
    try {
      await chai.request(server).get(url)
    } catch (error) {
      expect(error).to.have.status(401)
      expect(error.message).to.eql('Unauthorized')
    }
  })

  it(`should fail to greet for user`, async () => {
    try {
      await chai.request(server).get(url).set('authorization', 'monkeys')
    } catch (error) {
      expect(error).to.have.status(400)
      expect(error.message).to.eql('Bad Request')
      expect(error.response.body.data).to.eql('Must provide name of user')
    }
  })

  it(`should fail to get specific user based on id`, async () => {
    try {
      await chai.request(server).get(`${url}/test`).set('authorization', 'monkeys')
    } catch (error) {
      expect(error).to.have.status(400)
      expect(error.message).to.eql('Bad Request')
      expect(error.response.body.data).to.eql('Id must be an integer')
    }
  })
})
