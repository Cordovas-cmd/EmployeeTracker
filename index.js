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

        }).then(answer => {
            switch (answer.option) {
                case "View all departments":
                    viewAllDepartments();
                    break;

                case "View all Roles":
                    viewAllRoles();
                    break;

                case "View all employees":
                    viewAllEmployees();
                    break;

                case "Add department":
                    addDepartment();
                    break;

                case "Add Roles":
                    addRoles();
                    break;

                case "Add Employees":
                    addEmployee();
                    break;

                case "Update Employee Roles":
                    updateEmployeeRole();
                    break;

                case "Delete Departments":
                    deleteDepartment();
                    break;
                case "Delete Employee":
                    deleteEmployee();
                    break;
                case "Delete Roles":
                    deleteRole();
                    break;
                case "Update employee manager":
                    updateManager()
                    break;
                case "View Employee By Manager":
                    viewEmployeeByManager()
                    break;
                case "Exit":
                    connection.end();
                    console.log('Have a good day');
                    break;
            }
        }) 
    }

    function viewAllDepartments() {
        connection.query(
            'SELECT * FROM Department', (err, res) => {
                if (err) {
                    throw err;

                    // if(res.length > 0) {
                    //     console.log('\n')
                    //     console.log(' ** Departments **')
                    //     console.log('\n')
                    //     console.table(res);
                    // }
                    // //restart
                    // menu();
                }
                console.table(res)
                runList();
            }
        )
    }
        })
}
