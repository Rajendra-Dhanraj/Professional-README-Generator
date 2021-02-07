// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return "";
  } else if (license == "APACHE 2.0") {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license == "GPL 3.0") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license == "MIT") {
    return `![license: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license == "BSD 3") {
    return `![license](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
  }
}

//Create a Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "None") {
    return "";
  } else if (license == "APACHE 2.0") {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license == "GPL 3.0") {
    return `https://www.gnu.org/licenses/gpl-3.0`;
  } else if (license == "MIT") {
    return `https://opensource.org/licenses/MIT`;
  } else if (license == "BSD 3") {
    return `https://opensource.org/licenses/BSD-3-Clause`;
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `${renderLicenseLink(license)}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` 
  
  ${renderLicenseBadge(data.license)}

# **${data.title}**

  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Tests](#tests)
  7. [Questions](#questions)

### Descrption

${data.description}

### Installation

${data.installation}

### Usage

${data.usage}

### License

This application is covered under the [${data.license}](${renderLicenseSection(
    data.license
  )}) license.
  
### Contributing

${data.contributing}

### Tests

${data.test}

### Questions

Github Username: **${data.github}**

[Click to follow and view my Github profile!](https://github.com/${
    data.github
  }) 

Alternatively, I can be contacted via email: **${data.email}**
  `;
}

module.exports = generateMarkdown;
