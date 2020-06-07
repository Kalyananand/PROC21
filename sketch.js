function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  planet = new Planet (200,200,150,150);  
  drawSprites();
}