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
    let url = '';
    
    switch (license) {
        case 'Apache 2.0':
            url = '(https://www.apache.org/licenses/LICENSE-2.0)';
            break;
        case 'GNU GPL v3':
            url = '(https://www.gnu.org/licenses/gpl-3.0.en.html)';
            break;
        case 'Mozilla Public License 2.0':
            url = '(https://www.mozilla.org/en-US/MPL/)';
            break;
        case 'MIT':
            url = '(https://opensource.org/licenses/MIT)';
            break;
    }

    let description = `Under the ${license} license, this material is free to modify and distribute for commercial or private use. See [here]${url} for more details.`;

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
# ${title} ![${license}](${appendLicense(license)})

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