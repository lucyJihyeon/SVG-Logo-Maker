//Import shape.js
const Shape = require('./shapes.js');

//Circle class inherits from Shape class
class Circle extends Shape  {
    //takes text, textColor, and shapeColor as arguments
    constructor(text, textColor, shapeColor ) {
        //inherits text and textColor arguments from Shape class
        super(text, textColor);
        this.shapeColor = shapeColor;
    }
    //render method to return a string for the corresponding SVG file 
    renderShape()    {
        //check if the shapeColor is valid color
        super.setColor(this.shapeColor);
        return `<circle cx = "150" cy="100" r="80" fill = "${this.shapeColor}" />`
    }
    //renderSVG method to return a string for the whole SVG file content
    renderSVG() {
        return `${super.renderSVGTag()}
    ${this.renderShape()}
    ${super.renderTextTag()}`
    }
}

module.exports = Circle;