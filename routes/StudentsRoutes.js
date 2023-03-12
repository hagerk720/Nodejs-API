const express = require("express");
const StudentController = require("../Controllers/StudentsController");
const router = express.Router();

router
  .route("/")
  .get(StudentController.getAllStudents)
  .post(StudentController.createStudent);
router
  .route("/:id")
  .get(StudentController.getStudent)
  .delete(StudentController.deleteStudentById)
  .patch(StudentController.updateStudent);

module.exports = router;
