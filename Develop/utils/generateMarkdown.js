// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "none"){//might need to change this to null?
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "none"){
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "none"){
    return "";
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  //Write code here to call the license functions to get the values for the license
  //Write code for creating the README look
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
