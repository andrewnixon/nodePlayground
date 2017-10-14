const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
  describe('#GET /', () => {
    it('should return 404', (done) => {
      request(app)
        .get('/')
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          });
        })
        .expect(404)
        .end(done);
    });
  });

  describe('#GET /', () => {
    it('should return users', (done) => {
      request(app)
        .get('/users')
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Andrew',
            age:32
          });
        })
        .expect(200)
        .end(done);
    });
  });
});
