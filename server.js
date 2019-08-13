// Dependencies 

var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");


// Set up port

var PORT = process.env.PORT || 8080;

// Intialize Express

var app = express();


// Import routes and give the server access to them

var routes = require("./routes")


// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make public static directory
app.use(express.static("public"));

// Database configuration with mongoose


// Set engine and default for handlebars

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Have requests go through route middleware 

app.use(routes);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scraper";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

mongoose.Promise = Promise;

// Start the server

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!")
});
