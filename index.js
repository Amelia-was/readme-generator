const fs = require('fs');
const inquirer = require('inquirer');
const generateReadMe = require('./src/generate-readme.js');
const templateReadMe = require('./src/readme-template.js');

// let title = process.argv[2];
// let name = process.argv[3];
// let email = process.argv[4];
// let github = process.argv[5];

// fs.writeFile('readmeGEN.md', generateReadMe(name, title, email, github), err => {
//     if (err) throw err;
//     console.log("ReadMe complete!")
// });

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter your name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                }
                else {
                    console.log('Please enter your GitHub Username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log('Please enter your email.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'Enter your project title (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }
                else {
                    console.log('Please enter your project title.');
                    return false;
                }
            }
        }
    ])
}
    
promptUser()
    .then(aboutData => {
        console.log(aboutData);
        generateReadMe(aboutData);
    });


