const mongoose = require("mongoose");

const booksMasterSchema = new mongoose.Schema({
    bookName: String,
    authorName: String,
    description: String
})

module.exports = mongoose.model("booksMaster", booksMasterSchema)