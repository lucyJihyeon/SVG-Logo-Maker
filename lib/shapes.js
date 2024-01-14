//Shape class
class Shape {
    //takes text and textColor as arguments
    constructor(text, textColor) {
      this.text = text;
      this.textColor = textColor;
    }
    //if the text length is more than 3, throw an error
    render() {
          return `<text x="50%" y="50%" text-anchor ="middle" font-size="90px" fill = "${this.textColor}">${this.text}</text>
               </svg>`
      }
  
    
  
    //create a SVG tag
    renderSVGTag() {
      return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300">`;
    }
    //create a text tag
    renderTextTag() {
      if (this.text.length > 3) {
          throw new Error("Text Must not be more than 3 letters.");
        } else {
          return this.render();
        }
      }
  
    setColor(color) {
      this.shapeColor = color;
    }
  }
  module.exports = Shape;
  