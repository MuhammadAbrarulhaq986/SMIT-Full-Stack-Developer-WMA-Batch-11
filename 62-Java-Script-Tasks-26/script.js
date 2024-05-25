

function Person(name, gender, address, education, profession) {
  this.name = name;
  this.gender = gender;
  this.address = address;
  this.education = education;
  this.profession = profession;
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let records = [];

function addRecord() {
  let name = document.getElementById("name").value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let address = document.getElementById("address").value;
  let education = document.getElementById("education").value;
  let profession = document.getElementById("profession").value;

  let newRecord = new Person(name, gender, address, education, profession);
  records.push(newRecord);

  displayRecords();


  // Clear form fields
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.querySelector('input[name="gender"]:checked').checked = false;
  document.getElementById("education").value = "High School Diploma";
  document.getElementById("profession").value = "Software Engineer";
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



function displayRecords() {
  let recordsContainer = document.getElementById("records-container");
  recordsContainer.innerHTML = "";

  for (let i = 0; i < records.length; i++) {
    let record = records[i];
    let recordElement = document.createElement("p");
    recordElement.innerHTML = `
      <strong>Name:</strong> ${record.name}<br>
      <strong>Gender:</strong> ${record.gender}<br>
      <strong>Address:</strong> ${record.address}<br>
      <strong>Education:</strong> ${record.education}<br>
      <strong>Profession:</strong> ${record.profession}<br>
    `;
    recordsContainer.appendChild(recordElement);
  }
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Bonus: Save records to localStorage
function saveRecords() {
  localStorage.setItem("records", JSON.stringify(records));
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Bonus: Load records from localStorage
function loadRecords() {
  if (localStorage.getItem("records")) {
    records = JSON.parse(localStorage.getItem("records"));
    displayRecords();
  }
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Call loadRecords() when the page loads
window.onload = loadRecords;
