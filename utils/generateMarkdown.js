// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

## Description

  ${data.description}

## Installation

  ${data.installation}

## Usage

  ${data.usage}

## License

  ${data.license}

## Contributors

  ${data.contributors}

## Tests

  ${data.tests}

## Questions

  If you would like to see more of my repos you can check out my github profile below:
  
  [${data.username}]("https://github.com/${data.username}")
  
  Or if you would like to ask me a question send an email to:
  
  ${data.email}


  ##### This readme was created by the readme generator


`;
}

module.exports = generateMarkdown;
