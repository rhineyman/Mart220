function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);

  function drawCone() {
    push();
    orbitControl();
    translate(-100, 100);
    //rotateX(frameCount * 0.01);
    //rotateY(frameCount * 0.02);
    //rotateZ(frameCount * 0.03);
    cone(40, 70);
    pop();
}
function drawCyclinder() {
    //normalMaterial();
    translate(100, 100);
    cylinder(20, 50, 24, 16, false, false);
}
drawCone();
drawCyclinder();

}