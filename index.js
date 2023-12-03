// Import packages needed for this application:

// Import Inquirer
const inquirer = require('inquirer');
// Import File System(fs)
const fs = require('fs');
// Import generateSVG.js
const generateSVG = require('./lib/generateSVG');

// Questions:
const questions = [

// Enter text for the logo (Must not be more than 3 characters long).
  {
    type: 'input',
    name: 'text',
    message: 'Enter text for the logo (Must not be more than 3 characters long).'
  },

// Enter a text color
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a text color.'
  },

// Select a shape for the logo
  {
    type: 'list',
    name: 'shape',
    message: 'Select a shape for your logo.',
    choices: ['triangle', 'circle', 'square']
  },

// Enter a shape color
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a shape color.'
  },
];


// Function to initialize app
function init() {

  inquirer

// Pass questions in here
  .prompt(questions)
  .then((data) => {
    // Use user feedback data to generate SVG file

    const svgContent = generateSVG(data);

    console.log(svgContent);

    // writes svg logo using generateShapes module and alerts any errors.  If no errors, console log success message.
    // fs.writeFile('logo.svg', svgContent, (err) =>
    // err ? console.log(err) : console.log('Successfully generated logo.svg file!')
    // );

  })

}


// Function call to initialize app
init();

