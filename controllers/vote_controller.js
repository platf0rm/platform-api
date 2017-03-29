const models = require('../models');
const Boom = require('boom');

class VoteController {
  static castVote(req, res) {
    const postId = req.params.post_id;
    let direction;

    switch (req.params.direction) {
      case 'up': direction = 1; break;
      case 'down': direction = -1; break;
      default: direction = 0;
    }

    if (direction === 0) {
      res.json({ result: 'ok', payload: {} });
    } else {
      models.Vote
        .build({
          direction,
          vote_to: postId,
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
}

module.exports = VoteController;
