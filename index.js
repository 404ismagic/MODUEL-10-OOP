
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

function addTeamMembers()
{
  inquirer.prompt ([ {
    type: "list",
    name: "choice",
    message:"who do you want to add to the team?",
    choices: [ 
      "Engineer",
      "Intern",
      "Done Adding, Create Team Page"
    ]
  }
  ]). then ( userchoice  => {
    switch ( userchoice.choice) {
      case Engineer:
        addEngineer();
        break;
      case Intern:
        addIntern();
        break;
      default:
        fs.createReadStream();
        break;
    }
  })
}
// 
function init() {
    inquirer.prompt(mgrQuestions).then ((userAnswers) => {
        console.log( "userResponse = ", userAnswers);
        let manager=new Manger (userAnswers.Manger-Name,userAnswers.Manger-ID,userAnswers.Manger-Email,userAnswers.Manger-Office-Number);
        team.push (manager);
        addTeamMembers();

    })
}

// Function call to initialize app
init();
