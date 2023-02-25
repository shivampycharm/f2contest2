let employeeList = [
  //   { id: 1, name: "Shivam", age: "21", profession: "Front-End Developer" },
  //   { id: 2, name: "Dubey", age: "22", profession: "Back-End Developer" },
  //   { id: 3, name: "You", age: "23", profession: "Manager" },
];

let nameInput = document.getElementById("name");
let professionInput = document.getElementById("profession");
let ageInput = document.getElementById("age");

let successMessage = document.getElementById("success-message");
let errorMessage = document.getElementById("error-message");

let employeeTable = document.getElementById("employee-table");
let employeeListBody = document.getElementById("employee-list");
let empNo = document.getElementById("emp-no");

if (employeeList.length == 0) {
  empNo.innerText = "You have 0 employees.";
  employeeTable.style.display = "none";
}

function addEmployee() {
  let name = nameInput.innerText;
  let profession = professionInput.innerText;
  let age = ageInput.innerText;

  if (name != "" && profession != "" && age != "") {
    let newEmployee = {
      id: employeeList.length + 1,
      Name: name,
      Profession: profession,
      Age: age,
    };

    employeeList.push(newEmployee);
    console.log(employeeList);

    successMessage.innerText = "Success: Employee added.";
    successMessage.style.display = "block";

    addEmployeeInTable;
  } else {
    errorMessage.innerText = "Please fill in all fields";
    errorMessage.style.display = "block";
  }
}

function addEmployeeInTable() {
  let rowCount = employeeTable.rows.length;

  let row = employeeTable.insertRow(rowCount);

  let c1 = row.insertCell(0);
  c1.innerText = employeeList.id;

  let c2 = row.insertCell(1);
  c1.innerText = employeeList.name;

  let c3 = row.insertCell(2);
  c1.innerText = employeeList.profession;

  let c4 = row.insertCell(3);
  c1.innerText = employeeList.age;
}

addBtn.addEventListener("click", addEmployee);
