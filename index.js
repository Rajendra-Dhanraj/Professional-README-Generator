// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username? (Required)",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address? (Required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email address!");
      }
    },
  },
  {
    type: "input",
    name: "title",
    message: "What is your project's name?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter your projects name!");
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a short description of your project!");
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log(
          "Please enter what the user needs to know, using the repo!"
        );
      }
    },
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
    validate: (contributingInput) => {
      if (contributingInput) {
        return true;
      } else {
        console.log(
          "Please enter what the user needs to know about contributing to the repo!"
        );
      }
    },
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((userAnwers) => {
    const pageREADME = generateMarkdown(userAnwers);
    fs.writeFile("./README.md", pageREADME, (err) => {
      if (err) throw new Error(err);
      console.log("Your README.md file has been created!");
    });
  });
}
// Function call to initialize app

init();
