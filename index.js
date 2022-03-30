const inquirer = require('inquirer');
const mysql = require('mysql2');

// connects employee_db database //
const db = mysql.createConnection(
    {
      user: 'root',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db.`)
  );

const addDept = function () {
    inquirer.prompt([
        {
            name: 'deptName',
            message: 'What is the department name?',
        },
    ])
    .then(answers => {
        db.query('INSERT INTO department (name) VALUES ()', function (err, answers) {
            console.log(`${answers} added to Departments.`);
            initialQuestion();
        });
    })
}  

// function for running initial question //
const initialQuestion = function () {

    inquirer.prompt([
        {
            type: 'list',
            name: 'todo',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee',
            ],
        }
    ])
    .then(answers => {
        console.log(answers);

        if (answers.todo === 'Add a department') {
            addDept();
        } else if (answers.todo === 'View all departments') {
            db.query('SELECT * FROM department', function (err, department) {
                console.table(department);
                initialQuestion();
            });
        } else if (answers.todo === 'View all roles') {
            db.query('SELECT * FROM role', function (err, role) {
                console.table(role);
                initialQuestion();
            });
        } else if (answers.todo === 'View all employees') {
            db.query('SELECT * FROM employee', function (err, employee) {
                console.table(employee);
                initialQuestion();
            });
        }
    });
};

initialQuestion();


