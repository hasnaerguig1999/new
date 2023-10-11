// routes.js

const express = require('express');
const app = require('../app'); 

const router = express.Router();

router.get('/super-admin', (req, res) => {
  res.send('Welcome, super admin!');
});

module.exports = router;
