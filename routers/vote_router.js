const express = require('express');
const router = express.Router();


router.get('/method1', (req, res) => {
  res.send('vote method1');
});


module.exports = router;