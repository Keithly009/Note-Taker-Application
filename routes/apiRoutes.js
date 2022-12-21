const router = require("express").Router(); 

router.get('/', (req,res)=> {
    // This gets the notes from the DB
    res.json(`GOT YOUR ${req.method} REQUEST!!!`);
})

router.post('/', (req,res)=> {
    // This adds the notes from the DB 
    res.json(`GOT YOUR ${req.method} REQUEST!!!`);
});

// BONUS TO DELETE NOTES 

module.exports = router; 