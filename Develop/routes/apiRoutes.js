//Dependencies
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const noteDB = require('../db/db.json')
const uniqid = require('uniqid');

const app = express();
app.use(express.json());

//GET requests to '/api/notes' will serve all notes in the database
router.get('/notes', (req, res) => {
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    })
});

//POST requests to '/api/notes' will update the db
router.post('/notes', (req, res) => {
    let jsonPath = path.join(__dirname, "../db/db.json");

    //sets the newNote to the body of the request(which is the text of the note)
    let newNote = req.body;

    //assigns a unique id to the note using Uniqid in NPM
    newNote.id = uniqid();

    noteDB.push(newNote);

    //replaces db.json with a new version that includes the newest note
    fs.writeFile(jsonPath, JSON.stringify(noteDB), function (err) {
        if (err) {
            return console.log(err);
        } return console.log("Note was saved!");
    });
    res.json(newNote);
});



module.exports = router;

