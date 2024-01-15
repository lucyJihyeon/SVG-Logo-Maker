const Shape = require("../lib/shapes.js");

describe("Shape", () => {
  //checks if renderSVGTag method in Shape class returns a svg tag correctly
  describe("renderSVGTag", () => {
    test("should return svg tag", () => {
      let shape = new Shape("SVG", "white");
      expect(shape.renderSVGTag()).toEqual(
        '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300">'
      );
    });
  });

  //checks if renderTextTag method throws an error when user enters more than 3 character text for a logo
  describe("renderTextTag", () => {
    test("it checks if the text length is greater than 3, then throw an error if it does and returns text tag if it doesnt", () => {
      let shape = new Shape("SGFG", "white");

      // Wrap the function call inside another function
      const renderTextTagFunction = () => {
        shape.renderTextTag();
      };

      // Pass the function to expect to throw an error.
      expect(renderTextTagFunction).toThrowError(
        "Text Must not be more than 3 letters."
      );
    });
    //check if it returns a correct text tag when less than 4 characters for a text and valid color for a text color are entered
    test("should returns text tag when valid color and less than 4 characters are entered", () => {
      let shape = new Shape("SVG", "black");
      const result = shape.renderTextTag();

      // 
      expect(result).toEqual(`<text x="50%" y="50%" text-anchor="middle" font-size="90px" fill="black">SVG</text>
      </svg>`);
    });
  });
  //checks if isValidTextColor method throws an error wen user enters invalid text color.
  describe("isValidTextColor", () => {
    test("should throws an error when invalid color name is entered", () => {
      let shape = new Shape("SVG", "parangsack");

      const isValidText = () => {
        shape.textRenderer.isValidTextColor();
      };
      expect(isValidText).toThrowError("Invalid text color");
    });
  });
});
