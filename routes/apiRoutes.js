const router = require("express").Router(); 
// Sets up the handler for random ids' 
const uuid = require('../InsertID/uuid');
// loads the fs to write the files
const fs = require('fs');


router.get('/', (req,res)=> {
    // This gets the notes from the DB
    console.log(`GOT YOUR ${req.method} REQUEST!!!`);
    const datafromJson = fs.readFileSync('./db/db.json', 'utf8');
    res.json(JSON.parse(datafromJson)); 
})

router.post('/', (req,res) => {
    // This adds the notes to the DB 
    console.log(`GOT YOUR ${req.method} REQUEST!!!`);
    const {title, text} = req.body;
    if (title && text ) {
    const newNote = { 
        title, text, 
        id: uuid(), 
    };
    // Need to parse the notes that are currently being used or typed 
    const currentNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    currentNotes.push(newNote); 

    fs.writeFile('./db/db.json', JSON.stringify(currentNotes), (err) => err
    ? console.log(err) 
    : console.log(`Note for ${newNote.title} has been written down!`)
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