/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new youdance(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class youdance {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;

    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
   fill(52, 155, 235);
  let size = 100
  beginShape();
  vertex(0, 0 + size / 2); 
  bezierVertex(0- size / 2, 0 + size / 2,   0 - size / 4, 0 - size / 2, 0, 0 - size / 2); 
  bezierVertex(0 + size / 4, 0- size / 2, 0 + size / 2, 0 + size / 2, 0, 0 + size / 2); 
  endShape(CLOSE);

  //eyes
  //left eye

  push();
  translate(0,sin(-frameCount * 0.09)/2 ); 
  strokeWeight(0.5)
  fill (255)
  circle (0 - size / 8, 0 - size / 8, size / 7);
  noStroke();
  pop();

  push();
  translate(0,sin(frameCount * 0.09) * 2); 
  fill(0)
  circle (0 - size / 8, 0 - size / 9, size / 12);
  fill(255)
  circle (0 - size / 8, 0 - size / 9, size / 50);
pop();

  //right eye
  push();
  translate(0,sin(frameCount * 0.09)/2); 
  strokeWeight(0.5)
  fill (255)
  circle (0 + size / 8, 0 - size / 8, size / 7);
  noStroke();
  pop();

  push();
  translate(0,sin(-frameCount * 0.09)* 2); 
  fill(0)
  circle (0 + size / 8, 0 - size / 7, size / 12);
  fill(255) 
  circle (0 + size / 8, 0 - size / 7, size / 50);
pop();

  //eyebrows
stroke(0);
strokeWeight(2);
noFill();

push();
translate(0, -size/1/4 + sin(frameCount * 0.09) * 3); 
arc(-size / 8, 0, size / 13, size / 30, PI, TWO_PI);
arc(size / 8, 0, size / 13, size / 30, PI, TWO_PI);
pop();

noStroke();
  //mouthshadow 
  fill (56, 84, 130)
  arc (0, 0 + 13, size / 6, size / 10, 0, PI);
   
  //mouth
  fill (0)
  arc (0, 0 + size / 12, size / 4.5, size / 7, 0, PI);
  fill (255)
  arc (0, 0 + size / 11, size / 10, size / 15, 0, PI);
  fill(0)
  rect(-1,0+9,1.2,5)
  
//arm
let armAngle = sin(frameCount /8 ) * QUARTER_PI; 
fill(56, 84, 130);

//Left
push();
translate(-26, 0);
rotate(armAngle);
rect(-size / 10, 0, size / 10, size / 3, size / 20);
translate(-size / 45, size /3.2);
rotate(armAngle / 2);
rect(-size / 12, 0, size / 12, size / 3, size / 20);
pop();


//Right
push();
translate(26, 0); 
rotate(-armAngle);


rect(0, 0, size / 10, size / 3, size / 20);


translate(size /45, size / 3.2);
rotate(-armAngle / 2); 
rect(0, 0, size / 12, size / 3, size / 20);
pop();



  //legs
let legAngle = sin(frameCount / 8) * QUARTER_PI / 2;

//Right
push();
translate(-20, size /2.5); 
rotate(legAngle);
rect(0, 0, size / 10, size / 3, size / 20);

translate(0, size / 3);
rotate(-legAngle / 3); 
rect(0, 0, size / 10, size / 3, size / 20);
pop();

//left
push();
translate(18, size /2.5); 
rotate(-legAngle);
rect(0, -4, size / 10, size / 3, size / 20);
translate(0, size / 3);
rotate(legAngle / 3); 
rect(0, -3, size / 10, size / 3, size / 20);
pop();

//plush
if (mouseIsPressed) {
  fill(255, 105, 180); 
    noStroke();
    ellipse (15, 0, 13, 5 );
    ellipse (-15, 0, 13, 5 );
}



    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes(){
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/