const notes = require("../db/db.json");

module.exports = app => {
  app.get("/api/notes", (req, res) => {
    res.json(notes);
  });

  app.post("/api/notes", (req, res) => {
    notes.push(req.body);
    res.json(req.body);
  });
};
