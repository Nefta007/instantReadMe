// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'None'){
    return badge;
  }
  else{
    badge = "![badge](https://img.shields.io/badge/License-" + license + "-blue.svg)"
  }
  return badge;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let linkToLicense;
  if(license === 'Apache License 2.0'){
    linkToLicense = "https://choosealicense.com/licenses/apache-2.0/";
  }
  else if(license === 'GNU GPLv3'){
    linkToLicense = "https://choosealicense.com/licenses/gpl-3.0/"
  }
  else if(license === 'MIT License'){
    linkToLicense = "https://choosealicense.com/licenses/mit/"
  }
  else if(license === 'ISC License'){
    linkToLicense = "https://choosealicense.com/licenses/isc/"
  }
  else{
    linkToLicense = "";
  }
  return linkToLicense;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licensePlaceHolder;
  if(license === 'None'){
    licensePlaceHolder = "";
  }
  else{
    licensePlaceHolder ="## License\n" + "For more information on license please visit " + renderLicenseLink(license) + "\n";
  }
  return licensePlaceHolder;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installations}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.test}

  ## Questions
  In case you have questions you can reach me at:
  My github: https://github.com/${data.gitUserName} or
  via email at: ${data.email}
  `;
}

module.exports = generateMarkdown;
