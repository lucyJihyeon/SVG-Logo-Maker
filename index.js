//import inquirer
const inquirer = require("inquirer");
//import wrtieFile
const { writeFile } = require("fs").promises;
//inport path
const { join } = require('path');
const Triangle = require('./lib/triangle.js');

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
    const path = join(__dirname, '..','SVG-Logo-Maker', 'examples', 'logo.svg');
    let generateShape ='';
    promptUser()
    //take the resolved promise and stored it in answers to pass to a certain function
    .then(({text, textColor, shape, shapeColor}) => {
        const shapeSVG = shape.toLowerCase();
        if (shapeSVG === 'circle') {
            generateShape = new Circle(answers);
        }else if (shapeSVG === 'square')    {
            generateShape = new Square(answers);
        }else if (shapeSVG === 'triangle'){
            generateShape = new Triangle(text, textColor, shapeColor); 
        } else {
            throw new Error("Invalid shape selected.")
        }
        return generateShape.renderSVG();
    })
    .then((content) =>  writeFile(path, content))
    //if succefully generate a file, log a success message
    .then(()    =>  console.log("Generated logo.svg"))
    //if detect an error, log the error.
    .catch((error) => console.error(error));
};

init();
