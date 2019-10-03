function setup() {
  createCanvas(800, 800);
  background(220);
  strokeWeight(6);
}

function draw() {

if (mouseIsPressed){
  stroke(map(mouseX, 0, 600, 0, 255, true))
  line(mouseX, mouseY, pmouseX, pmouseY);
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
}

}

function keyTyped(){

if (key === 's'){
  saveCanvas('fileName', 'png');
}

return false;

}
