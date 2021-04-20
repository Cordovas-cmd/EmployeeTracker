// Requirements.
const inquirer = require('inquirer');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '',
    user: 'root',
    password: 'root',
    database: 'Employee_Tracker',
});

connection.connect();