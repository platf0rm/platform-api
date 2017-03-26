const {Vote} = require('../models/vote');

class VoteController {
  createByThreadId(req, res) {
    const thread_id = req.params.thread_id;

    Vote
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

module.exports.VoteController = new VoteController();