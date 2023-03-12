const coursesContainer = document.querySelector(".courses-container");
const studentsContainer = document.querySelector(".students-container");
const addCourseForm = document.querySelector(".add-course-form");
const addStudentForm = document.querySelector(".add-student-form");
const cNameIn = document.querySelector(".course-name-i");
const iNameIn = document.querySelector(".instructor-name-i");
const cDurIn = document.querySelector(".course-duration-i");
const sNameIn = document.querySelector(".student-name-i");
const sAgeIn = document.querySelector(".student-age-i");
const sDeptIn = document.querySelector(".student-dept-i");
let card;
getAllCourses();
getAllStudents();
addCourseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let cName = cNameIn.value;
  let iName = iNameIn.value;
  let cDur = cDurIn.value;
  postData("api/v1/courses", {
    name: cName,
    instructorName: iName,
    duration: cDur,
  });
});
addStudentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let sName = sNameIn.value;
  let sAge = +sAgeIn.value;
  let sDept = sDeptIn.value;
  postData("api/v1/students", { name: sName, age: sAge, dept: sDept });
});
function getAllCourses() {
  fetch("api/v1/courses")
    .then((response) => response.json())
    .then((data) =>
      data.data.courses.forEach((element) => {
        console.log(element);
        let html = `
          <div class="col course-card m-2 ">
          <div class="card" style="width: 18rem">
            <div class="card-body" data-id="${element._id}" >
              <h5 class="card-header">${element.name}</h5>
              <h6 class="card-subtitle mb-2 mt-2 text-muted">
              Instructor Name : 
                ${element.instructorName}
              </h6>
              <h6 class="card-subtitle mb-2 mt-2 text-muted">
              Course Duration : 
                ${element.duration}
              </h6>
              <a class="card-link delete">Delete<span>❌</span> </a>
            </div>
          </div>
        </div>
          `;
        coursesContainer.insertAdjacentHTML("beforeend", html);
      })
    );
}

coursesContainer.addEventListener("click", (element) => {
  // ----- delete --------
  if (element.target.classList.contains("delete")) {
    console.log(element.target.parentElement);
    fetch(`api/v1/courses/${element.target.parentElement.dataset.id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      location.reload();
    });
  }
});
studentsContainer.addEventListener("click", (element) => {
  // ----- delete --------
  if (element.target.classList.contains("delete")) {
    console.log(element.target.parentElement);
    fetch(`api/v1/students/${element.target.parentElement.dataset.id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      location.reload();
    });
  }
});
function postData(url, data) {
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((response) => {
      location.reload();
    });
}
function getAllStudents() {
  fetch("api/v1/students")
    .then((response) => response.json())
    .then((data) =>
      data.data.students.forEach((element) => {
        let html = `
          <div class="col student-card m-2 " >
          <div class="card" style="width: 18rem">
            <div class="card-body"data-id="${element._id}">
              <h5 class="card-header">${element.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted mt-3 ">
              Department : <span>
                ${element.dept}</span>
              </h6>
              <h6 class="card-subtitle mb-2 text-muted mt-3 ">
              Age : <span>
                ${element.age}</span>
              </h6>
              <a class="card-link delete" >Delete <span>❌</span></a>
            </div>
          </div>
        </div>
          `;
        studentsContainer.insertAdjacentHTML("beforeend", html);
      })
    );
}
