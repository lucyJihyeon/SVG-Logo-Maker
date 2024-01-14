//Import shape.js
const Shape = require('./shapes.js');

class Square extends Shape  {
    //takes text, textColor, and shapeColor as arguments
    constructor(text, textColor, shapeColor)  {
        //inherits text and textColor arguments from Shape class
        super(text, textColor);
        this.shapeColor = shapeColor;
    }
    //render method to return a string for the corresponding SVG file 
    render()    {
        return `<rect x="50" y="20" width = "250" height = "250" fill = "${this.shapeColor}" />` 
    }
     //renderSVG method to return a string for the whole SVG file content
     renderSVG() {
        return `${super.renderSVGTag()}
            ${this.render()}
            ${super.renderTextTag()}`
    }
}

module.exports = Square;
