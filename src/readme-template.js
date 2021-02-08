// get url of license badge
const appendLicense = (license) => {
    // replace spaces in URL
    let licenseURL = license.replace(/ /g, '%20');

    // get badge URL
    let badge = 'https://img.shields.io/badge/license-' + licenseURL + '-yellow?style=for-the-badge';
    return badge;
}

// get description of license
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

// readme template
const templateReadMe = (templateData) => {
        // destructure data from index.js
        const { projectInfo, ...about } = templateData;
        const { name, github, email } = about;
        const { title, description, installation, usage, contributions, tests, license } = projectInfo;

    return `# ${title}

[![${license}](${appendLicense(license)})](https://shields.io/)

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

## License
${getLicenseDescription(license)}
`;
}

module.exports = templateReadMe;