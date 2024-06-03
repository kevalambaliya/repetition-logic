function addEmploye() {
    let name = document.getElementById("name").value;
    let role = document.getElementById("role").value;
    let salary = parseInt(document.getElementById("salary").value);
    let totalSalary = 0;
    let tableBody = document.getElementById("employedata");

    let newRow = tableBody.insertRow(-1);
    let c1 = newRow.insertCell(0);
    let c2 = newRow.insertCell(1);
    let c3 = newRow.insertCell(2);

    c1.textContent = name;
    c2.textContent = role;
    c3.textContent = salary;

    totalSalary += salary;
    document.getElementById("total").textContent = totalSalary;
}