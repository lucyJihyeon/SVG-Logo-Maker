const Square = require("../lib/square.js");

describe("Square", () => {
  //check if renderShape method in Square class returns a square tag with corresponding shape color correctly
  describe("renderShape", () => {
    test("should return circle tag with corresponding shape color.", () => {
      let square = new Square();
      square.setColor("blue");
      expect(square.renderShape()).toEqual(
        `<rect x="25" y="25" width="250" height="150" fill="blue" />`
      );
    });
  });
  describe("renderSVG", () => {
    //check if the renderSVG method correctly returns the content of the svg file
    test("should return the whole content of the svg file including svg tag, text tag, and a circle tag", () => {
      let square = new Square("SVG", "blue", "yellow");
      expect(square.renderSVG()).toEqual(
`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    <rect x="25" y="25" width="250" height="150" fill="yellow" />
    <text x="150" y="125" text-anchor="middle" font-size="60px" fill="blue">SVG</text>
</svg>`);
    });      
  });
  //checks if setColor method in Shape class checks for an error when invalid color is entered for a shape color. 
  describe("setColor", () => {
    test("should throw an error when invalid shape color is entered.", () => {
      let square = new Square();
      expect(() => square.setColor("osifg")).toThrowError(
        "Invalid shape color"
      );
    });
  });
});
