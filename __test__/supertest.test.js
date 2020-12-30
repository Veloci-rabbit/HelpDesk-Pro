const request = require('supertest');
const server = 'http://localhost:8080';

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200)
      })
    })
  });
  describe('/api', () => {
    describe('POST', () => {
      it('responds with 200 status and application/json content type', () => {
        return request(server)
          .post('/api/newTicket')
          .send({
              status: 'hi',
              student: 'hi',
              problem: 'hi',
              fellow: 'hi',
              expectations: 'hi',
              tried: 'hi',
              notWorking: 'hi',
              zoom: 'hi',
              resolvedNotes: 'hi',
          })
          .expect('Content-Type', /application\/json/)
          .expect(200)
      })
    })
   describe('PATCH', () => {
    it('responds with 200 and Application/JSON Content Type ', () => {
      //const dummyTicket = { id : '5febcf78e5b76513f1f667ca', status: "Open" };
      return request(server)
        .patch('/api/resolveTicket')
        .send({ id : '5febcf78e5b76513f1f667ca', status: "Open" })
        .expect('Content-Type', /application\/json/)
        .expect(200);
    })
  })
    describe('GET', () => {
      it('responds with 200 status and application/json content type', () => {
        return request(server)
          .get('/api/getTickets')
          .expect('Content-Type', /application\/json/)
          .expect(200)
      })
    })
  })
})
