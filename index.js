//import inquirer
const inquirer = require("inquirer");
//import wrtieFile
const { writeFile } = require("fs").promises;
//inport path
const { join } = require('path');

//Functino to prompt the user to enter what type of logo they want by using inquirer
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "Enter text for the logo. (Must not be more than 3 characters)",
      name: "text",
    },
    {
      type: "input",
      message: "Enter a text color",
      name: "textColor",
    },
    {
      type: 'list',
      message: "Select a shape for the logo",
      choices: ["circle", "square", "triangle"],
      name: 'shape'
    },
    {
        type: 'input',
        message: "Enter a shape color",
        name: 'shapeColor'
    },
  ]);
};

//Initial functino to call promptUser function 
const init = ()   =>  {
    let path = join(__dirname, '..', 'examples', 'logo.svg');
    promptUser()
    //take the resolved promise and stored it in answers to pass to a certain function
    .then((answers) => {
        const shape = `${answers.shape}`
        if (shape == 'circle') {
            const circle = new Circle(answers);
        }else if (shape == 'square')    {
            const square = new Square(answers);
        }else {
            const triangle = new Triangle(asnwers);
        };
    })
    //if succefully generate a file, log a success message
    .then(()    =>  console.log("Generated logo.svg"))
    //if detect an error, log the error.
    .catch((error) => console.error(error));
};

init();
