const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
  {
    userId: String,
    machineId: String,
    feedback: String,
    status: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Request", requestSchema);
