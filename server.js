/*
===============================
Dependencies
===============================
*/

var express = require("express");
var path = require("path");

// Express App
var app = express();
var PORT = process.env.PORT || 4000;

/*
===============================
Routes
===============================
*/

// Serve static files
app.use(express.static("public"));

// Root
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));
});

// Portfolio.html
app.get("/portfolio", function (req, res) {
    res.sendFile(path.join(__dirname, "./portfolio.html"));
});

// Contact.html
app.get("/contact", function (req, res) {
    res.sendFile(path.join(__dirname, "./contact.html"));
});

/*
===============================
Initialize Server Listen
===============================
*/

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});