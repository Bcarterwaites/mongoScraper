// Require mongoose
var mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the headlineSchema with schema class
var headlineSchema = new Schema({
    // headline, a string, must be entered
    headline: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
},
// Summary, a string, must be entered
summary: {
    type: String,
    required: true
},
// Url, a string, must be entered
url: {
    type: String,
    required: true
},
// Date is just a string
date: {
    type: Date,
    default: Date.now
},
saved: {
    type: Boolean,
    default: false
},
});

// Create the Headline model using the headlineSchema
var Headline = mongoose.model("Headline", headlineSchema);

// Export the Headline model

module.exports = Headline;
