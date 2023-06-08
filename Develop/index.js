// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); // This creates files
const licenses = require('./utils/licenses.json');
const { generateMarkdown, getLicenseNames } = require('./utils/generateMarkdown');

// Function to generate README content
function generateREADME(answers) {
  const {
    title,
    description,
    installation,
    usage,
    testInstructions,
    contributionGuidelines,
    license,
    questions,
  } = answers;

  // Create the markdown data using the generateMarkdown function
  const markdownData = generateMarkdown(answers);

  // Create the README content
  const readMeContent = `
   # ${markdownData.title} ${markdownData.badge}
   ## Table of Contents
   - [Description](#description)
   - [Installation](#installation)
   - [Usage](#usage)
   - [Test Instructions](#testInstructions)
   - [Contribution Guidelines](#contributionGuidelines)
   - [Questions](#questions)
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
   ${markdownData.license}
   ## Questions

   You can reach me via email at alx.vga2@gmail.com
   `;
  return readMeContent;
}

// Prompt the user for input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter the description of your project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide the installation instructions of your project',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide the usage information of your project',
    },
    {
      type: 'input',
      name: 'testInstructions',
      message: 'Provide the test instructions of your project',
    },
    {
      type: 'input',
      name: 'contributionGuidelines',
      message: 'How can I contribute to your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: getLicenseNames(),
    },
    {
        type: 'input',
        name: 'questions',
        message: 'How can I reach you?',
      },
  ])
  .then((answers) => {
    const readMeContent = generateREADME(answers);
    fs.writeFile('README.md', readMeContent, (err) => {
      if (err) throw err;
      console.log('README.md created successfully!');
    });
  })
  .catch((err) => {
    console.error(err);
  });
