const express = require("express");
const courseController = require("../Controllers/CourseController");
const router = express.Router();

router
  .route("/")
  .get(courseController.getAllCourses)
  .post(courseController.createCourse);
router
  .route("/:id")
  .get(courseController.getCourse)
  .delete(courseController.deleteCourseById)
  .patch(courseController.updateCourse);

module.exports = router;
