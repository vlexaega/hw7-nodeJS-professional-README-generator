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
   {
       type: 'input',
       name: 'description',
       message: 'Enter the description of your project'
   },
   {
       type: 'input',
       name: 'installation',
       message: 'Provide the installation intructions of your project'
   },
   {
       type: 'input',
       name: 'usage',
       message: 'Provide the usage information of your project'
   },
   {
       type: 'input',
       name: 'testInstructions',
       message: 'Provide the test instructions of your project'
   },
   {
    type: 'input',
    name: 'contributionGuidelines',
    message: 'How can I contribute to your project?',
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
}),
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
//create the function and pass the answers received into it
function generateREADME(answers) {
   const {
       title,
       description,
       installation,
       usage,
       testInstructions,
       contributionGuidelines,
       //license,
       // gitHubUsername,
       // email,
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
   ## Test Instructions
   ${testInstructions}
   ## Contribution Guidelines
   ${contributionGuidelines}
   ## License
   ## Questions`;


   return readMeContent
}

