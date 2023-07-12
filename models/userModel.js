const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Name is require"],
    trim: true,
    maxLangth: [30, "Name must Be less then 30 Chars"],
  },
  email: {
    type: String,
    require: [true, "email is require"],
    unique: true,
  },
});//#Here create Schema
module.exports = mongoose.model("User", userSchema);
