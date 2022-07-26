var selectedRow = null;

function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["studentName"] = document.getElementById("studentName").value;
  formData["Year of joining"] = document.getElementById("Year of joining").value;
  formData["Branch"] = document.getElementById("Branch").value;
  formData["Email"] = document.getElementById("Email").value;
  formData["Addr"] = document.getElementById("Addr").value;
  formData["Course"] = document.getElementById("Course").value;
  formData["Percentage in 12th"] = document.getElementById("Percentage").value;
  
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.studentName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.Yearofjoining;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.Branch;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.Email;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.Addr;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.Course;
  cell7 = newRow.insertCell(7);
  cell7.innerHTML = data.Percentageof12th;
  cell6.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("studentName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("Year of joining").value = selectedRow.cells[1].innerHTML;
  document.getElementById("Branch").value = selectedRow.cells[2].innerHTML;
  document.getElementById("Email").value = selectedRow.cells[3].innerHTML;
  document.getElementById("Addr").value = selectedRow.cells[4].innerHTML;
  document.getElementById("Course").value = selectedRow.cells[5].innerHTML;
  document.getElementById("Percentage of 12th").value = selectedRow.cells[6].innerHTML;

}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.studentName;
  selectedRow.cells[1].innerHTML = formData.Yearofjoining;
  selectedRow.cells[2].innerHTML = formData.Branch;
  selectedRow.cells[3].innerHTML = formData.Email;
  selectedRow.cells[4].innerHTML = formData.Addr;
  selectedRow.cells[5].innerHTML = formData.Course;
  selectedRow.cells[6].innerHTML = formData.Percentage;
}

function onDelete(td) {
  if (confirm("Do you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
    resetForm();
  }
}

function resetForm() {
  document.getElementById("studentName").value = "";
  document.getElementById("Year of joining").value = "";
  document.getElementById("Branch").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("Course").value = "";
  document.getElementById("Percentage").value = "";

  selectedRow = null;
}