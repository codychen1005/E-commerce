"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(10, 15);
let myCircle = new Circle_1.Circle(5, 10, 20);
let myRetangle = new Rectangle_1.Rectangle(0, 0, 5, 10);
//declare an empty array
let shapes = [];
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRetangle);
for (let tempShape of shapes) {
    console.log(tempShape.getInfo());
}
