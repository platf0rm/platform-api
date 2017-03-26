const express = require('express');
const app = express();

app.set('view engine', 'pug');

const {VoteController} = require('./controllers/vote_controller');

app.get('/api/threads/:thread_id/votes', VoteController.createByThreadId);

app.listen(8080, () => console.log('ready'))