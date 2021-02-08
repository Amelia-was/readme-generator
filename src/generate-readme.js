const fs = require('fs');
const templateReadMe = require('./readme-template.js');

const generateReadMe = content => {
    let dir = './dist';

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    fs.writeFile('./dist/README.md', templateReadMe(content), err => {
    if (err) throw err;
    console.log("ReadMe complete!")
    })
};

module.exports = generateReadMe;