require('dotenv').config();
const express = require('express');
const app = express();

const VoteRouter = require('./routers/vote_router');

app.use('/api/votes', VoteRouter);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running at localhost:${port}`));

module.exports.app = app;
