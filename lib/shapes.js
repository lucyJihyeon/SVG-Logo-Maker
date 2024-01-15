//Import color-name-list
const colorNameList = require("color-name-list");

//TextRenderer class
class TextRenderer {
    //takes text and textColor as arguments
  constructor(text, textColor) {
    this.text = text;
    this.textColor = textColor;
  }

  // checks if the text color is valid and returns the valid color name as this.textColor
  renderText() {
    this.isValidTextColor();
    //renders text tag for the svg file, and close the svg tag 
    return `<text x="50%" y="50%" text-anchor="middle" font-size="90px" fill="${this.textColor}">${this.text}</text>
      </svg>`;
  }
  //check if the textColor is valid by using color-name-list 
  isValidTextColor() {
    //loop through all of the color name list and store them in a new array validColors
    const validColors = colorNameList.map((c) => c.name.toLowerCase());
    //regex for the valid colors
    const regex = new RegExp(`\\b(?:${validColors.join("|")})\\b`);
    //checks if textColor is within the regex
    const isValid = regex.test(this.textColor.toLowerCase());
    //if it is valid, return textColor in lower case
    if (isValid) {
      return this.textColor.toLowerCase();
    //if it is not valid, throw an error
    } else {
      throw new Error("Invalid text color");
    }
  }
}

// Shape class using composition with TextRenderer
class Shape {
  constructor(text, textColor) {
    this.textRenderer = new TextRenderer(text, textColor);
  }

  //creates a svg tag
  renderSVGTag() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300">`;
  }
  //checks if the text length is greater than 3, then throw an error if it is.
  renderTextTag() {
    if (this.textRenderer.text.length > 3) {
      throw new Error("Text Must not be more than 3 letters.");
    //if less than 4, calls renderText method in Textrenderer class.
    } else {
      return this.textRenderer.renderText();
    }
  }
  
  //Check if the shapeColor is valid
  setColor(color) {
    this.shapeColor = color;
    //loop through all of the color name list and store them in a new array validColors
    const validColors = colorNameList.map((c) => c.name.toLowerCase());
    //regex for the valid colors
    const regex = new RegExp(`\\b(?:${validColors.join("|")})\\b`);
    //checks if shapeColor is within the regex
    const isValid = regex.test(this.shapeColor.toLowerCase());
    //if it is valid, return shapeColor in lower case
    if (isValid) {
      return this.shapeColor.toLowerCase();
    //if it is not valid, throw an error
    } else {
      throw new Error("Invalid shape color");
    }
  }

}
module.exports = Shape;
