
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const genHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const team = [];
// 
const mgrQuestions = [
    {
        type: 'input',
        name: 'MangerName',
        message: 'What is Mangers Name',
      },
      {
        type: 'input',
        name: 'MangerID',
        message: 'What is your Mangers ID',
      },
      {
        type: 'input',
        name: 'MangerEmail',
        message: 'What is your mangers email?',
      },
      {
        type: 'input',
        name: 'MangerOfficeNumber',
        message: 'What is Mangers Office Number',
      },
     
   
];

const engruestions = [
  {
      type: 'input',
      name: 'EngineerName',
      message: 'What is Engineers Name',
    },
    {
      type: 'input',
      name: 'EngineerID',
      message: 'What is your Engineers ID',
    },
    {
      type: 'input',
      name: 'EngineerEmail',
      message: 'What is your Engineers email?',
    },
    {
      type: 'input',
      name: 'EngineerGithub',
      message: 'What is Engineers Github',
    },
   
 
];

const internQuestions = [
  {
      type: 'input',
      name: 'InternName',
      message: 'What is Interns Name',
    },
    {
      type: 'input',
      name: 'InternID',
      message: 'What is your Interns ID',
    },
    {
      type: 'input',
      name: 'InternEmail',
      message: 'What is your Interns email?',
    },
    {
      type: 'input',
      name: 'InternSchool',
      message: 'What is Interns School',
    },
   
];

//
function createTeam() {
    let out_dir = path.resolve(__dirname, "dist");
    let outputPath = path.join(out_dir, "team.html");
    if (!fs.existsSync(out_dir)){
      fs.mkdirSync(out_dir);
    }
    fs.writeFileSync(outputPath, genHTML(team,'utf-8'));
}

function addEngineer () {
  inquirer.prompt ( engruestions).then (resp => {
    let engineer = new Engineer(resp.EngineerName,resp.EngineerID, resp.EngineerEmail, resp.EngieerGihub);
    team.push(engineer);
    addTeamMembers();
  });
}

function addIntern () {
  inquirer.prompt ( internQuestions).then (resp => {
    let intern = new Intern(resp.InternName,resp.InternID, resp.InternEmail, resp.InternSchool);
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
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
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
        let manager=
        new Manager (
          userAnswers.MangerName,
          userAnswers.MangerID,
          userAnswers.MangerEmail,
          userAnswers.MangerOfficeNumber
          );
        team.push (manager);
        addTeamMembers();

    })
}

// Function call to initialize app
init();
