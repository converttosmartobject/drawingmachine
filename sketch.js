function setup() {
  createCanvas(800, 800);
  background(220);
  strokeWeight(6);
}

function draw() {

if (mouseIsPressed){
  line(mouseX, mouseY, pmouseX, pmouseY);
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
}

}
