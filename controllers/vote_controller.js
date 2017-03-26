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
      .then((payload) => {
        res.json({ result: 'ok', payload });
      })
      .catch((reason) => {
        res.json(Boom.badImplementation(reason).output);
      });
  }
}

module.exports = VoteController;
