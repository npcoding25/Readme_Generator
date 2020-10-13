// function to generate markdown for README
function generateMarkdown(questions) {
  return `# ${questions.title}

## Table of contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

## Description

  ${questions.description}

## Installation

  ${questions.installation}

## Usage

  ${questions.usage}

## License

  ${questions.license}

## Contributors

  ${questions.contributors}

## Tests

  ${questions.tests}

## Questions

  If you would like to see more of my repos you can check out my github profile below:
  
  [${questions.username}]("https://github.com/${questions.username})
  
  Or if you would like to ask me a question send an email to:
  
  ${questions.email}


`;
}

module.exports = generateMarkdown;
