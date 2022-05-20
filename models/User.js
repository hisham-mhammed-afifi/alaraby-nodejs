const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  roleId: String,
  username: String,
  password: String,
  email: String,
  factoryId: String,
});

module.exports = mongoose.model("User", userSchema);
