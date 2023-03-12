const express = require("express");
const morgan = require("morgan");
const CourseRoute = require("./routes/CoursesRoutes");
const StudentRoute = require("./routes/StudentsRoutes");
const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/view`));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
}
app.use("/api/v1/courses", CourseRoute);
app.use("/api/v1/students", StudentRoute);
module.exports = app;
