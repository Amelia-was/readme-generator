const templateReadMe = (templateData) => {
        const { projectInfo, ...about } = templateData;
        console.log(about);
        console.log("========");
        console.log(projectInfo);
    return `
# ${projectInfo[0].title}

## Description
${projectInfo[0].description}

## Installation
${projectInfo[0].installation}

## Usage
${projectInfo[0].usage}

## Contributions
${projectInfo[0].contributions}

## Tests
${projectInfo[0].tests}

## Questions
For additional questions, contact ${about.name}:
GitHub: [${about.github}](https://github.com/${about.github})
Email: ${about.email}
`;
}

module.exports = templateReadMe;