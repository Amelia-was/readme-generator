const generateReadMe = (title, name, email, github) => {
    return `# ${title}

## Questions
For additional questions, contact ${name}:
GitHub: [${github}](https://github.com/${github})
Email: ${email}
`;
}