// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// // TODO: Create an array of questions for user input
// const questions = [];
inquirer 
.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project'
    },
])
.then ((answers) => {
    const readMeContent = generateREADME(answers);
    fs.writeFile('README.md', readMeContent, (err) => {
        if (err) throw err;
        console.log('README.md created successfully!');
    });
})
.catch ((err) => {
    console.error(err);
});
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
//create the function and pass the answers received into it
function generateREADME(answers) { 
    const {
        title,
        description,
        installation,
        usage,
        license,
        contributing,
        tests,
        gitHubUsername,
        email,
    } = answers
    const readMeContent = `
    # ${title}
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    ## Description
    ${description}
    ## Installation
    ${installation}
    ## Usage
    ${usage}
    ## License
    ## Questions`;

    return readMeContent
}
// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
