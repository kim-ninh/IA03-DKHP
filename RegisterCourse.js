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
    $('#studentTable tr:last').on('click', student, function (event){
        alert(event.data.toString());
    })
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

    var tr = $('<tr></tr>');
    $('#studentTable').append(tr);
    
    $('#studentTable tr:last').append($('<td></td>').text(student.ID));
    $('#studentTable tr:last').append($('<td></td>').text(student.FullName));
    $('#studentTable tr:last').append($('<td></td>').text(student.Sex));
    $('#studentTable tr:last').append($('<td></td>').text(toString(student.DoB)));
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
    var mm = date.getMonth();
    var yyyy = date.getFullYear();
    return dd + "/" + mm + "/" + yyyy;
}