const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
  name: String,
  machineId: String,
  machineCategoryId: String,
});

module.exports = mongoose.model("Model", modelSchema);
