const Shape = require('./shapes.js');

class Triangle extends Shape    {
    constructor(text, textColor, shapeColor)  {
        super(text, textColor);
        this.shapeColor = shapeColor;
    }
    render()    {
        return `<polygon points = "150, 18 244, 182 56, 182" fill = "${this.shapeColor}" />`
    }
    renderSVG() {
        return `${super.renderSVGTag()}
            ${this.render()}
            ${super.renderTitleTag()}`
    }
}
module.exports = Triangle;