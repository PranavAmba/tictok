var hr = hour();
var min = minute();
var sec = second();


function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);
  secAngle = map(sec, 0, 50, 0 ,180)  
  minAngle = map(min, 0, 100, 0 ,200)  
  hrAngle = map(hr, 0, 100, 0 ,220)  

  //sec hand
  push()
  rotate(secAngle)
  stroke(0)
  strokeWeight(7)
  line(0,0,10,50)
  pop()
  drawSprites();
}