// TextRenderer class
const colorNameList = require("color-name-list");

class TextRenderer {
  constructor(text, textColor) {
    this.text = text;
    this.textColor = textColor;
  }

  renderText() {
    console.log("Entering TextRenderer renderText method");
    this.isValidTextColor();
    return `<text x="50%" y="50%" text-anchor="middle" font-size="90px" fill="${this.textColor}">${this.text}</text>
      </svg>`;
  }
  isValidTextColor() {
    console.log("Entering Shape isValidTextColor method");
    const validColors = colorNameList.map((c) => c.name.toLowerCase());
    const regex = new RegExp(`\\b(?:${validColors.join("|")})\\b`);
    const isValid = regex.test(this.textColor.toLowerCase());
    if (isValid) {
      return this.textColor.toLowerCase();
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

  renderSVGTag() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300">`;
  }

  renderTextTag() {
    if (this.textRenderer.text.length > 3) {
      throw new Error("Text Must not be more than 3 letters.");
    } else {
      return this.textRenderer.renderText();
    }
  }
  setColor(color) {
    this.shapeColor = color;
  }

}
module.exports = Shape;
