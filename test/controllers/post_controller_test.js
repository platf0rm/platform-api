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

const chance = require('chance');
const uuid = require('uuid/v4');

const models = require('../../models');

describe('Post Controller', () => {
  // clean-up Post table
  before((done) => {
    models.Post.sync({ force: true })
      .success(() => {
        done(null);
      })
      .error((err) => {
        done(err);
      });
  });

  // retrieve all threads
  describe('#getThreads()', () => {
    it('should get all threads', (done) => {
      request(app)
        .get('/api/threads')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
          assert.equal('ok', res.body.result);
          assert.notEqual(0, res.body.payload.total);
          done();
        });
    });
  });

  // post a new thread
  describe('#postThread()', () => {
    it('should create a new thread', (done) => {
      request(app)
        .post('/api/threads')
        .send({
          title: chance.sentence({ words: 5 }),
          dateCreated: chance.hammertime(),
          dateUpdated: chance.hammertime(),
          description: chance.sentence({ words: 12 }),
          media: uuid(),
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) throw err;

          const d = res.body.payload.description === null;

          assert.equal('ok', res.body.result);
          assert.strictEqual(d, true);
          done();
        });
    });
  });

  // retrieve all comments from a thread
  describe('#getThreads()', () => {
    it('should get all comments to a thread', (done) => {
      request(app)
        .get('/api/threads/1/comments')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
          assert.equal('ok', res.body.result);
          assert.notEqual(0, res.body.payload.total);
          done();
        });
    });
  });

  // post a new comment to a thread
  describe('#postComment()', () => {
    it('should create a new post to a thread', (done) => {
      request(app)
        .post('/api/threads/1/comments')
        .send({
          author: uuid(),
          text: chance.sentence({ words: 5 }),
          dateCreated: chance.hammertime(),
          dateUpdated: chance.hammertime(),
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) throw err;

          const t = res.body.payload.text === null;

          assert.equal('ok', res.body.result);
          assert.strictEqual(t, true);
          done();
        });
    });
  });
});
