const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/template.js")

teamArray = [];

function start () {
    function createTeam () {
        inquirer.prompt([
            {
                type: "list",
                message: "What type of employee would you like to add?",
                name: "addEmployee",
                choices: ["Manager", "Engineer", "Intern", "No more employees are needed."]
            }
        ])
        .then(function (userInput) {
            switch(userInput.addEmployee) {
                case "Manager":
                addManager();
                break;
                case "Engineer":
                addEngineer();
                break;
                case "Intern":
                addIntern();
                break;
                default:
                htmlBuilder();
            }
        })
    }

