const fs = require('fs')
const inquirer = require('inquirer')
const generate = require('./utils/generateMarkdown.js')
// array of questions for user
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
        message: "What steps are needed to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use your project?"
    },
    {
        type: "input",
        name: "license",
        message: "What license is your project under?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Who contributed to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "Write a test for other users here:"
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

// function to write README file
async function writeToFile() {
    const projectInfo = await inquirer.prompt(questions,(err) => {
        if (err) {
            console.log(err)
        }
    })
    
    fs.writeFile("ReadMe.md", generate(projectInfo), (err) => {
        if (err) {
            console.log(err)
        }
    })
    
}

// async function writeToFile() {
//     const projectInfo = await inquirer.prompt(questions)
//     console.log(projectInfo)
//     fs.writeFileAsync("README.md", generate(projectInfo), function(err) {
//         if (err)
//         throw err
//     } )
// }

writeToFile()
// function to initialize program
function init() {

}

// function call to initialize program
init();