
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const genHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const team = [];


const engrQestions = [
  {
      type: 'input',
      name: 'engineerName',
      message: 'What is engineers Name',
    },
    {
      type: 'input',
      name: 'engineerID',
      message: 'What is your engineers ID',
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: 'What is your engineers email?',
    },
    {
      type: 'input',
      name: 'engineerGithub',
      message: 'What is engineers Github',
    },
   
 
];

const internQuestions = [
  {
      type: 'input',
      name: 'internName',
      message: 'What is Interns Name',
    },
    {
      type: 'input',
      name: 'internID',
      message: "What is your Intern's ID?",
    },
    {
      type: 'input',
      name: 'internEmail',
      message: "What is your Intern's email?",
    },
    {
      type: 'input',
      name: 'internSchool',
      message: "What is intern's School",
    },
   
];

//
function createTeam() {
  console.log("createTeam");
  console.log("team = ", team);
    let out_dir = path.resolve(__dirname, "dist");
    let outputPath = path.join(out_dir, "team.html");
    if (!fs.existsSync(out_dir)){
      fs.mkdirSync(out_dir);
    }
    fs.writeFileSync(outputPath, genHTML(team,'utf-8'));
}

function addEngineer () {
  inquirer.prompt ( engrQuestions).then (resp => {
    let engineer = new Engineer(resp.engineerName,resp.engineerID, resp.engineerEmail, resp.engieerGihub);
    team.push(engineer);
    addMembersToTeamRoster();
  });
}

function addIntern () {
  inquirer.prompt ( internQuestions).then (resp => {
    let intern = new Intern(resp.internName,resp.internID, resp.internEmail, resp.internSchool);
    team.push(intern);
    addMembersToTeamRoster();
  });
}
function addMembersToTeamRoster()
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
// Start here with asking about manager questions
    inquirer.prompt(
    [  {
        type: 'input',
        name: 'name',
        message: "What is the team's manger Name?",
      },
      {
        type: 'input',
        name: 'id',
        message: "What is team's  manger's ID"
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email?",
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's Office Number",
      },
     
   
]      
    ).then ((userAnswers) => {
        console.log( "userResponse = ", userAnswers);
        let manager=
        new Manager (
          userAnswers.name,
          userAnswers.id,
          userAnswers.email,
          userAnswers.officeNumber
          );
        team.push (manager);
        addMembersToTeamRoster();

    });



