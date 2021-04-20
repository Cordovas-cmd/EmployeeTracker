// Requirements.
const inquirer = require('inquirer');
const util = require('util');
const mysql = require('mysql');
const conTab = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '',
    // Your MySQL username
    user: 'root',
    //Your MySQL password
    password: 'root',
    database: 'Employee_Tracker',
});

connection.connect(err => {
    if(err) throw err;
    console.log('connected as id' + connection.threadID + '\n');
    menu();
});

//Function to handle data with inquirer prompt
function menu() {
    inquirer.prompt(
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'option',
            choices: [
                'View all departments',
                'View all Roles',
                'View all employees',
                'Add department',
                'Add Roles',
                'Add Employees',
                'Delete Departments',
                'Delete Employee',
                'Delete Roles',
                'Update Employee Roles',
                'Update employee manager',
                'View Employee By Manager',
                'Exit'
            ]

        }).then(answer => )
}
