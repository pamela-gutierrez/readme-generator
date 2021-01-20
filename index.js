// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// TODO: Create an array of questions for user input


const writeFileAsyn = util.promisify(fs.writeFile);

// TODO: Create a function to write README file
const promptUser = () =>
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
            name: 'technologies',
            messgage: "What technologies did you use?",
        },
        {
            type: 'input',
            name: 'projectName',
            messgage: "What is your project's name?",
        },
        {
            type: 'input',
            name: 'description',
            messgage: 'Please write a short description of your project',
        },
        {
            type: 'checkbox',
            choices: ['MIT', 'Apache', 'Mozilla Public License'],
            name: 'license',
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
            name: 'usage',
            messgage: 'What are your usage instructions for the app?',
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
    ${data.license}
    `;


promptUser()
    .then((data) => writeFileAsyn('generateReadme.md', generateReadme(data)))
    .then(() => console.log("Success!"))
    .catch((err) => console.error(err));




        // // TODO: Create a function to initialize app
        // function init() { }



        // // Function call to initialize app
        // init();
