//get html on script execution and complete readyState, and sends it

setTimeout(function sendData() {
  console.log("checking");
  if (document.readyState === "complete"){
    const grades = document.querySelectorAll("h3.showGrade");
    const subjects = document.querySelectorAll(".row .row .col-md-3 a");
    let filteredGrades = []
    let filteredSubjects = []
    Object.values(grades).forEach(function (element) {
      filteredGrades.push(element.innerHTML);
    })
    Object.values(subjects).forEach(function (element) {
      filteredSubjects.push(element.innerHTML);
    })
    chrome.runtime.sendMessage({action: "htmlResponse", grades: filteredGrades, subjects: filteredSubjects});
  } else {sendData()}
}, 2000);