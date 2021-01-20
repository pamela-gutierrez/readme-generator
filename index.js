// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsyn = util.promisify(fs.writeFile);

// TODO: Create a function to write README file
const writeToFile = (fileName, data) =>
    inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },
        {
            type: 'input',
            name: 'name',
            messgage: 'What is your name?',
        },
        {
            tyoe: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: 'input',
            name: 'name',
            messgage: "What is your project's name?",
        },
        {
            type: 'input',
            name: 'description',
            messgage: 'Please write a short description of your project',
        },
        {
            type: 'input',
            name: 'checkbox',
            messgage: 'What kind of license should your project have?',
        },
        {
            type: 'input',
            name: 'commands',
            messgage: 'What command should be run to install dependencies?',
        },
        {
            type: 'input',
            name: 'license',
            messgage: 'What kind of license should your project have?',
        },
        {
            type: 'input',
            name: 'tests',
            messgage: 'What commands should be run to run tests?',
        },
        {
            type: 'input',
            name: 'user requirements',
            messgage: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'contributer requirements',
            messgage: 'What does the user need to know about contributing to the repo?',
        },
    ]);

.then((data) => {
        const newMarkdown = 'generateReadme.md';
        writeFileAsync(newMarkdown, `
    #${data.name}
    ##${data.description}
    ## Table of Contents
|                                     |                                         |                                         |
| :---------------------------------- | :-------------------------------------- | :-------------------------------------- |
| [Project Description](#Unwind)      | [Table of Contents](#table-of-contents) | [Goals and Methods](#goals-and-methods) |
| [Deployed Link](#deployed-link)     | [Authors](#authors) ${data.name}        |[License](#license) 
---
    
    `)
    }




// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
