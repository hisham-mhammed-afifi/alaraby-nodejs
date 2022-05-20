const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  name: String,
  questionId: String,
});

module.exports = mongoose.model("Answer", answerSchema);
