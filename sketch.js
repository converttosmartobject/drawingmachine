let array = [];
let noiseOffset = 0.0;
let strokeWidth = 6;

function setup() {
  createCanvas(800, 800);
  // drawGrid();

}

function draw() {
strokeWeight(strokeWidth);

noiseOffset += 0.08;
strokeWidth = noise(noiseOffset) * 100;

if (mouseIsPressed){
  stroke(map(mouseX, 0, 600, 0, 255, true))
  line(mouseX, mouseY, pmouseX, pmouseY);
  //array.push([mouseX, mouseY]);
   line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
}
}

function keyTyped(){

if (key === 's'){
  //save thie image
  saveCanvas('wOW - a Masterpiece', 'png');
} //else if (key === 'd'){
//   //display this image

for (let i = 0; i < array.length - 1; i++){
  line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
}
}

return false;
}

// function drawGrid(){
//   numCells = 20;
//   fillColor = 207;
//   strokeWeight(0);
//
//   for(let i = 0; i <= width; i += width / numCells){
//     for (let j = 0; j <= height; j += height / numCells) {
//       rect(i, j, width / numCells, height / numCells);
//       if (fillColor === 207){
//         fillColor = 46;
//       } else {
//         fillColor = 207;
//       }
//       fill(fillColor);
//     }
//   }
// }
