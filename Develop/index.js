const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const pageTemplate = require('./src/page-template')

const prompt = inquirer.createPromptModule();
const teamMembers = [];

const managerQuestions = [
    {
        message: 'Who is your team Manager?',
        name: 'name',
        default: 'John',
    },
    {
        message: 'What is the ID of the Manager?',
        name: 'id',
        default: '123',
    },
    {
        message: 'What is the email of your Manager?',
        name: 'email',
        default: 'john@email.com',
    },
    {
        message: 'What office is your team manager??',
        name: 'officeNumber',
        default: '1234',
    },
];

const engineerQuestions = [
    {
        message: 'Who is your Engineer?',
        name: 'name',
        default: 'Rob',
    },
    {
        message: 'What is the ID of the Engineer?',
        name: 'id',
        default: '07',
    },
    {
        message: 'What is the email of your Engineer?',
        name: 'email',
        default: 'rob07@email.com',
    },
    {
        message: 'What is the GitHub of your engineer?',
        name: 'gitHub',
        default: 'rob07',
    },
];

const internQuestions = [
    {
        message: 'What is your interns name',
        name: 'name',
        default: 'Scum',
    },
    {
        message: 'What is the ID of your intern?',
        name: 'id',
        default: '420',
    },
    {
        message: 'What is the email of your intern?',
        name: 'email',
        default: 'scum20@email.com',
    },
    {
        message: 'What school is your intern from?',
        name: 'school',
        default: 'ECU',
    },
];

const chooseEmployeeType = async ({ type }) => {
    let response;
    switch (type) {
        case 'Engineer': {
            const response = await prompt(engineerQuestions);
            const { name, id, email, gitHub } = response;
            new engineer = new Engineer(name, id, email, gitHub);
            teamMembers.push(engineer);
            break;
        }
        case 'Intern': {
            const response = await prompt(internQuestions);
            const { name, id, email, school } = response;
            new intern = new Intern(name, id, email, school);
            teamMembers.push(intern);
            break;

        }
        case 'Manager': {
            const response = await prompt(managerQuestions);
            const { name, id, email, officeNumber } = response;
            new manager = new Manager(name, id, email, officeNumber);
            teamMembers.push(manager);
            break;

        }
    }
};

const confirmMoreEmployees = () => {
    return prompt({
        message: 'Do you want to add more employees?',
        type: 'confirm',
        name: 'addMore',
    })
};
const addMoreEmployees = ({ addMore }) => {
    if (addMore) {
        console.log('CONTINUE');
    } else {
        const template = pageTemplate(teamMembers);
        fs.writeFileSync('./dist/team.html', )
    }
};

prompt(managerQuestions)
    .then(({ name, id, email, officeNumber }) => {
        const manager = new Manager(name, id, email, officeNumber);
        teamMembers.push(manager);
    })
    .then(confirmMoreEmployees)
    .then(addMoreEmployees)
    .then(({ addMore }) => {
        if (addMore) {
            console.log('CONTINUE');
        } else {
            console.log('Write File');
        }
    })
    .then(() => {
        return prompt({
            type: 'rawlist',
            message: 'What type of employee do you want to add?',
            choices: [
                'Intern',
                'Engineer',
                'Manager',
            ],
            name: 'type',
        })
    })
    .then(chooseEmployeeType)
    .then(confirmMoreEmployees)
    .then(addMoreEmployees)