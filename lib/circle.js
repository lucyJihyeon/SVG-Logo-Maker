const Shape = require('./shapes.js');

class Circle extends Shape  {
    constructor(text, textColor, shapeColor ) {
        super(text);
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render()    {
        return `<circle cx = "125" cy="125" r="100" fill = "${this.shapeColor}" />`
    }

}



class Square extends Shape  {
    constructor(textColor, shapeColor)  {
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render()    {
        return `<rect x="50" y="20" width = "250" height = "250" fill = "${this.shapeColor}`
    }
}