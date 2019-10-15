let theta;

function setup() {
  createCanvas(800, 1000);
  background(0, 255, 0);
}

function draw() {
  strokeWeight(2);
  frameRate(10);

  if (mouseIsPressed) {
    stroke(map(mouseY, 0, 600, 0, 255, true))
    line(mouseX, mouseY, pmouseX, pmouseY);
     // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  }

  let a = (mouseX) * (mouseY);
  theta = radians(a);
  translate(mouseX, mouseY);
  line(10,10,10,10);
  branch(50);

}

function branch(h) {

  h *= 0.66;

  if (h > 2) {
    push();
    rotate(theta);
    line(0, 0, 0, -h);
    translate(h, -h);
    branch(2);
    pop();

    push();
    rotate(-theta);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h);
    pop();
  }
}

function keyTyped() {

  if (key === 's') {
    saveCanvas('wOW - a Masterpiece', 'png');
  }
  return false;

}
