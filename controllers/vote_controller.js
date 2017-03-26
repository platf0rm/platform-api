'use strict';

const models = require('../models');

class VoteController {
  createByThreadId(req, res) {
    const thread_id = req.params.thread_id;

    models.Vote
      .build({
        direction: 'up',
        vote_to: thread_id
      })
      .save()
      .then(() => {
        res.send({result: 'ok'});
      });
  }
}

module.exports = new VoteController();
