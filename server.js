const express = require("express");

// import functions for setting up routing
const addApiRoutes = require("./routes/apiRoutes");
const addHtmlRoutes = require("./routes/htmlRoutes");

// Create an express App object (an http server object enhanced by express)
const app = express();

// Create a variable to hold the port. Using process.env.PORT to get the port from
// the environment. This is necessary for the app to function once deployed on
// a platform like Heroku or AWS. You should refer to documentation for the platform
// you will deploy to. "PORT" is often used by platforms to provide your apps with
// the PORT on which they are allowed to listen. Use 8080 as a fallback when no
// PORT env. variable is set. This is the port the server will use when we are
// developing the app locally.
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing. (constructs req.body)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when client requests with
// various request method and path combinations are received.
addApiRoutes(app);
addHtmlRoutes(app);

// The below code effectively "starts" our server
app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});
