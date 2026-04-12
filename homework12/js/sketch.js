let text;
let bugle;
function preload() {
  bugle = loadModel('assets/models/bugle.obj');
}

function setup() {
  createCanvas(800, 800, WEBGL);
  text = createGraphics(100, 100)
  text.textFont('Source Code Pro');
  text.textAlign(CENTER);
  text.textSize(50);
  text.fill(3, 7, 11);
  text.noStroke();
  text.text('Mike', 50, 75);
}

function draw() {
  background(220);
  //push();
  noStroke();
  texture(text);
  //pop();



drawCone();
drawCylinder();
drawCube();
drawTorus();
drawEllipsoid();
drawBugle();


}
function drawBugle() {
    push();
    scale(7);
    translate(0, 0, 40);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    normalMaterial();
    model(bugle);
    pop();
}

  function drawCone() {
    push();
    //orbitControl();
    translate(-100, 100);
    //rotateX(frameCount * 0.01);
    rotateY(frameCount * -0.02);
    //rotateZ(frameCount * 0.03);
    cone(70, 120);
    pop();
}
function drawCylinder() {
    push();
    
    orbitControl();
    normalMaterial();
    translate(100, 100);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.02);
    rotateZ(frameCount * 0.03);
    cylinder(20, 50, 24, 16, false, false);
    
    pop();
}
function drawCube() {
    push();
    ambientLight(255, 0, 255);
    ambientMaterial(100, 150, 200);
    translate(0, 100);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    box(50, 50, 50);
    pop();
}
function drawTorus() {
    push();
    //orbitControl();
    specularMaterial(0,0,255);
    translate(0, -100);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(30, 10);
    pop();
}

function drawEllipsoid() {
    push();
    //orbitControl();
    ambientLight(0, 0, 255);
    ambientMaterial(100, 150, 200);
    translate(-100, -100);
    rotateX(frameCount * 0.01);
    ellipsoid(30, 20, 10);
    pop();
}