const licenseLinks = require('./licenses.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Find the license object based on the license name
  const targetLicense = licenseLinks.find((item) => item.name === license)
  // If the license object is found, return the badge, otherwise return an empty string
  return targetLicense ? targetLicense.badge : 'W';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Map the license name to the corresponding license link
  const targetLicense = licenseLinks.find((item) => license.name === license);
  //if the object is found, return the link otherwise return an empty string
  return targetLicense ? targetLicense.link : 'P';
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    const licenseBadge = renderLicenseBadge(license);
    const licenseLink = renderLicenseLink(license);

    return `
## License
This application is covered under the [${license}](${licenseLink}) license. ${licenseBadge}
`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);
  const licenseBadge = renderLicenseBadge(data.license);
  const readmeData = {
    title: data.title,
    license: licenseSection,
    badge: licenseBadge,
  };

  return readmeData;
}

// Function to get the license names
function getLicenseNames() {
  return licenseLinks.map((license) => license.name); //uses the map array function to get the name from the license list
}

module.exports = {
  generateMarkdown,
  getLicenseNames,
};
