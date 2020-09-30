const mongoose = require("mongoose");

const remedySchema = new mongoose.Schema({
    title: {type :  String, required: true },
    description: { type: String, required: true },
    source: {type :  String, required: true },
    imageURL: {type :  String, required: false },
    instagram: {type :  String, required: false},
    twitter: {type :  String, required: false }
})

const Remedy = mongoose.model("Remedy", remedySchema);

module.exports = Remedy; 