const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  satisfaction: { type: String, required: true },
  feedback: { type: String },
  rating: { type: Number },
  reason: { type: String },
  options: [{ name: String, value: Boolean }],
});

const Survey = mongoose.model("Survey", surveySchema);

module.exports = Survey;
