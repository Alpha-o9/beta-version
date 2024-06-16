const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  comment:  String, 
  rating: {
    type: Number,
    required: true, // Ensure rating is required
    min: 1,
    max: 5,
  },
  createdAt: { type: Date, default: Date.now }, // Corrected property name
});

module.exports = mongoose.model("Review", reviewSchema);