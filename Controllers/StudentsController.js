// const validate = require("../Utils/studentsValidation");
const Student = require("../Models/student");

exports.createStudent = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        student: newStudent,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "invalid data sent!",
    });
  }
};
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({
      status: "success",
      result: students.length,
      data: {
        students: students,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        student: student,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        student: student,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.deleteStudentById = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
