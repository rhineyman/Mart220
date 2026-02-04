function preload() {
  // Load any assets if needed
  img = loadImage('assets/dog.jpg');
}
function setup() {
  
  createCanvas(800, 600);
  noLoop(); // Draw only once
  
}
function draw() {
  background(220); 
  image(img, 0, 0, width, height); // Draw the image to cover the canvas
  fill(255, 0, 0, 150); // Semi-transparent red
  ellipse(mouseX, mouseY, 100, 100); // Draw circle at mouse position
}