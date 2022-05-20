const mongoose = require("mongoose");

const machineCategorySchema = new mongoose.Schema({
  name: String,
  machineId: String,
});

module.exports = mongoose.model("MachineCategory", machineCategorySchema);
