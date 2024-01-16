const Circle = require("../lib/circle.js");

describe("Circle", () => {
  //check if renderShape method in Circle class returns a circle tag with corresponding shape color correctly
  describe("renderShape", () => {
    test("should return circle tag with corresponding shape color.", () => {
      let circle = new Circle();
      circle.setColor("blue");
      expect(circle.renderShape()).toEqual(
        `<circle cx = "150" cy="100" r="80" fill = "blue" />`
      );
    });
  });
  describe("renderSVG", () => {
    //check if the renderSVG method correctly returns the content of the svg file
    test("should return the whole content of the svg file including svg tag, text tag, and a circle tag", () => {
      let circle = new Circle("SVG", "blue", "yellow");
      expect(circle.renderSVG()).toEqual(
`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    <circle cx = "150" cy="100" r="80" fill = "yellow" />
    <text x="150" y="125" text-anchor="middle" font-size="60px" fill="blue">SVG</text>
</svg>`);
    });      
  });
  //checks if setColor method in Shape class checks for an error when invalid color is entered for a shape color. 
  describe("setColor", () => {
    test("should throw an error when invalid shape color is entered.", () => {
      let circle = new Circle();
      expect(() => circle.setColor("osifg")).toThrowError(
        "Invalid shape color"
      );
    });
  });
});
