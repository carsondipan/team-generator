const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const prompt = inquirer.createPromptModule();
const teamMembers = [];

const chooseEmployeeType = ({ type }) => {
    let response;
    switch(type) {
        case 'Engineer': {
            response = prompt(engineerQuestions);
        }
        case 'Intern': {
            response = prompt(internQuestions);
        }
        case 'Manager': {
            response = prompt(managerQuestions);
        }
    }
};
const managerQuestions = [
    {
        message: 'Who is your team Manager?',
        name: 'name',
    },
    {
        message: 'What is the ID of the Manager?',
        name: 'id',
    },
    {
        message: 'What is the email of your Manager?',
        name: 'email',
    },
    {
        message: 'What office is your team manager??',
        name: 'officeNumber',
    },
];
const engineerQuestions = [
    {
        message: 'Who is your Engineer?',
        name: 'name',
    },
    {
        message: 'What is the ID of the Engineer?',
        name: 'id',
    },
    {
        message: 'What is the email of your Engineer?',
        name: 'email',
    },
    {
        message: 'What is the GitHub of your engineer?',
        name: 'gitHub',
    },
];
const internQuestions = [
    {
        message: 'What is your interns name',
        name: 'name',
    },
    {
        message: 'What is the ID of your intern?',
        name: 'id',
    },
    {
        message: 'What is the email of your intern?',
        name: 'email',
    },
    {
        message: 'What school is your intern from?',
        name: 'school',
    },
];

prompt(managerQuestions)
    .then(({ name, id, email, officeNumber }) => {
        const manager = new Manager(name, id, email, officeNumber);
        teamMembers.push(manager);
    })
    .then(() => {
        prompt({
            message: "Would you like to add more employees?",
            type: 'confirm',
            name: 'addMore',
        })
    })
    .then(({ addMore }) => {
        if (addMore) {
            console.log('CONTINUE');
        } else {
            console.log('WRITE FILE');
        }
    })
    .then(() => {
        return prompt({
            type: 'rawlist',
            message: 'What kind of employee would you like to add?',
            choices: [
                'Intern',
                'Engineer',
                'Manager',
            ],
            name: 'type'
        })
    })
    .then((Employee) => {
        teamMembers(employee);
        const employee = new 
    });