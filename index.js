// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
      {
        type:"input",
        name: 'githubProfile',
        message: 'What is your username for your github?'
      },
      {
        type: "input",
        name: "emailAddress",
        message: 'What is your email address?'
      },
      {
        type: "editor",
        name: "description",
        message: "Please enter the description for your project. Use the prompts as a guide. Feel free to erase them if they don't apply. Don't forget to save.",
        default: `- What was your motivation? \n - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")\n - What problem does it solve?\n - What did you learn?`
      },
      {
        type: "editor",
        name: "installation",
        message: "What is the installation procedure? Don't forget to save."
      },
      {
        type: "editor",
        name: "usage",
        message: "How is the program used? Don't forget to save."
      },
      {
        type: "editor",
        name: "credits",
        message: "Please list your collaborators, third party assets and their creators, as well as any tutorials you've followed. Included by default is the Markdown License Badges for the next step. Don't forget to save.",
        default: "Markdown license Badges by Lukas -- https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba"
      },
      {
        type: "list",
        name: "license",
        message: "Choose a license for this readme (Code included for badges and listed in credits):",
        choices: ['Apache 2.0 [![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)]',
                  'Creative Commons 4.0 Attribution [![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)]',
                  'GPL [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
                  'MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
                  
          ],
          default: 'MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      },
      {
        type: "editor",
        name: "badges",
        message: "If you haven't already added badges, please do so here. Don't forget to save."
      },
      {
        type: "editor",
        name: "features",
        message: "If your project has a lot of features, list them here. Don't forget to save."
      },
      {
        type: "editor",
        name: "contributorGuidelines",
        message: "If you want contributors to this project, please list those guidelines here. By default, a markdown link for the contributor covenant has been provided for you. Don't forget to save.",
        default: "[Contributor Covenant](https://www.contributor-covenant.org/)"
      },
      {
        type: "editor", 
        name: "tests",
        message: "If there are any tests you want to note as part of the readme, please provide them here. Don't forget to save."
      },
      {
        type: "input",
        name: "file",
        message: "What would you like to name the file (including extension)?"
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
//This should probably be its own function, but I'll need to troubleshoot to determine why this didn't work initially. Will work for MVP.
let readmeContent = `
# ${data.title}

##Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.usage}

## License
${data.license}

## Badges
${data.badges}

## Features
${data.features}

## How to Contribute
${data.contributorGuidelines}

## Tests
${data.tests}

## Questions
Link to Github profile: https://www.github.com/${data.githubProfile}\n
Email address: ${data.emailAddress}
`
//write file
fs.writeFile(fileName, readmeContent, (err) => err ? console.log(err) : console.log(`File name ${fileName} has been written successfully!`))};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile(answers.file, answers)
      });
}

// Function call to initialize app
init();
