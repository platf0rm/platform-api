const express = require('express');
const app = express();

const {VoteController} = require('./controllers/vote_controller');

app.get('/api/threads/:thread_id/votes', VoteController.createByThreadId);

app.listen(8080, () => console.log('ready'))