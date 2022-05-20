const mongoose = require("mongoose");

const machineSchema = new mongoose.Schema({
  name: String,
  factoryId: String,
});

module.exports = mongoose.model("Machine", machineSchema);
