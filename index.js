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
            message: 'Enter your GitHub Username. (Required)',
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
            message: 'Enter your email. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log('Please enter your email.');
                    return false;
                }
            }
        }
    ])
}

const promptProjectInfo = (readMeData) => {
    if (!readMeData.projectInfo) {
        readMeData.projectInfo = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter your project title. (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }
                else {
                    console.log('Please enter your project title.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a desciption of your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                }
                else {
                    console.log('Please enter your project description.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter installation information for your project.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage information for your project.'
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Please enter contribution information for your project.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter testing information for your project.'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please choose a license for your project. (Required)',
            choices: ['one', 'two', 'three'],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                }
                else {
                    console.log('Please choose a project license.');
                    return false;
                }
            }
        }
    ])
    .then(projectInfo => {
        readMeData.projectInfo.push(projectInfo);
        return readMeData;
    })
}

promptUser()
    .then(promptProjectInfo)
    .then(readMeData => {
        console.log(readMeData);
        generateReadMe(readMeData);
    });


