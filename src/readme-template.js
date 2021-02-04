const templateReadMe = (templateData) => {
        const { projectInfo, ...about } = templateData;
        console.log(about);
        console.log("========");
        console.log(projectInfo);
    return `
# ${projectInfo.title}

## Description
${projectInfo.description}

# Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributions](#contributions)
4. [Tests](#tests)
5. [Questions](#questions)

## Installation
${projectInfo.installation}

## Usage
${projectInfo.usage}

## Contributions
${projectInfo.contributions}

## Tests
${projectInfo.tests}

## Questions
For additional questions, contact ${about.name}:
GitHub: [${about.github}](https://github.com/${about.github})
Email: ${about.email}
`;
}

module.exports = templateReadMe;