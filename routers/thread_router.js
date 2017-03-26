const express = require('express');
const router = express.Router();


router.get('/method1', (req, res) => {
  res.send('thread method 1')
});


module.exports = router;