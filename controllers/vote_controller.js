const models = require('../models');

class VoteController {
  static createByThreadId(req, res) {
    const threadId = req.params.thread_id;

    models.Vote
      .build({
        direction: 'up',
        vote_to: threadId,
      })
      .save()
      .then(() => {
        res.send({ result: 'ok' });
      });
  }
}

module.exports = VoteController;
