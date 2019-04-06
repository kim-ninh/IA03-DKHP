var courses = ["Chuyên đề Java",
    "CSDL Web",
    "Trí tuệ nhân tạo",
    "Lập trình hướng đối tượng",
    "Công nghệ phần mềm",
    "Cấu trúc dữ liệu",
    "Lập trình Windows"
];

function setCourse(courses) {
    var availableCourse = document.getElementById("courses");

    for (i = 0; i < courses.length; i++) {
        var option = document.createElement("option");
        option.text = courses[i];
        option.value = courses[i];
        availableCourse.appendChild(option);
    }
}

function moveAllSelection(src, dest) {
    var length = src.children.length;
    for (; length > 0; length--) {
        var option = src.childNodes[0];
        dest.appendChild(option);
    }
}

function moveSelectedSelection(src, dest) {
    for (let i = 0; i < src.selectedOptions.length; i++) {
        var option = src.selectedOptions[i];
        var newOption = document.createElement("option");
        newOption.value = option.value;
        newOption.text = option.text;
        dest.appendChild(newOption);
    }

    var n = src.selectedOptions.length;
    for (; n > 0; n--) {
        var option = src.selectedOptions[0];
        option.parentNode.removeChild(option);
    }
}

function moveRightAll() {
    var availableCourse = document.getElementById("courses");
    var selectedCourses = document.getElementById("selectedCourses");
    moveAllSelection(availableCourse, selectedCourses);
}

function moveRightSelected() {
    var availableCourse = document.getElementById("courses");
    var selectedCourses = document.getElementById("selectedCourses");
    moveSelectedSelection(availableCourse, selectedCourses);
}

function moveLeftAll() {
    var availableCourse = document.getElementById("courses");
    var selectedCourses = document.getElementById("selectedCourses");
    moveAllSelection(selectedCourses, availableCourse);
}

function moveLeftSelected() {
    var availableCourse = document.getElementById("courses");
    var selectedCourses = document.getElementById("selectedCourses");
    moveSelectedSelection(selectedCourses, availableCourse);
}

setCourse(courses);