const request = require('supertest')
const app = require('../src/index')

describe("Routes test", () => {
  describe("GET /api/orders", () => {
    it("respond with status 200", (done) => {
      request(app)
        .get('/api/orders')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done)
    })
  })
  describe("GET /api/brl-usd", () => {
    it("respond with status 200", (done) => {
      request(app)
        .get('/api/brl-usd')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done)
    })
  })
  describe("POST /api/orders", () => {
    it("respond with status 200", (done) => {
      const data = {
        'items': [1000, 2000]
      };

      request(app)
        .post('/api/orders')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done)
    })

    it("respond with status 500 when items are empty", (done) => {
      const data = {
        'items': []
      };

      request(app)
        .post('/api/orders')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(500, done)
    })

    it("respond with status 500 when items were not informed", (done) => {
      request(app)
        .post('/api/orders')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(500, done)
    })

    it("respond with status 422 when invalid items were informed", (done) => {
      const data = {
        'items': ['xpto', 1000]
      }

      request(app)
        .post('/api/orders')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(422, done)
    })
  })
})
