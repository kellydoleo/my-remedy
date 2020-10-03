///////////////////////////////////
// IMPORT SCHEMA AND MODEL
///////////////////////////////////
const { Schema, model } = require("mongoose");

////////////////////////////////////
// CREATE SCHEMA
////////////////////////////////////

const userSchema = new Schema({
  fullName: { type: String, required: false},
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: false, unique: true}

});

////////////////////////////////////
// CREATE MODEL
////////////////////////////////////
const User = model("user", userSchema);
// const Name = model("fullName", userSchema);
// const Email = model("user", userSchema);

////////////////////////////////////
// EXPORT MODEL
////////////////////////////////////
module.exports = User;
// module.exports = Name;
// module.exports = Email;