const router = require("express").Router();
const fs = require('fs');
const path = require('path');

const { v4: uuid } = require('uuid');
let db = require("../db/db.json");



router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
});

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
});

//api route for notes
router.get("/notes", (req, res) => {
    db=JSON.parse(fs.readFileSync('./db/db.json','UTF8'))
    res.json(db)
});

router.post("/notes", (req, res) => {
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuid()
    }
    db.push(newNote)
    fs.writeFileSync('./db/db.json',
    JSON.stringify(db));

    res.json(db)
});

router.delete("/notes/:id", (req, res) => {
    let id = req.params.id;
    for(i = 0; i < db.length; i++) {
        if (db[i].id === id) {
            db.splice(i, 1)
        }
    }

    deleteNotes = db
    fs.writeFileSync('./db/db.json', 
    JSON.stringify(db)
    );
    res.json(db);
    
})

module.exports = router;