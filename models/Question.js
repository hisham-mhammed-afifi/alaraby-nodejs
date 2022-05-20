const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  name: String,
  groupId: String,
  factoryId: String,
});

module.exports = mongoose.model("Question", questionSchema);
