const fs = require('fs');
const dotenv = require('dotenv');

const envConfig = dotenv.parse(fs.readFileSync('./test/.env.test'));
Object.keys(envConfig).forEach((k) => {
  if (k) {
    process.env[k] = envConfig[k];
  }
});

const assert = require('assert');
const request = require('supertest');
const app = require('../../index').app;

describe('Vote Controller', () => {
  describe('#createByThreadId()', () => {
    it('should create a new vote', (done) => {
      request(app)
        .get('/api/votes/addto/5/up')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
          assert.equal('ok', res.body.result);
          assert.equal(1, res.body.payload.direction);
          done();
        });
    });
  });
});
