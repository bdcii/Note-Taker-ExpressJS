//Dependencies
const express = require('express');
const path = require('path');
const router = express.Router();

//route to serve the notes.html page when /notes is requested
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

//route to serve index.html with any other route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;