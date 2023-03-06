
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const genHTML = require('../src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const team = [];
// 
const mgrQuestions = [
    {
        type: 'input',
        name: 'Manger-Name',
        message: 'What is Mangers Name',
      },
      {
        type: 'input',
        name: 'Manger-ID',
        message: 'What is your Mangers ID',
      },
      {
        type: 'input',
        name: 'Manger-Email',
        message: 'What is your mangers email?',
      },
      {
        type: 'input',
        name: 'Manger-Office-Number',
        message: 'What is Mangers Office Number',
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
