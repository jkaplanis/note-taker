const notes = require("../db/db.json");
const fs = require("fs");
const path = require("path");

module.exports = app => {
  // Provides stored notes
  app.get("/api/notes", (req, res) => {
    res.json(notes);
  });

  // handle adding new notes
  app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    if (notes.length === 0) {
      newNote.id = 1;
    } else {
      let newID = notes[notes.length - 1].id + 1;
      newNote.id = newID;
    }
    notes.push(newNote);
    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(notes),
      err => {
        if (err) {
          // Send an error response and stop execution of the function.
          res.writeHead(500, { "Content-Type": "text/plain" });
          return res.end("Oh no! Something isn't right on the server.");
        }
        console.log("Note saved!");
        res.json(req.body);
      }
    );
  });

  // handle deleting specific notes
  app.delete("/api/notes/:id", function (req, res) {
    const noteIndex = notes.findIndex(
      note => note.id === parseInt(req.params.id)
    );
    if (noteIndex === -1) {
      // did not find matching note
      // send error response code
      return res.sendStatus(404);
    }
    // removes the note if its found
    notes.splice(noteIndex, 1);
    // send ok response code
    return res.sendStatus(200);
  });
};
