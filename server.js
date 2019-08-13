// Dependencies 

var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");



// Intialize Express

var app = express();


// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make public static directory
app.use(express.static("public"));

// Database configuration with mongoose

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scraper";

if (process.env.MONGODB_URI) {
  
  mongoose.connect(process.env.MONGODB_URI);

} else {

  mongoose.connect(MONGODB_URI);
}

var db = mongoose.connection;

db.once("error", function(error) {
  console.log("Mongoose Error: " + error)
});

db.once("open", function() {
  console.log("Mongoose connection sucessful");
});

// Set engine and default for handlebars

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them

var routes = require("./routes")


// Have requests go through route middleware 

app.use(routes);

// Port Setup

var PORT = process.env.PORT || 8080;

// Start the server

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!")
});
