function setup() {
createCanvas(600,400);
}


function draw() {
  //red background
background(255,0,0);

stroke(0,0,255);
if(mouseX > 300) {
  fill(0,255,0);
}
else {
fill(0,0,255);
}

strokeWeight(5);
ellipse(50,50,50,50);
}
