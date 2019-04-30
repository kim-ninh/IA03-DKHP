// let express = require('express');
// let app = express();

// app.set('view engine', 'ejs');

// app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.render('index', { foo: 'FOO' });
// });

// app.listen(4000);


var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'KimNinh98',
    database: 'Quan_ly_sinh_vien'
});

connection.connect();

connection.query('SELECT * FROM SINH_VIEN', function (error, results, fields) {
    if (error) throw error;
    //console.log('The solution is: ', results[0].solution);
    results.forEach(element => {
        console.log( element.NGAY_SINH);
        
    });
    //console.log(results);
});

connection.end();