// Import the path package to get the correct file path for our html
const path = require("path");
const express = require("express");

module.exports = app => {
  // Serve all static files that are contained in public
  app.use(
    express.static(path.join(__dirname, "../public"), {
      extensions: ["html", "js", "css"]
    })
  );
  // If no matching route is found default to home
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
