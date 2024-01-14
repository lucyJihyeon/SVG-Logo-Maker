//import inquirer
const inquirer = require("inquirer");
//import wrtieFile
const { writeFile } = require("fs").promises;
//inport path
const { join } = require('path');
const Triangle = require('./lib/triangle.js');
const Circle = require('./lib/circle.js');

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
    //pathway of the file where the logo.svg will be generated.
    const path = join(__dirname, '..','SVG-Logo-Maker', 'examples', 'logo.svg');
    let generateShape ='';
    //call the promptUser function 
    promptUser()
    //take the resolved promise and stored it in answers to pass to a certain function
    .then(({text, textColor, shape, shapeColor}) => {
        //take the user's answer in 'shape' and create a corresponding instance based on the shapes.
        const shapeSVG = shape
        if (shapeSVG === 'circle') {
            generateShape = new Circle(text, textColor, shapeColor);
        }else if (shapeSVG === 'square')    {
            generateShape = new Square(text, textColor, shapeColor);
        }else if (shapeSVG === 'triangle'){
            generateShape = new Triangle(text, textColor, shapeColor); 
        } else {
            throw new Error("Invalid shape selected.")
        }
        //return renderSVG function 
        return generateShape.renderSVG();
    })
    //take generateShape.renderSVG() and create a new svg file 
    .then((content) =>  writeFile(path, content))
    //if succefully generate a file, log a success message
    .then(()    =>  console.log("Generated logo.svg"))
    //if detect an error, log the error.
    .catch((error) => console.error(error));
};

init();
