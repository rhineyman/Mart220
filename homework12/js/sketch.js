let text;


function setup() {
  createCanvas(400, 400, WEBGL);

}

function draw() {
  background(220);

  function drawCone() {
    push();
    //orbitControl();
    translate(-100, 100);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.02);
    rotateZ(frameCount * 0.03);
    cone(40, 70);
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
    ambientLight(255, 0, 255);
    ambientMaterial(100, 150, 200);
    translate(-100, -100);
    rotateX(frameCount * 0.01);
    ellipsoid(30, 20, 10);
    pop();
}

drawCone();
drawCylinder();
drawCube();
drawTorus();
drawEllipsoid();


}
