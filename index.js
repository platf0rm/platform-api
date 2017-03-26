require('dotenv').config();
const express = require('express');

const app = express();

const VoteRouter = require('./routers/vote_router');

app.use('/api/votes', VoteRouter);

app.listen(8080, () => console.log('ready'));
