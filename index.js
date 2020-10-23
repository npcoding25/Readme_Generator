const fs = require('fs')
const inquirer = require('inquirer')
const generate = require('./utils/generateMarkdown.js')

// Array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description for your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What do you need to install for your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use your project?"
    },
    {
        type: "checkbox",
        name: "license",
        message: "What license is your project under?",
        choices: [
            'MIT',
            'Apache',
            'Apache 2',
            'lgpl_2_1',
            'GPL',
            'GPL(>=2)'
        ]
    },
    {
        type: "input",
        name: "contributors",
        message: "Who contributed to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "What command is needed to run a test?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    }
];

// Async function to write README file
async function writeToFile() {

    // Creating variable of answered questions and waiting for response
    const projectInfo = await inquirer.prompt(questions, (err) => console.log(err))
    
    // Accessing answer to license question
    let badgeLicense = projectInfo.license

    // Function to make a badge out of users choice
    function createBadge() {
        if( badgeLicense == 'MIT') {
            projectInfo.license = `![MIT License](https://img.shields.io/badge/license-MIT-green)`
        }
    
        else if( badgeLicense == 'Apache') {
            projectInfo.license = `![Apache License](https://img.shields.io/badge/license-Apache-blue)`
        }
    
        else if( badgeLicense == 'Apache 2') {
            projectInfo.license = `![Apache 2 License](https://img.shields.io/badge/license-Apache 2-blue)`
        }
    
        else if( badgeLicense == 'lgpl_2_1') {
            projectInfo.license = `![lgpl_2_1 License](https://img.shields.io/badge/license-lgpl_2_1-blue)`
        }
    
        else if( badgeLicense == 'GPL') {
            projectInfo.license = `![GPL License](https://img.shields.io/badge/license-GPL-blue)`
        }
    
        else if( badgeLicense == 'GPL(>=2)') {
            projectInfo.license = `![GPL(>=2) License](https://img.shields.io/badge/license-GPL(>=2)-blue)`
        }
    }
    createBadge()
    
    // Write file README using answered questions and template from generateMarkdown.js
    fs.writeFile("ReadMe.md", generate(projectInfo), (err) => console.log(err))
    console.log("Success! Your README.md file was created!")
}

writeToFile()