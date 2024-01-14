class Shape {
    constructor(text, textColor){
        this.text = text;
        this.textColor = textColor;
    }
    render()    {
        throw new Error("Text Must not be more than 3 letters.");
    }
    renderSVGTag()  {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300">`
    }
    renderTitleTag()    {
        if ((this.text).length > 3) {
            this.render();
        } else {
            return `<text x="50%" y="50%" text-anchor ="middle" font-size="90px" fill = "${this.textColor}">${this.text}</text>
            </svg>`
        }
    }



}



module.exports = Shape;