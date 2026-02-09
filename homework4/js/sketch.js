var carrotImg;





function preload() {
  // Load any assets if needed
  carrotImg = loadImage('assets/images/dog.jpg');


}


function setup() {

  createCanvas(800, 800);


}
function draw() {
  background(220);

  image(carrotImg, 0, 0, 200, 200); // Draw the image to cover the canvas
  // Semi-transparent red
  // Draw circle at mouse position
}