const notes = require("../db/db.json");
const fs = require("fs");
const path = require("path");

module.exports = app => {
  app.get("/api/notes", (req, res) => {
    res.json(notes);
  });

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
        console.log("Saved!");
        res.json(req.body);
      }
    );
  });
};
