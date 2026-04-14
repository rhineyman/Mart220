let myFont;
let bugle;
let x = 300;
let y = 400;
let z = 100;
let cubeX = 100;
let cubeY = 200;
let cubeZ = 200;
let ellipsoidX = -100;
let ellipsoidY = -100;
let ellipsoidZ = 0;
function preload() {
    myFont = loadFont('assets/fonts/PressStart2P-Regular.ttf');
  bugle = loadModel('assets/models/bugle.obj');
}

function setup() {
  createCanvas(800, 800, WEBGL);
  myFont = createGraphics(100, 100)
  myFont.textFont(myFont);
  myFont.textAlign(CENTER);
  myFont.textSize(50);
  myFont.fill(3, 7, 11);
  myFont.noStroke();
  myFont.text('Mike : Shapes', 50, 75);
}

function draw() {
  background(220);
  //push();
  //noStroke();
  //texture(myFont);
  //plane(100, 100);
  //pop();
  //push();
  //noStroke();
  //texture(myFont);
  //pop();



drawCone();
drawCylinder();
drawCube();
drawTorus();
drawEllipsoid();
drawBugle();
drawPlane();
orbitControl();
}
function drawPlane() {
    push();
    translate(0, 0, -100);
   normalMaterial();
  texture(myFont);
  plane(100, 100);
    pop();
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
    
    //orbitControl();
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
    translate(cubeX, cubeY, cubeZ);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    box(20, 20, 20);
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
    translate(ellipsoidX, ellipsoidY, ellipsoidZ);
    rotateX(frameCount * 0.01);
    ellipsoid(30, 20, 10);
    pop();
}

function mousePressed() {
    cubeX = random(-400, 400);
    cubeY = random(-400, 400);
    cubeZ = random(-200, 200);
    ellipsoidX = random(-400, 400);
    ellipsoidY = random(-400, 400);
    ellipsoidZ = random(-200, 200);
    x = random(-400, 400);
    y = random(-400, 400);
    z = random(-200, 200);
}
