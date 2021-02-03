const fs = require('fs');

let title = process.argv[2];
let name = process.argv[3];
let email = process.argv[4];
let github = process.argv[5];

const generateReadMe = (title, name, email, github) => {
    return `# ${title}

## Questions
For additional questions, contact ${name}:
GitHub: [${github}](https://github.com/${github})
Email: ${email}
`;
}

fs.writeFile('readmeGEN.md', generateReadMe(title, name, email, github), err => {
    if (err) throw err;
    console.log("ReadMe complete!")
})