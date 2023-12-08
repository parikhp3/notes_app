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

.post('/createNote', async (req, res) => {
    try {
        const note = await Note.createNote(req.body);
        res.send(note);
    } catch (err) {
        res.status(401).send({ message: err.message });
    }
})

.put('/editNote', async (req, res) => {
    try {
        const note = await  Note.editNote(req.body);
        res.send(note);
    } catch (err) {
        res.status(401).send({ message: err.message });
    }
})

.get('/getNote', async (req, res) => {
    try {
        const note = await Note.getNote(req.body);
        console.log(note);
        res.send(note);
    } catch (err) {
        res.status(401).send({ message: err.message });
    }
})

.delete('/deleteNote', async (req, res) => {
    try {
        const note = await Note.deleteNote(req.body);
        res.send({ success: "Note is deleted successfully!" });
    } catch (err) {
        res.status(401).send({ message: err.message });
    }
})

module.exports = router;