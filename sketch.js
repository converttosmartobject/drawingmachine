let noiseOffset = 0.0;
let strokeWidth = 6;

function setup() {
  createCanvas(800, 800);
  background(0);

}

function draw() {
strokeWeight(strokeWidth);

noiseOffset += 0.08;
strokeWidth = noise(noiseOffset) * 100;

if (mouseIsPressed){
  stroke(map(mouseX, 0, 600, 0, 255, true))
 line(mouseX, mouseY, pmouseX, pmouseY);
  // line(mouseX, mouseY, mouseY, mouseX);
  // line(mouseX, mouseY, pmouseY, pmouseX);
  // line(pmouseX, pmouseY, mouseX, mouseY);
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  // line(mouseX, mouseY, width + pmouseX, height + pmouseY);

}

}

function keyTyped(){

if (key === 's'){
  saveCanvas('wOW - a Masterpiece', 'png');
}

return false;

}
