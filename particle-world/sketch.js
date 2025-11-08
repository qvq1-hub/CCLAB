// function mousePressed () {
//   for (let i=0; i< num; i++){
//     fireworks.push(new Firework(mouseX, mouseY))
//   } 
// }

344444
// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 3; // Decide the initial number of particles.
let MAX_OF_PARTICLES = 500; // Decide the maximum number of particles.

let particles = [];

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  colorMode(HSB, 360, 100, 100);

  // generate particles
  for (let i = 0; i < 20; i++) {
    particles[i] = new Particle(random(width), random(height));
    particles.push(new Particle(random(width), random(height)));
  }
}

function draw() {
  background(50);

  // consider generating particles in draw(), using Dynamic Array
  if (frameCount % 10 == 0) {
    particles.push(new Particle(random(width), random(height)));
  }
  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
    if (!p.isVisible) {
      particles.splice(i, 1); 
    }
  }

  // limit the number of particles
  if (particles.length > MAX_OF_PARTICLES) {
    particles.splice(0, 1); // remove the first (oldest) particle
  }
}

class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties (variables): particle's characteristics
    this.x = startX;
    this.y = startY;
    this.dia = 30;
    this.isVisible = true;
    this.angle = random(TWO_PI);
    this.speed = random (1,5);
    this.hue = random(360);
    this.speedX = random(-3, 3);
    this.speedY = random(-3, 3);
  }

  // methods (functions): particle's behaviors
  update() {
  this.x += this.speedX;
  this.y += this.speedY;
  }

  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    noStroke();
    fill(this.hue, 80, 100);
    if ( frameCount % 60 == 0){
      this.angle += PI/4;
    } 
    circle(0, 0, this.dia);
    pop();
  }
}
function mousePressed() {
  for (let i = 0; i < 20; i++) {
    particles.push(new Particle(mouseX, mouseY));
  }
}
      