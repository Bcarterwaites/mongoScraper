// Require mongoose
var mongoose = require("mongoose");
// Create the schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the noteSchema with the schema object
var noteSchema = new Schema ({
    // The headline is the article associate with the note
    _headlineId: {
        type: Schema.Types.ObjectId,
        ref: "Headline"
    },
    // Date is just a string
    date: {
        type: Date,
        default: Date.now
    },
    // noteText is just a string
    noteText: String
});

var Note = mongoose.model("Note", noteSchema);

module.exports = Note;