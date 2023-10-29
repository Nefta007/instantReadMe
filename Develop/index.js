// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require('./utils/generateMarkdown');

// function to initialize app
// list of inputs:title, description, installations, usage, license, 
// contributors, tests, github username, email address for any questions 
function init() {
    inquirer
        //prompt that will take in user input in order to create the readme file
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
                name: 'installations',
                message: 'Please give instilation instructions',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'What is the usage for this project',
            },
            {
                type: 'list',
                name: 'license',
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
                name: 'contributors',
                message: 'Who has contributed in this project?',
            },
            {
                type: 'input',
                name: 'test',
                message: 'Are there any test instructions?',
            },
            {
                type: 'input',
                name: 'gitUserName',
                message: 'Please enter your GitHub username',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter your email',
            }])
        .then((answers) => {
            const fileName = './examples/README.md'; //sets up variable that will be used to set up location and name of file
            const data = generateMarkDown(answers); //will send answersinto generateMarkDown
            // function to write README file
            fs.writeFile(fileName, data, (err) => {
                err ? console.log(err) : console.log('Generated README.md');
            });
        });
}

// Function call to initialize app
init();
