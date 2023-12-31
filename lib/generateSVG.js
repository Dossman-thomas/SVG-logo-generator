// Import shapes modules
const {Triangle, Circle, Square} = require('./lib/shapes');

function generateSVG(data) {
  const { text, textColor, shape, shapeColor } = data;

  let shapeEl;

  // Create the appropriate shape element based on user selection
  switch (shape.toLowerCase()) {
    case 'triangle':
      shapeEl = new Triangle();
      break;
    case 'circle':
      shapeEl = new Circle();
      break;
    case 'square':
      shapeEl = new Square();
      break;
    default:
      throw new Error('Invalid shape selected.');
  }

  // Set colors and text for the shape
  shapeEl.setColor(shapeColor);
  shapeEl.setText(text, textColor);

  // Render the shape as SVG content
  const svgContent = shapeElement.render();

  return svgContent;
}


// export module
module.exports = generateSVG;
