const router = require('express').Router();
const VoteController = require('../controllers/vote_controller');

router.get('/addto/:thread_id', VoteController.createByThreadId);

module.exports = router;
