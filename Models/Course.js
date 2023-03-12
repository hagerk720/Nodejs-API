const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, " a course must have a name "],
  },
  instructorName: {
    type: String,
    required: [true, " a course must have a instructor "],
  },
  duration: {
    type: Number,
    required: [true, " a course must have a duration "],
  },
});
const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
