import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape (10, 15);
let myCircle = new Circle (5, 10, 20);
let myRetangle =new Rectangle (0, 0, 5, 10);

//declare an empty array
let shapes: Shape[] = [];

shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRetangle);

for(let tempShape of shapes){
    console.log(tempShape.getInfo());
}