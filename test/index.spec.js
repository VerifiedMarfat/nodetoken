const chai = require('chai')
chai.use(require('chai-http'))

process.env.NODE_ENV = 'test'
process.env.PORT = 8200

const expect = chai.expect
const server = require('../server')

afterEach(async () => {
  server.close()
})

describe('Succesful requests', () => {
  it('should make request to /', async () => {
    const response = await chai.request(server).get('/').set('authorization', 'monkeys')
    expect(response).to.have.status(200)
  })
})

describe('Unsuccesful requests', () => {
  it('should fail a request to /', async () => {
    try {
      await chai.request(server).get('/')
    } catch (error) {
      expect(error).to.have.status(401)
      expect(error.message).to.eql('Unauthorized')
      expect(error.response.body.data).to.eql('Missing authorization in header')
    }
  })
})
