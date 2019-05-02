/* eslint-disable no-console */
// tạo 1 kết nối lưu vào biến connection
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'KimNinh98',
    database: 'quan_ly_sinh_vien'
});


let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded());

app.get('/', (req, res) => {
    connection.connect();

    let courses = [];     // danh sách tên các môn học

    // eslint-disable-next-line no-unused-vars
    connection.query('SELECT * FROM hoc_phan', function (error, results, fields) {
        if (error) throw error;
                 
        results.forEach(element => {
            courses.push(element.TEN_HOC_PHAN);
        });

        res.render('index', { courses: courses });
    });

    connection.end();
});

app.post('/', function (req, res) {
    console.log(req.body);
    var sinhVien = {
        HO_TEN: req.body.fullName,
        GIOI_TINH: req.body.sex
    };
    console.log(sinhVien);
    
    connection.connect();
    connection.query('INSERT INTO sinh_vien SET ?',sinhVien ,function (error, results, fields) {
        if (error) {
            console.log(error.message);
            throw error;
        }
        console.log(results); 
    });
    connection.end();

    res.send('POST request to the homepage');
});

app.listen(4000, () => { console.log('Server started at: localhost:4000');});