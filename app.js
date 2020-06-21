const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const all = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function addManager (){
    console.log("Start your team");
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "managerId",
            message:"What is the manager's id?"
        },
        {
            type:"input",
            name: "managerEmail",
            message: "What is the manager's email address?"
        },
        {
            type: "input",
            name: "managerDept",
            message: "For which department are they manager for? "
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's Office Number?"
        }
    ]).then(response => {
        const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerEmail, response.managerDept, response.managerOfficeNumber);
        all.push(manager);
        addMembers();
      
    });
}

function addMembers(){
    inquirer.prompt([
        {
            type: "list",
            name: "teamType",
            message: "Which type of member would you like to add?",
            choices: [
                "Another Manager",
                "Engineer", 
                "Intern",
                 "No more members" //ADD EXTRA MANAGER
            ]
        }
    ]).then(memberType => {
        if(memberType.teamType === "Another Manager"){
            addManager();
        }
        else if(memberType.teamType === "Engineer"){
            createEngineer();
        }
        else if(memberType.teamType == "Intern"){
            createIntern();
        }
        else {
            buildTeam();
        }

    })
}

function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "engineerId",
            message:"What is this engineer's id?"
        },
        {
            type:"input",
            name: "engineerEmail",
            message: "What is this engineer's email address?"
        },
        {
            type: "input",
            name: "engineerDept",
            message: "For which department do they work for?"
        },
        {
            type: "input",
            name: "engineerGit",
            message: "What is their GitHub username? "
        }
    ]).then(response => {
        const engineer = new Engineer (response.engineerName, response.engineerId, response.engineerEmail, response.engineerDept, response.engineerGit);
        all.push(engineer);
        addMembers();
    })
}

function createIntern (){
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message:"What is this intern's id?"
        },
        {
            type:"input",
            name: "internEmail",
            message: "What is this intern's email address?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "Which school does this intern attend?"
        }
    ]).then(response => {
        const intern = new Intern (response.internName, response.internId, response.internEmail, response.internDept);
        all.push(intern);
        addMembers();
    });
}

function buildTeam() {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(all), "utf-8");
  }

  addManager();




// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
