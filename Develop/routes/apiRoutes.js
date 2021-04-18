const express = require('express');
const router = express.Router();
const noteDB = require('../db/db');


router.get('./api/notes', (request, response) => {
//code should read db.json and return all saved notes as JSON
response.json(noteDB);
})

router.post('./api/notes', (request, response) => {
//shoud receive a new note to save on the request body, add it to the db.json file,
//then return the new note to the client.  Find a way to give each note a unique id when it's saved(npm package?)b
})
module.exports = router;