const licenseLinks = require('./licenses');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Find the license object based on the license name
  const targetLicense = licenseLinks.find((item) => item.name === license);

  // If the license object is found, return the badge, otherwise return an empty string
  return targetLicense ? targetLicense.badge : '';
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Map the license name to the corresponding license link
  const licenseLinksMap = licenseLinks.reduce((links, license) => {
    links[license.name] = license.link;
    return links;
  }, {});

  return license in licenseLinksMap ? licenseLinksMap[license] : '';
}

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

  const readmeData = {
    title: data.title,
    license: licenseSection,
  };

  return readmeData;
}

// Function to get the license names
function getLicenseNames() {
  return licenseLinks.map((license) => license.name);
}

module.exports = {
  generateMarkdown,
  getLicenseNames,
};
