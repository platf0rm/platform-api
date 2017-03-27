const router = require('express').Router();
const VoteController = require('../controllers/vote_controller');

router.get('/addto/:thread_id/:direction', VoteController.createByThreadId);

module.exports = router;
