const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');

notes.get(`/`, (req, res) => {
    readFromFile(`./db/db.json`).then((data) => res.json(JSON.parse(data)));
})

notes.post('/', (req, res) => {

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully`);
    } else {
        res.error('Error in adding note');
    }
});

notes.delete(`/:id`, (req, res) => {

    const filePath = `./db/db.json`;
    const id = req.params.id;

    readFromFile(filePath).then((data) => {

        const notesDb = JSON.parse(data);
        const index = notesDb.findIndex(note => note.id === id);

        if (index !== -1) {
            notesDb.splice(index, 1);
            console.info(`note with id: ${id} deleted`);
            return writeToFile(filePath, notesDb);
        } else {
            res.status(404).json({ message: `Note with id: ${id} not found` });
        }

    })
        .then(() => {
            res.status(204).send();
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: `Server Error` })
        })
})


module.exports = notes;