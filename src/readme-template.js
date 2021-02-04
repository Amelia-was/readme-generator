const appendLicense = (license) => {
    // MIT https://img.shields.io/badge/license-MIT-yellow?style=for-the-badge
    // GNU General Public License v3 https://img.shields.io/badge/license-GNU%20GPLv3-yellow?style=for-the-badge
    // Mozilla Public License 2.0 https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-yellow?style=for-the-badge
    // Apache license 2.0 https://img.shields.io/badge/license-Apache%202.0-yellow?style=for-the-badge

    // replace spaces in URL
    let licenseURL = license.replace(/ /g, '%20');

    // get badge URL
    let badge = 'https://img.shields.io/badge/license-' + licenseURL + '-yellow?style=for-the-badge';
    return badge;
}

const getLicenseDescription = (license) => {
    let description = 'it\'s a license description, Charlie Brown';

    return description;
}

const templateReadMe = (templateData) => {
        const { projectInfo, ...about } = templateData;
        console.log(about);
        console.log("========");
        console.log(projectInfo);

        const { name, github, email } = about;
        const { title, description, installation, usage, contributions, tests, license } = projectInfo;

    return `
# ${title}

![${license}](${appendLicense(license)})

## Description
${description}

# Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributions](#contributions)
4. [Tests](#tests)
5. [Questions](#questions)
6. [License](#license)

## Installation
${installation}

## Usage
${usage}

## Contributions
${contributions}

## Tests
${tests}

## Questions
For additional questions, contact ${name}:
GitHub: [${github}](https://github.com/${github})
Email: ${email}

### License
${getLicenseDescription(license)}
`;
}

module.exports = templateReadMe;