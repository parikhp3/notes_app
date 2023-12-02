const express = require('express');
const Note = require('../models/note');
const router = express.Router();

router.get('/getAllNotes', (req, res) => {
    try {
        const notes = Note.getAllNotes();
        res.send(notes);
    } catch (err) {
        res.status(401).send({ message: err.message });
    }
})

module.exports = router;