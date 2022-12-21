const router = require("express").Router(); 
const uuid = require('../InsertID/uuid');
const fs = require('fs');
router.get('/', (req,res)=> {
    // This gets the notes from the DB
    res.json(`GOT YOUR ${req.method} REQUEST!!!`);
})

router.post('/', (req,res) => {
    // This adds the notes to the DB 
    res.json(`GOT YOUR ${req.method} REQUEST!!!`);
    const {title, text} = req.body;
    if (title && text ) {
    const newNote = { 
        title, text, 
        id: uuid(), 
    } 
    // Need to parse the notes that are currently being used or typed 
    const currentNotes = JSON.parse(fs.readFileSync('.db/db.json', 'utf8'));
    currentNotes.push(newNote); 

    fs.writeFile('.db/db.json', JSON.stringify(currentNotes), (err) => err
    ? console.log(err) 
    : console.log(`Note for ${newNote.title} has been taken, please update your note!`)
    );
    const response = { 
        status: 'Note has been succesfully saved!',
        body: newNote, 
    };
    console.log(response); 
    res.status(201).json(response);
    } else { 
        res.status(500).json('Unable to save notes!')
    }


});

// BONUS TO DELETE NOTES 

module.exports = router; 