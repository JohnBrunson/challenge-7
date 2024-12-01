import inquirer from 'inquirer';
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';
  
  switch (license){
    case 'MIT':
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;
    case 'GPL 3.0':
      licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      break;
    case 'Creative Commons 4.0 Attribution':
    licenseBadge = `[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)`
    break;
    case 'Apache 2.0':
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    break;
  }
  return licenseBadge;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  
  switch (license){
    case 'MIT':
      licenseLink = `[License: MIT](https://opensource.org/licenses/MIT)`
      break;
    case 'GPL 3.0':
      licenseLink = `[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)`
      break;
    case 'Creative Commons 4.0 Attribution':
    licenseLink = `[License: CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)]`
    break;
    case 'Apache 2.0':
    licenseLink = '[License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)'
    break;
  }
  return licenseLink;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, licenseLink, licenseBadge) {
  let licenseSection = ''
  switch (license){
    case 'MIT':
      licenseSection = `${licenseLink} ${licenseBadge}`
      break;
    case 'GPL 3.0':
      licenseSection = `${licenseLink} ${licenseBadge}`
      break;
    case 'Creative Commons 4.0 Attribution':
    licenseSection = `${licenseLink} ${licenseBadge}`
    break;
    case 'Apache 2.0':
    licenseSection = `${licenseLink} ${licenseBadge}`
    break;
  }
return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
let licenseBadge = renderLicenseBadge(data.license);
let licenseLink = renderLicenseLink(data.license);
let licenseSection = renderLicenseSection(data.license, licenseLink, licenseBadge);
  let readmeContent = `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## License
${licenseSection}

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.usage}

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
`;
return readmeContent;
}

export default generateMarkdown;
