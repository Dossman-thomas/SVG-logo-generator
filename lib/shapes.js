// Parent constructor for shapes
function Shapes(text, color){
  this.text = text;
  this.color = color;

}

// Triangle
function Triangle(text, color){
  Shapes.call(this, text, color); // inherited properties
  this.render = function(){
    return ``;
  }
};

// Circle
function Circle(text, color){
  Shapes.call(this, text, color); // inherited properties
  this.render = function(){
    return ``;
  }
};

// Square
function Square(text, color){
  Shapes.call(this, text, color); // inherited properties
  this.render = function(){
    return ``;
  }
};
