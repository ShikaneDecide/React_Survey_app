const express = require("express");
const router = express.Router();
const Survey = require("../models/QuestionsModel");

router.post("/Questions", async (req, res) => {
  const { fullname, satisfaction, feedback, checkboxes, rating, reason } =
    req.body;
  const options = Object.entries(checkboxes).map(([name, value]) => ({
    name,
    value,
  }));

  const newSurvey = new Survey({
    fullname,
    satisfaction,
    feedback,
    rating,
    reason,
    options,
  });

  try {
    await newSurvey.save();
    res.status(201).json({ message: "Survey saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/Questions", async (req, res) => {
  try {
    const feedback = await Survey.find();
    res.json(feedback);
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
});

module.exports = router;
