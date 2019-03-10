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

// Root
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../../index.html"));
});

// Index.html
app.get("/index", function(req, res) {
  res.sendFile(path.join(__dirname, "../../index.html"));
});

// Portfolio.html
app.get("/portfolio", function (req, res) {
    res.sendFile(path.join(__dirname, "../../portfolio.html"));
});

// Contact.html
app.get("/contact", function (req, res) {
    res.sendFile(path.join(__dirname, "../../contact.html"));
});

// Headshot
app.get("/assets/images/nate-headshot.jpg", function(req, res) {
  res.sendFile(path.join(__dirname, "../images/nate-headshot.jpg"));
});

// CSS Stylesheet
app.get("/assets/css/style.css", function (req, res) {
    res.sendFile(path.join(__dirname, "../css/style.css"));
});

// Resume
app.get("/assets/files/Nate_Micinski_Resume_2019.pdf", function (req, res) {
    res.sendFile(path.join(__dirname, "../files/Nate_Micinski_Resume_2019.pdf"));
});

// Portfolio Images
app.get("/assets/images/gif-tastic.png", function (req, res) {
    res.sendFile(path.join(__dirname, "../images/gif-tastic.png"));
});
app.get("/assets/images/hangman.png", function(req, res) {
  res.sendFile(path.join(__dirname, "../images/hangman.png"));
});
app.get("/assets/images/liri.png", function (req, res) {
    res.sendFile(path.join(__dirname, "../images/liri.png"));
});
app.get("/assets/images/node-hangman.png", function(req, res) {
  res.sendFile(path.join(__dirname, "../images/node-hangman.png"));
});
app.get("/assets/images/rpg.png", function(req, res) {
  res.sendFile(path.join(__dirname, "../images/rpg.png"));
});
app.get("/assets/images/train-time.png", function(req, res) {
  res.sendFile(path.join(__dirname, "../images/train-time.png"));
});
app.get("/assets/images/traveler-check.png", function(req, res) {
  res.sendFile(path.join(__dirname, "../images/traveler-check.png"));
});
app.get("/assets/images/trivia.png", function(req, res) {
  res.sendFile(path.join(__dirname, "../images/trivia.png"));
});

/*
===============================
Initialize Server Listen
===============================
*/

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});