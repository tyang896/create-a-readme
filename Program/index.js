// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const createMarkdown = require('./utils/generateMarkdown.js');
// an array of questions for user input
const questions = ["What is your GitHub username?", "What is your email address?", "What is your project's name?", "Please write a short description of your project.", "What kind of license should your project have?", "What command should be run to install dependencies?", "What command should be run to run tests?", "What does the user need to know about using the repo?", "What does the user need to know about contributing to the repo?"];
const [username, email, title, description, license, installation, tests, usage, contributing] = questions;

// a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, createMarkdown(data), err => err ? console.error(err):console.log("Successfully wrote to README.md"));
}

//a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "username",
            message: username
        },
        {
            type: "input",
            name: "email",
            message: email
        },
        {
            type: "input",
            name: "title",
            message: title
        },
        {
            type: "input",
            name: "description",
            message: description

        },
        {
            type: "list",
            name: "license",
            message: license,
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        },
        {
            type: "input",
            name: "installation",
            message: installation,
            default: "npm i"

        },
        {
            type: "input",
            name: "tests",
            message: tests,
            default: "npm test"
        },
        {
            type: "input",
            name: "usage",
            message: usage
        },
        {
            type: "input",
            name: "contributing",
            message: contributing
        }
    ]).then((answers) => {
        writeToFile("README.md", answers);
    })
}

// Function call to initialize app
init();
