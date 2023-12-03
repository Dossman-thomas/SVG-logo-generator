// Function to generate SVG file content
function generateSVG(data) {
  
// example output for circle: 

// <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//  <circle cx="150" cy="100" r="80" fill="red" />
//  <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">
//    bob
//  </text>
// </svg>

  return `<svg version="1.1" width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

// function for shape including shape color:
  <${data.shape} cx="150" cy="100" r="80" fill="${data.shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">
    ${data.text}
  </text>
</svg>
`;
}

// export module
module.exports = generateSVG;