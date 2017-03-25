const express = require('express');
const app = express();

app.set('view engine', 'pug');

const ApiController = require('./controllers/api_controller');

const ThreadController = require('./controllers/thread_controller');
const CommentController = require('./controllers/comment_controller');
const VoteController = require('./controllers/vote_controller');
const MediaController = require('./controllers/media_controller');

// configure routes
app.get('/api/threads/:thread_id/comment/:comment_id', ApiController.not_implemented);
app.get('/api/threads/:thread_id/comments', ApiController.not_implemented);
app.get('/api/media/:media_id', ApiController.not_implemented);
app.get('/api/threads', ApiController.not_implemented);
app.get('/api/comment/:comment_id/votes', ApiController.not_implemented);
app.get('/api/threads/:thread_id/votes', ApiController.not_implemented);

app.post('/api/threads/:thread_id/comments', ApiController.not_implemented);
app.post('/api/threads/', ApiController.not_implemented);
app.post('/api/comment/:comment_id/votes', ApiController.not_implemented);
app.post('/api/threads/:thread_id/votes', ApiController.not_implemented);

app.listen(8080, () => console.log('ready'))