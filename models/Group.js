const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  name: String,
  factoryId: String,
});

module.exports = mongoose.model("Group", groupSchema);
