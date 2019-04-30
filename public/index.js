// Tạo ô ngày tháng năm
$(function () {
    for (let d = 1; d <= 31; d++) {
        let option = $(`<option value="${d}"></option>`).text(d);
        $('#dd').append(option);
    }

    for (let d = 1; d <= 12; d++) {
        let option = $(`<option value="${d}"></option>`).text(d);
        $('#mm').append(option);
    }

    for (let d = 1980; d <= 2018; d++) {
        let option = $(`<option value="${d}"></option>`).text(d);
        $('#yyyy').append(option);
    }
});

