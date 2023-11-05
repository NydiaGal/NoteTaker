const express = require('express');

const path = require('path');

const app = express();

const PORT = 3001;

app.use(express.static('public'));

app.use(express.json());

const notes = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

app.get('/api/notes', (req, res) => {
    res.json(notes);
  });

app.post('/api/notes', (req, res) => {
    const { title, content } = req.body;
    const newNote = { title, content };
    notes.push(newNote);
    res.status(201).json(newNote);
  });
  
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
