const Triagle = require("../lib/triangle.js");

describe("Triangle", () => {
  //check if renderShape method in Triangle class returns a square tag with corresponding shape color correctly
  describe("renderShape", () => {
    test("should return circle tag with corresponding shape color.", () => {
      let triangle = new Triagle();
      triangle.setColor("blue");
      expect(triangle.renderShape()).toEqual(
        `<polygon points = "150, 18 244, 182 56, 182" fill = "blue" />`
      );
    });
  });
  describe("renderSVG", () => {
    //check if the renderSVG method correctly returns the content of the svg file
    test("should return the whole content of the svg file including svg tag, text tag, and a circle tag", () => {
      let triangle = new Triagle("SVG", "blue", "yellow");
      expect(triangle.renderSVG()).toEqual(
`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    <polygon points = "150, 18 244, 182 56, 182" fill = "yellow" />
    <text x="150" y="125" text-anchor="middle" font-size="60px" fill="blue">SVG</text>
</svg>`);
    });
  });
  //checks if setColor method in Shape class checks for an error when invalid color is entered for a shape color. 
  describe("setColor", () => {
    test("should throw an error when invalid shape color is entered.", () => {
      let triangle = new Triagle();
      expect(() => triangle.setColor("osifg")).toThrowError(
        "Invalid shape color"
      );
    });
  });
});
