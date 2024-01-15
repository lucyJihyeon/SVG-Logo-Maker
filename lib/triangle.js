//Import shape.js
const Shape = require('./shapes.js');

//Triangle class inherits from Shape class
class Triangle extends Shape    {
    //takes text, textColor, and shapeColor as arguments
    constructor(text, textColor, shapeColor)  {
        //inherits text and textColor arguments from Shape class
        super(text, textColor);
        this.shapeColor = shapeColor;
    }
    //render method to return a string for the corresponding SVG file 
    renderShape()    {
        console.log("Entering Triangle render method");
        return `<polygon points = "150, 18 244, 182 56, 182" fill = "${this.shapeColor}" />`
    }
    //renderSVG method to return a string for the whole SVG file content
    renderSVG() {
        return `${super.renderSVGTag()}
            ${this.renderShape()}
            ${super.renderTextTag()}`
    }
}
//export Triangle class.
module.exports = Triangle;