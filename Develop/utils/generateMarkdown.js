// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// will set up badge based on chosen license
function renderLicenseBadge(license) {
  let badge;
  if(license === 'None'){
    badge = '';
  }
  else if(license === 'Apache License 2.0'){
    badge = "Apache%202.0";
  }
  else if(license === 'GNU GPLv3'){
    badge = "GPLv3"
  }
  else if(license === 'MIT License'){
    badge = "MIT"
  }
  else if(license === 'ISC License'){
    badge = "ISC"
  }
  //badge format was taken from https://shields.io/search?q=license and https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
  return `![Static badge](https://img.shields.io/badge/License-${badge}-blue)`; //sets up license badge
}



// license link is set up based on what is chosen, and will return an empty string if nothing is chosen
//links were taken from https://choosealicense.com/ 
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

// will set up license section of readme based on what is chosen
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

//generate markdown for README
function generateMarkdown(data) {
  // whatever follows ` after return will be set up as the readme file
  //table of contents is set up so if one of thewords is clicked it will take reader to that section of readme
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
