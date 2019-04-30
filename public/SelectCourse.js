var courses = ['Chuyên đề Java',
    'CSDL Web',
    'Trí tuệ nhân tạo',
    'Lập trình hướng đối tượng',
    'Công nghệ phần mềm',
    'Cấu trúc dữ liệu',
    'Lập trình Windows'
];

function setCourse(courses) {
    courses.forEach(course => {
        let option = $('<option></option>').text(course).val(course);
        $('#courses').append(option);
    });
}

setCourse(courses);

$('#btnMoveRightAll').click(function () {
    $('#courses option').each(function (index, element) {
        // element == this
        var courseName = $(element).val();
        var option = $('<option></option>').text(courseName).val(courseName);
        $('#selectedCourse').append(option);
    });
    $('#courses').empty();
});

$('#btnMoveRightSelected').click(function () {
    $('#courses option').filter(':selected').each(function (index, element) {
        // element == this
        var courseName = $(element).val();
        var option = $('<option></option>').text(courseName).val(courseName);
        $('#selectedCourse').append(option);
        $(element).remove();
    });
});

$('#btnMoveLeftAll').click(function () {
    $('#selectedCourse option').each(function (index, element) {
        // element == this
        var courseName = $(element).val();
        var option = $('<option></option>').text(courseName).val(courseName);
        $('#courses').append(option);
    });
    $('#selectedCourse').empty();
});

$('#btnMoveLeftSelected').click(function () {
    $('#selectedCourse option').filter(':selected').each(function (index, element) {
        // element == this
        var courseName = $(element).val();
        var option = $('<option></option>').text(courseName).val(courseName);
        $('#courses').append(option);
        $(element).remove();
    });
});