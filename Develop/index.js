const inquirer = require('inquirer');
const fs = require('fs');

const pageTemplate = require('./src/page-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const prompt = inquirer.createPromptModule();
const teamMembers = [];

const managerQuestions = [
  {
    message: 'What is the manager\'s name?',
    name: 'name',
    default: 'Tammy',
  },
  {
    message: 'What is the manager\'s id?',
    name: 'id',
    default: '123',
  },
  {
    message: 'What is the manager\'s email?',
    name: 'email',
    default: 'tammy@email.com',
  },
  {
    message: 'What is the manager\'s office number?',
    name: 'officeNumber',
    default: '123',
  },
];

const engineerQuestions = [
  {
    message: 'What is the engineer\'s name?',
    name: 'name',
    default: 'Gary',
  },
  {
    message: 'What is the engineer\'s id?',
    name: 'id',
    default: '12',
  },
  {
    message: 'What is the engineer\'s email?',
    name: 'email',
    default: 'gary@email.com',
  },
  {
    message: 'What is the engineer\'s GitHub name?',
    name: 'gitHub',
    default: 'gMoney',
  },
];

const internQuestions = [
  {
    message: 'What is the intern\'s name?',
    name: 'name',
    default: 'Shawn',
  },
  {
    message: 'What is the intern\'s id?',
    name: 'id',
    default: '321',
  },
  {
    message: 'What is the intern\'s email?',
    name: 'email',
    default: 'shawn@email.com',
  },
  {
    message: 'What is the intern\'s school?',
    name: 'school',
    default: 'UNCC',
  },
];

const chooseManager = ({ name, id, email, officeNumber }) => {
  const manager = new Manager(name, id, email, officeNumber);
  teamMembers.push(manager);
};

const chooseEmployeeType = () => {
  return prompt({
    type: 'rawlist',
    message: 'What kind of employee would you like to add?',
    choices: [
      'Engineer',
      'Intern',
      'Manager',
    ],
    name: 'type'
  })
};

const getEmployeeData = async ({ type }) =>  {
  switch(type) {
    case 'Engineer': {
      const response = await prompt(engineerQuestions);
      const { name, id, email, gitHub } = response;
      const engineer = new Engineer(name, id, email, gitHub);
      teamMembers.push(engineer);
      break;
    }
    case 'Intern': {
      const response = await prompt(internQuestions);
      const { name, id, email, school } = response;
      const intern = new Intern(name, id, email, school);
      teamMembers.push(intern);
      break;
    }
    case 'Manager': {
      const response = await prompt(managerQuestions);
      const { name, id, email, officeNumber } = response;
      const manager = new Manager(name, id, email, officeNumber);
      teamMembers.push(manager);
      break;
    }
  }
};

const confirmMoreEmployees = () => {
  return prompt({
    message: 'Would you like to add more employees?',
    type: 'confirm',
    name: 'addMore',
  })
};

const addMoreEmployees = ({ addMore }) => {
  if (addMore) {
    chooseEmployeeType()
      .then(getEmployeeData)
      .then(confirmMoreEmployees)
      .then(addMoreEmployees);
  } else {
    const template = pageTemplate(teamMembers);
    fs.writeFileSync('./dist/team.html', template);
    console.log('Successful write to ./dist/team.html');
    process.exit(0);
  }
};

prompt(managerQuestions)
  .then(chooseManager)
  .then(confirmMoreEmployees)
  .then(addMoreEmployees);
