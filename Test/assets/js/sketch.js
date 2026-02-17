
var idle1;
var count = 0;
var idleImages = [];
var frameCounter = 0;

function preload() {
    
    
    for (var i = 0; i < 10; i++) {
        idleImages[i] = loadImage("assets/images/Idle__" + String(i).padStart(3, '0') + ".png");
    }
}

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);
    
    for (var i = 0; i < idleImages.length; i++) {
        idleImages[i].resize(0, 200);
    } 

    image(idleImages[count], 400, 300);

    frameCounter++;
    if (frameCounter >= 5) {
        frameCounter = 0;
        count++;
        if (count >= idleImages.length) {
            count = 0;
        }
    }
}


