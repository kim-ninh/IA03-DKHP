var students = [];

function Student(ID, FullName, Sex, DoB, Courses) {
    this.ID = ID;
    this.FullName = FullName;
    this.Sex = Sex;
    this.DoB = DoB;
    this.Courses = Courses;
    this.toString = function () {
        return "Mã số SV: " + this.ID + "\n" +
            "Họ và tên: " + this.FullName + "\n" +
            "Giới tính: " + this.Sex + "\n" +
            "Ngày sinh " + toString(this.DoB) + "\n" +
            "Các môn học: " + this.Courses.toString();
    };
}

function addRowHandlers(student) {
    var studentTable = document.getElementById("studentTable");
    var rows = studentTable.getElementsByTagName("tr");

    var lastRow = studentTable.rows[rows.length - 1];
    var createClickHandler = function (row) {
        return function () {
            var firstCell = row.getElementsByTagName("td")[0];
            var id = firstCell.innerText;
            // alert("mssv: " + id);
            alert(student.toString());
        }
    }
    lastRow.onclick = createClickHandler(lastRow);
}

function registerCourses() {
    var student = getStudent();

    if (student !== null) {
        students.push(student);
        addStudentToTable(student);
    } else {
        alert("Hãy nhập đủ MSSV, Họ tên và chọn ít nhất 1 môn học");
    }
}

function addStudentToTable(student) {
    var table = document.getElementById("studentTable");
    var tr = document.createElement("tr");
    var td = document.createElement("td");

    td.innerText = student.ID;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = student.FullName;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = student.Sex;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = toString(student.DoB);
    tr.appendChild(td);

    table.appendChild(tr);

    addRowHandlers(student);
}

function getStudent() {
    var ID = mainForm.inputID.value;
    var fullName = mainForm.fullName.value;
    var sex = mainForm.sex.value;
    var dd = parseInt(mainForm.dd.selectedOptions[0].value);
    var mm = parseInt(mainForm.mm.selectedOptions[0].value);
    var yyyy = parseInt(mainForm.yyyy.selectedOptions[0].value);
    var date = new Date(yyyy, mm, dd);
    var selectedCourses = getSelectedCourses();
    var student = new Student(ID, fullName, sex, date, selectedCourses);

    if (ID === "" || fullName === "" || selectedCourses.length === 0)
        return null;
    return student;
}

function getSelectedCourses() {
    var selectedCourses = [];
    var selectOptionElement = document.getElementById("selectedCourses");

    for (let i = 0; i < selectOptionElement.children.length; i++) {
        var optionElement = selectOptionElement.children[i];
        selectedCourses.push(optionElement.value);
    }
    return selectedCourses;
}

function toString(date) {
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    return dd + "/" + mm + "/" + yyyy;
}