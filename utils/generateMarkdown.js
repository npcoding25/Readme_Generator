// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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

  ## Questions?

  Github username: ${data.username}
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
