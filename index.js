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
                menu();
            }
        )
    }

    function viewAllRoles() {
        connection.query(
            'select ro.title as Role_title, ro.salary as Salary , dept.name as DepartmentName from Role ro left join department as dept on dept.id = ro.department_id', (err, res) => {
                if (err) {
                    throw err;
                }
                console.table(res)
                menu();
            }
        )
    }

    function viewAllEmployees() {
        const sql = 'Select emp.id as EmployeeID, concat(emp.first_name,"  ",emp.last_name ) as EmployeeName , ro.title as Job_tittle, ro.salary as Salary,dept.name as Department_Name,concat(emp2.first_name,"  ",emp2.last_name) as ManagerName from employee_tracker.employee as emp left join employee_tracker.employee as emp2 on emp2.id=emp.manager_id left join employee_tracker.Role as ro on emp.role_id=ro.id left join employee_tracker.department as dept on dept.id = ro.department_id';
        connection.query(
            sql, 
            (err, res) => {
                if (err) {
                    throw err;
                }
                console.table(res)
                menu();
            }
    
        )
    }

    function addDepartment() {
        inquirer.prompt([
    
            {
                type: 'input',
                name: 'department',
                message: 'Please add a department name:'
            }
    
        ]).then(answer => {
            console.log(answer);
            connection.query('INSERT INTO department SET?', { name: answer.department }, (err, res) => {
                if (err) throw err;
                console.log('Added new department')
                menu();
            });
        });
    }

    function addRoles() {
        console.log('aa');
    
        // check all depts
        connection.promise().query("SELECT * FROM Department")
            .then((res) => {
                // create an array based on user input 
                return res[0].map(dept => {
                    return {
                        name: dept.name,
                        value: dept.id
                    }
                })
            })
            .then((departments) => {
        })
}
