
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

const engruestions = [
  {
      type: 'input',
      name: 'Engineer-Name',
      message: 'What is Engineers Name',
    },
    {
      type: 'input',
      name: 'Engineer-ID',
      message: 'What is your Engineers ID',
    },
    {
      type: 'input',
      name: 'Engineer-Email',
      message: 'What is your Engineers email?',
    },
    {
      type: 'input',
      name: 'Engineer-Github',
      message: 'What is Engineers Github',
    },
   
 
];

const internQuestions = [
  {
      type: 'input',
      name: 'Intern-Name',
      message: 'What is Interns Name',
    },
    {
      type: 'input',
      name: 'Intern-ID',
      message: 'What is your Interns ID',
    },
    {
      type: 'input',
      name: 'Intern-Email',
      message: 'What is your Interns email?',
    },
    {
      type: 'input',
      name: 'Intern-School',
      message: 'What is Interns School',
    },
   
];

//
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function addEngineer () {
  inquirer.prompt ( engruestions).then (resp => {
    let engineer = new Engineer(resp.Engineer-Name,resp.Engineer-ID, resp.Engineer-Email, resp.Engieer-Gihub);
    team.push(engineer);
    addTeamMembers();
  });
}

function addIntern () {
  inquirer.prompt ( internQuestions).then (resp => {
    let intern = new Intern(resp.Intern-Name,resp.Intern-ID, resp.Intern-Email, resp.Intern-School);
    team.push(intern);
    addTeamMembers();
  });
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
        createTeam();
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
