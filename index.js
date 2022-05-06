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
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'Vew All Departments', 'Add Department']
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

            case 'Update Employee Role':
                updateRole();
                break;
        }
    })
}

function viewEmployees() {
    db.query('SELECT * FROM employee', function (err, result) {
        console.table(['id', 'first name', 'last name', 'role id', 'manager id'], result);
    });
    // RETURNS TO MAIN MENU
    askQuestion();
}

function viewDepts() {
    db.query('SELECT * FROM department', function (err, result) {
        console.table(['id, name'], result);
    });
    // RETURNS TO MAIN MENU
    askQuestion();
}

function ViewRoles(){
    db.query('SELECT * FROM role', function (err, result) {
        console.table(['id', 'title', 'salary', 'department id'], result);
    });
    // RETURNS TO MAIN MENU
    askQuestion();
}

function addDept() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'please enter a department name',
            name: 'enterDept',
        },
    ]).then(answers => {
        const deptName = answers.enterDept;
        db.connect(function(err){
            if (err) throw err;
            console.log('Connected');
            var sql = "INSERT INTO department (name) VALUES ('deptName')";
            db.query('SELECT * FROM department', function (err, result) {
                console.table(['id, name'], result);
            });
        })
    })
    // RETURNS TO MAIN MENU
    askQuestion();
}

function addEmployee() {

    // RETURNS TO MAIN MENU
    askQuestion();
}

function addRole() {

    // RETURNS TO MAIN MENU
    askQuestion();
}


askQuestion();