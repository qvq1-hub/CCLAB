rectSize = 10;
let x;
let y;
let sx = 2;
let sy = 3;

let dropX = -100;
let dropY = -100;

function setup() {
let canvas = createCanvas(800, 500);
canvas.parent("p5-canvas-container");

  x = 200;
  y = 200;
}

function draw() {
  background(220);

  // rainbow background
  noStroke();
  for (let y = 0; y < 20; y++) {
    fill(lerpColor(color("red"), color("orange"), y / 20));
    rect(0, y * 5, width, rectSize);
  }
  for (let y = 0; y < 20; y++) {
    fill(lerpColor(color("orange"), color("yellow"), y / 10));
    rect(0, (y + 10) * rectSize, width, rectSize);
  }
  for (let y = 0; y < 20; y++) {
    fill(lerpColor(color("yellow"), color("green"), y / 10));
    rect(0, (y + 20) * rectSize, width, rectSize);
  }
  for (let y = 0; y < 20; y++) {
    fill(lerpColor(color("green"), color("blue"), y / 10));
    rect(0, (y + 30) * rectSize, width, rectSize);
  }
  for (let y = 0; y < 20; y++) {
    fill(lerpColor(color("blue"), color("purple"), y / 11));
    rect(0, (y + 40) * rectSize, width, rectSize);
  }

  x = x + sx;
  y = y + sy;
  if (x > width - 100 || x < 100) {
    sx = -sx;
  }
  if (y > height - 100 || y < 100) {
    sy = -sy;
  }

  push();
  translate(x, y);
  rotate(frameCount * 0.2);
  for (let angle = 0; angle < 1.5 * TWO_PI; angle += PI / 30) {
    push();
    rotate(frameCount * 0.1);
    let size = map(angle, 0, 1.5 * TWO_PI, 10, 100);
    let R = map(angle, 0, 1.5 * TWO_PI, 0, 100);
    let x = R * cos(angle);
    let y = R * sin(angle);
    drawFace(x, y, size);
    pop();
  }
  pop();

  if (mouseIsPressed) {
    dropX = mouseX;
    dropY = mouseY;
  }

  fill(255);
  circle(dropX, dropY, 50);
  dropY = dropY + 5;
  if (dropY > height - 20) {
    dropY = height - 20;
  }
}

function drawFace(x, y, s) {
  push();
  translate(x, y);
  scale(0.5);
  let speed = frameCount * 0.25;
  rotate(speed);
  noStroke();
  fill(random(255), random(255), random(255));
  circle(x + 40, y + 50, 140);
  circle(x, y + 20, 80);
  pop();
}