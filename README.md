# SVG Logo Maker

## Description
The SVG Logo Maker is a command-line program that allows users to generate simple SVG logos by combining text and basic shapes. The program utilizes Node.js and Inquirer for user interaction and prompts. It supports three types of shapes: circle, square, and triangle, and allows users to specify text content, text color, shape color, and shape type for their logos.


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies-Used](#technologies-used)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Preview](#preview)
- [Link](#link)
- [Contact](#contact)

## Installation 
To install necessary dependencies, run following command:
```
node install
```

## Usage
1. Run the application by executing the following command in your terminal
```
node start
```
2. Enter your text for your logo.
3. Enter color for your text (you can use hexadecimal number or color keyword)
4. Choose a shape for your logo.
5. Enter color for your shape (you can use hexadecimal number or color key word)
6. your logo will be automatically generated under 'logo.svg' file in a browser



## Features

## Interactive Command-Line interface
### User Story
As a user, 
I WANT to interact through the command-line interface
So That I can easily and efficiently provide input and navigate through the application prompts.


### Accepted Criteria
- When I run the application
- Then I am prompted to input information about my logo
- When I am prompted to input information about my logo
- Then the application supports the use of common keyboard shortcuts for editing and navigating


## Dynamic Generation of Logo
### User Story
As a User,
I WANT to view a professional logo generated in my directory based on the inputs I provided 
So That I can generate my logo dynamically with different shape and color.

### Accepted Criteria
- When I completed all the prompts,
- Then I can view the logo dynamically generated based on my inputs 


## Multiple Shapes
### User Story
As a User,
I WANT to be able to choose from multiple shapes for my logo 
So That I can customize the logo based on my preferences


### Accepted Criteria
- When I select a shape for the logo
- Then I can choose from multiple shapes, including circle, square, and triangle

## Validation of Text Length and Color Name
### User Story
As a User,
I WANT the application to validate text length and color name inputs to ensure the logo's integrity.
So That I can easily navigate where I enter my input incorrectly that cause any errors when running the application

### Accepted Criteria
- When I enter text for the logo,
- Then the application checks if the text length is within the specified limit (3).
- When I enter a text color,
- Then the application validates if the color name is valid based on common color names.
- When I enter a shape color,
- Then the application validates if the color name is valid based on common color names.



## Technologies-Used
- JavaScript
- Node.js
- inquirer
- color-name-list

## Contribution 
1. Fork the Repo 
2. Create a new branch 
3. Make your contributions/changes 
4. push to the forked repo 
5. create a new pull request



## Test 

To run tests, run the following command:
```
npm test
```

## Preview 

This is the preview of the application 
![alt preview](./img/screen)

## Contact

If you have any questions or suggestions regarding this project, feel free to reach out:

- **Email:** ks02ks222@gmail.com
- **GitHub:** lucyJihyeon(https://github.com/lucyJihyeon)

