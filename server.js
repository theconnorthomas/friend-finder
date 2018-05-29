// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8008;

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());


// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require(path.join(__dirname, "./app/routing/apiRoutes.js"))(app);
require(path.join(__dirname,"./app/routing/htmlRoutes.js"))(app);

// LISTENER
// The below code effectively "starts" our server
//===========================================================
app.listen(PORT, function() {
    console.log(`App listinging on PORT ${PORT}`);
});