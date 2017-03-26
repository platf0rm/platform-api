const express = require('express');
const app = express();

const ThreadRouter = require('./routers/thread_router');
const VoteRouter = require('./routers/vote_router');

app.use('/threads', ThreadRouter);
app.use('/votes', VoteRouter);

app.listen(8080, () => console.log('ready'))