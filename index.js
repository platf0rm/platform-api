const express = require('express');
const app = express();
const api = express.Router();

app.set('view engine', 'pug');

const HelloController = require('./controllers/hello_controller');
const ApiController = require('./controllers/api_controller');

api.use('/', ApiController.index);

app.use('/api', api);

app.get('/', HelloController.index);
app.get('/render/:to', HelloController.renderTest)

app.listen(8080, () => console.log('ready'))