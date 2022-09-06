// This function returns a license badge based on which license is passed in. If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "None"){
    return "";
  }
  if(license === "MIT"){
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  }
  if(license === "APACHE 2.0"){
    return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  }
  if(license === "GPL 3.0"){
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  }
  if(license === "BSD 3"){
    return "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
  }
}

// This function returns the license link. If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "None"){
    return "";
  }
  if(license === "MIT"){
    return "(https://opensource.org/licenses/MIT)";
  }
  if(license === "APACHE 2.0"){
    return "(https://opensource.org/licenses/Apache-2.0)";
  }
  if(license === "GPL 3.0"){
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  }
  if(license === "BSD 3"){
    return "(https://opensource.org/licenses/BSD-3-Clause)";
  }
}

//This function returns the license shortcut link for the table of contents section
function licenseShortcut(license){
  if(license == "None"){
    return "";
  }else{
    return `\n* [License](#license)`;
  }
}

//A function that returns the license section of README.  If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "None"){
    return "";
  }
  if(license === "MIT"){
    return `## License
This project is licensed under the [MIT License]`;
  }
  if(license === "APACHE 2.0"){
    return `## License
This project is licensed under the [APACHE 2.0 License]`;
  }
  if(license === "GPL 3.0"){
    return `## License
This project is licensed under the [GPL 3.0 License]`;
  }
  if(license === "BSD 3"){
    return `## License
This project is licensed under the [BSD 3 License]`;
  }
}

//function generates markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)${licenseShortcut(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install program dependencies for this application, run the following command:

    ${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}${renderLicenseLink(data.license)}

## Contributing
${data.contributing}

## Tests

To run tests for this application, run the following command:

    ${data.tests}

## Questions

If you have any question, you can contact me at ${data.email}. You can
find more of my work on my [GitHub](https://github.com/${data.username}) account.
`;
}

module.exports = generateMarkdown;
