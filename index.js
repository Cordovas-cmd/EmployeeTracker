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

//Function to handle data with inquirer prompt
function runNode() {
    inquirer.prompt(
        {
//View departments, 
//View all roles
//view all employees
// Add department
// add roles
// Add employees
// Delete departments
//Delete employee
//Delete roles
//Update employee Roles
//Update employee Manager
//View employee by Manager
        })
}
