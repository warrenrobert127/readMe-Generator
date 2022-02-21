// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function badge(license) {
  return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link

function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README

function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![Github licence](https://img.shields.io/badge/license-${
    data.license
  }-blue.svg)
  ## Description 
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.installation}
  ## Usage 
  ${data.usage}
  ## License
  The application is covered under the ${data.license} license.
  ${badge(data.license)}
  ## Contributers
  ${data.collaborators}
  ## Tests
  ${data.test}
  ## Questions
  If you have any questions about this projects, please contact me directly at ${
    data.email
  }. You can view more of my projects at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
