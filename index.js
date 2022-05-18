const inquirer = require("inquirer");
const express = require('express');
const mysql = require('mysql2');
const cTable = require('console.table');
var Table = require('easy-table')


// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL Username
      user: 'root',
      // MySQL Password
      password: 'F3qld601fno?',
      database: 'dept_db'
    },
    console.log(`Connected to the dept_db database.`)
);

function askQuestion() {
    inquirer.prompt([
        {
            // PROMPTS USER FOR CHOICE AMONG MENU
            name: 'question',
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'View All Roles', 'View All Departments', 'Add Employee', 'Add Role', 'Add Department']
        }
    ]).then(answers => {
        // SWITCH CASE TO ALLOW USER TO PERFORM DIFFERENT TASKS
        switch(answers.question) {
            
            case 'View All Employees':
                // CALLS FUNCTION WHEN SELECTED
                viewEmployees();
                break;

            case 'View All Departments':
                viewDepts();
                break;

            case 'View All Roles':
                ViewRoles();
                break;
            
            case 'Add Department':
                addDept();
                break;

            case 'Add Role':
                addRole();
                break;

            case 'Add Employee':
                addEmployee();
                break;

        }
    })
};

function viewEmployees() {
    db.query('SELECT * FROM employee', function (err, result) {
        console.table(['id', 'first name', 'last name', 'role id', 'manager id'], result);
        // RETURNS TO MAIN MENU
        askQuestion();
    });
};

function viewDepts() {
    db.query('SELECT * FROM department', function (err, result) {
        console.table(['id', 'dept_name'], result);
        // RETURNS TO MAIN MENU
        askQuestion();
    });
};

function ViewRoles(){
    db.query('SELECT * FROM role', function (err, result) {
        console.table(['id', 'title', 'salary', 'department id'], result);
    });
    // RETURNS TO MAIN MENU
    askQuestion();
};

function addDept() {
    inquirer.prompt([
        {
            name: 'enterDept',
            type: 'input',
            message: 'please enter a department name',
        }
    ]).then(answers => {
        const deptName = answers.enterDept;
        db.connect(function(err){
            if (err) throw err;
            console.log('Connected');
            var sql = `INSERT INTO department (name) VALUES ('${deptName}')`;
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
            db.query('SELECT * FROM department', function (err, result) {
                console.table(['id, name'], result);
                // RETURNS TO MAIN MENU
                askQuestion();
            });
        });
    });
};

function addEmployee() {
    inquirer.prompt([
        {
            name: 'enterFirst',
            type: 'input',
            message: 'please enter a first name',
            
        },
        {
            name: 'enterLast',
            type: 'input',
            message: 'please enter a last name',
        },
        {
            name: 'enterRoleId',
            type: 'input',
            message: 'please enter a role',
        },
        {
            name: 'enterManagerId',
            type: 'input',
            message: 'please enter a manager ID.  If the employee is not a manager, please enter NULL',
        },
    ]).then(answers => {
        const employeeFirst = answers.enterFirst;
        const employeeLast = answers.enterLast;
        const employeeRole = answers.enterRoleId;
        const employeeManager = answers.enterManagerId;
        db.connect(function(err){
            if (err) throw err;
            console.log('Connected');
            var sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${employeeFirst}', '${employeeLast}', '${employeeRole}', '${employeeManager}')`;
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
            db.query('SELECT * FROM employee', function (err, result) {
                console.table(['id, first_name, last_name, role_id, manager_id'], result);
            });
        });
        // RETURNS TO MAIN MENU
        askQuestion();
    });
};

function addRole() {
    inquirer.prompt([
        {
            name: 'enterTitle',
            type: 'input',
            message: 'please enter a Title',
            
        },
        {
            name: 'enterSalary',
            type: 'input',
            message: 'please enter a salary',
        },
        {
            name: 'enterDept',
            type: 'input',
            message: 'please enter a department',
        },
    ]).then(answers => {
        const employeeTitle = answers.enterTitle;
        const employeeSalary = answers.enterSalary;
        const employeeDept = answers.enterDept;
        db.connect(function(err){
            if (err) throw err;
            console.log('Connected');
            var sql = `INSERT INTO role (title, salary, department_id) VALUES ('${employeeTitle}', '${employeeSalary}', '${employeeDept}')`;
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
            db.query('SELECT * FROM role', function (err, result) {
                console.table(['title, salary, department_id'], result);
            });
        });
        // RETURNS TO MAIN MENU
        askQuestion();
    });
};



askQuestion();