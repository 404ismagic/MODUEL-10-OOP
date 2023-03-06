
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const genHTML = require('../src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

// 
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is your  project description?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project',
        choices: ['APACHE_2.0', 'GPL 3.0' , 'BSD-3', 'MIT', 'None']
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Username',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What is the installation instruction for your project?',
      },  
      {
        type: 'input',
        name: 'contributing',
        message: 'How to contribute to this project?',
      },  
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usage instruction for your project?',
      }, 
      {
        type: 'input',
        name: 'test',
        message: 'What is the test instruction for your project?',
      },   
];

//
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// 
function init() {
    inquirer.prompt(questions).then ((userAnswers) => {
        console.log( "userResponse = ", userAnswers);
        writeToFile ( 'GeneratedReadMe.md', genMD({ ...userAnswers}));
    })
}

// Function call to initialize app
init();
