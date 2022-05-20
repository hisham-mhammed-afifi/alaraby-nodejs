const mongoose = require("mongoose");

const factorySchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("Factory", factorySchema);
