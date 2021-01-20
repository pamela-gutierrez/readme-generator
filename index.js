const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsyn = util.promisify(fs.writeFile);

const userQuestions = () =>
    inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            tyoe: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: 'input',
            name: 'technologies',
            message: "What technologies did you use?",
        },
        {
            type: 'input',
            name: 'projectName',
            message: "What is your project's name?",
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project',
        },
        {
            type: 'checkbox',
            choices: ['MIT', 'Apache', 'Mozilla Public License'],
            name: 'license',
            message: 'What kind of license should your project have?',
        },
        {
            type: 'input',
            name: 'commands',
            message: 'What command should be run to install dependencies?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are your usage instructions for the app?',
        }
    ]);

const generateReadme = (data) =>
    `# ${data.projectName}
# Description 
${data.description}
    
# Table of Contents

[Description](#Description)  

[Table of Contents](#Table-of-Contents)  

[Usage](#usage)  

[Technologies Used](#technologies-used)  

[Deployed Link](#deployed-link)  

[Authors](#authors)  

[License](#license)  


# Usage
${data.usage}
    
# Technologies Used
${data.technologies}
    
# Authors
${data.name}
[GitHub]${data.username}
${data.email}
    
# License
- ![License](https://img.shields.io/badge/license-${data.license}-blue.svg)
`

userQuestions()
    .then((data) => writeFileAsyn('generateReadme.md', generateReadme(data)))
    .then(() => console.log("Success!"))
    .catch((err) => console.error(err));

