/*
===============================
Dependencies
===============================
*/

var express = require("express");
var projects = require("./data");

// Express App
var app = express();
var PORT = process.env.PORT || 4000;

// Handlebars
var exphbs = require("express-handlebars");
app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
);
app.set("view engine", "handlebars");

/*
===============================
Routes
===============================
*/

// Serve static files
app.use(express.static("public"));

// Root
app.get("/", function (req, res) {
    res.render("about");
});

// Portfolio.html
app.get("/portfolio", function (req, res) {
    res.render("portfolio", {projects: projects});
});

// Contact.html
app.get("/contact", function (req, res) {
    res.render("contact");
});

/*
===============================
Initialize Server Listen
===============================
*/

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});