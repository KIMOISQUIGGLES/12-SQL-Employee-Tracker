const inquirer = require("inquirer");
const mysql = require('mysql2');
const cTable = require('console.table');

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
                console
                break;

            case 'View All Departments':
                break;

            case 'View All Roles':
                break;
            
            case 'Add Department':
                break;

            case 'Add Role':
                break;

            case 'Add Employee':
                break;

            case 'Update Employee Role':
                break;
        }
    })
}

askQuestion()