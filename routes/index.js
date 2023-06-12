const router = require("express").Router();
const fs = require("fs");
const path = require("path");

const uuid = require('../helpers/uuid');
const db = require("../db/db.json");



router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});

//api route for notes
router.get("/api/notes", (req, res) => {
    res.json(db)
});

router.post("/api/notes", (req, res) => {
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuid()
    }
    db.push(newNote)
    fs.writeFileSync('./db/db.json',
    JSON.stringify(db), 
 );
 res.json(db)
});

router.delete("api/notes/:id", (req, res) => {
    let id = req.params.id;
    for(i = 0; i < db.length; i++) {
        if (db[i].id === id) {
            db.splice(i, 1)
        }
    }

    deleteNotes = db
    fs.writeFileSync('.db/db.json', 
    JSON.stringify(db)
    );
    res.json(db);
    
})

module.exports = router;