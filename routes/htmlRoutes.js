// Import the path package to get the correct file path for our html
const path = require("path");

// Export a function that accepts an Express app object and sets up
// html routes to server the html files.
module.exports = app => {
  // Below code handles when users "visit" a page.
  // In this case the user is shown an HTML page of content
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // If no matching route is found default to home. The "*" is a special
  // character used to match anything. Its important to put this route last!
  // once Express finds a matching route, it stops looking for matches. If
  // we add this route before any other routes, those routes will be unreachable
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
