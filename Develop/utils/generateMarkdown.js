// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // ![Static Badge](https://img.shields.io/badge/License-")
  let badge = '';
  if (badge === 'none'){
    return badge;
  }
  else{
    return badge = "![Static Badge](https://img.shields.io/badge/License-" + license + "-blue)";
  }

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
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}`;
}

module.exports = generateMarkdown;
