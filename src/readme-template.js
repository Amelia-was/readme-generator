const templateReadMe = (about) => {
    return `# ${about.title}

## Questions
For additional questions, contact ${about.name}:
GitHub: [${about.github}](https://github.com/${about.github})
Email: ${about.email}
`;
}

module.exports = templateReadMe;