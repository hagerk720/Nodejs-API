
const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, " a student must have a name "],
  },
  dept: {
    type: String,
    required: [true, " a student must be in department "],
  },
  age: {
    type: Number,
    required: [true, " a student must have an age "],
  },
});
const student = mongoose.model("student", studentSchema);
module.exports = student;
