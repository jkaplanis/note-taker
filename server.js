const express = require("express");

// import functions for setting up routing
const addApiRoutes = require("./routes/apiRoutes");
const addHtmlRoutes = require("./routes/htmlRoutes");

// Create an express App object
const app = express();

// Variable to hold the port.
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// The below points our server to route files
addApiRoutes(app);
addHtmlRoutes(app);

// The below code effectively "starts" our server
app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});
