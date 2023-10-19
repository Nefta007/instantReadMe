// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// list of inputs:title, description, installations, usage, license, 
// contributors, tests, github username, email address for any questions 
//const questions = [
//
//];



// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title to your project?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please provide a description of project',
            },
            {
                type: 'input',
                title: 'installations',
                message: 'Please give instilation instructions',
            },
            {
                type: 'input',
                title: 'usage',
                message: 'What is the usage for this project',
            },
            {
                type: 'list',
                title: 'license',
                message: 'Please choose the license you are using',
                choices: [
                    "Apache License 2.0",
                    "GNU GPLv3",
                    "MIT License",
                    "ISC License",
                    "None"
                ],
            },
            {
                type: 'input',
                title: 'contributors',
                message: 'Who has contributed in this project?',
            },
            {
                type: 'input',
                title: 'test',
                message: 'Are there any test instructions?',
            },
            {
                type: 'input',
                title: 'gitUserName',
                message: 'Please enter your GitHub username',
            },
            {
                type: 'input',
                title: 'email',
                message: 'Please enter your email',
            }
        ]).then((answers)=>{
            const fileName = '';

        })

    // TODO: Create a function to write README file
    function writeToFile(fileName, data) { }
}

// Function call to initialize app
init();
