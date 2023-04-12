const generateTeam = (team) => {
    console.log(team);
   
    const teamHtml = [];
    const generateManager = m => {
        console.log(m);
        let managerHtml = ` 
        <div class="card" style="width: 18rem;">
            <div class="card-header">
           <h3> ${m.getName()} </h3>
           <h4 class="fas fas-mug-hot"> ${m.getRole()} </h4> <br/>
           <br/>
           <i class="fas fa-mug-hot"></i>Manager</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${m.getId()}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${m.getEmail()}">${m.getEmail()}</a></span></li>
            <li class="list-group-item">Office Number: ${m.getOfficeNumber()}</li>
            </ul>
        </div>
        `;
        teamHtml.push(managerHtml);
    }
    const generateEngineer = e => {
        console.log(e);
        let engineerHtml = ` 
        <div class="card" style="width: 18rem;">
            <div class="card-header">
           <h3 >${e.getName()} <h3>
           <h4 class="fas fa-user-glasses"> ${e.getRole()} </h4> <br/>
           <br/>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${e.getId()}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${e.getEmail()}">${e.getEmail()}</a></span></li>
            <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${e.githubUsername}">${e.githubUsername}</a></li>
            </ul>
        </div>
        `;
        teamHtml.push(engineerHtml);
    }
    const generateIntern = i => {
        console.log(i);
        let internHtml = ` 
        <div class="card" style="width: 18rem;">

        <div class="card-header">
           <h3 >${i.getName()} </h3>
           <h4 class="fas fa-user-graduate"> ${i.getRole()} </h4> <br/>
           </div>
    
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${i.getId()}</li>
            <li class="list-group-item">Email: <span ><a href="mailto:${i.getEmail()}">${i.getEmail()}</a></span></li>
            <li class="list-group-item">School: ${i.getSchool()}</li>
            </ul>
        </div>
        `;
        teamHtml.push(internHtml);
    }

    // create a loop for all of the employees
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }
    }

    // join the HTML blocks
    return teamHtml.join('');
}
// export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../dist/style.css" />
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
    <h1> My Team </h1>
    </header>

    <main> ${generateTeam(team)} </main>
     
</body>
</html>
    `;
}
