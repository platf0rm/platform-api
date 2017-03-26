const models = require('../models');
const Boom = require('boom');

class VoteController {
  static createByThreadId(req, res) {
    const threadId = req.params.thread_id;
    const direction = req.params.direction;

    models.Vote
      .build({
        direction,
        vote_to: threadId,
      })
      .save()
      .then(() => {
        res.send({ result: 'ok' });
      })
      .catch(() => {
        res.send(Boom.badImplementation().output);
      });
  }
}

module.exports = VoteController;
