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
    render()    {
        return `<circle cx = "125" cy="125" r="100" fill = "${this.shapeColor}" />`
    }
    //renderSVG method to return a string for the whole SVG file content
    renderSVG() {
        return `${super.renderSVGTag()}
            ${this.render()}
            ${super.renderTextTag()}`
    }
}

module.exports = Circle;