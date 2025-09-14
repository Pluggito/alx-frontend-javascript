

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
}

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
}

const studentList: Student[] = [student1, student2];

const table = document.createElement("table");
const headerRow = document.createElement("tr");

table.style.borderCollapse = "collapse";
table.style.width = "50%";

["First Name", "Location"].forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    th.style.border = "1px solid black";
    th.style.padding = "8px";
    headerRow.appendChild(th);
});

table.appendChild(headerRow);

studentList.forEach(student => {
    const row = document.createElement("tr");

     const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.border = "1px solid #333";
  firstNameCell.style.padding = "8px";

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  locationCell.style.border = "1px solid #333";
  locationCell.style.padding = "8px";

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
})

document.body.appendChild(table);