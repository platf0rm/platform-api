const router = require('express').Router();
const VoteController = require('../controllers/vote_controller');

router.get('/:post_id/:direction', VoteController.castVote);

module.exports = router;
