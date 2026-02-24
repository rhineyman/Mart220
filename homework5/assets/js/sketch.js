
var idle1;
var count = 0;
var idleImages = [];
var fruitImages = [];
var runImages = []; 
var characterX = 400;
var characterY = 300;


var frameCounter = 0;

var x = 100;
var y = 100;

function preload() {
    
   //idle 
    for (var i = 0; i < 10; i++) {
        idleImages[i] = loadImage("assets/images/Idle__" + String(i).padStart(3, '0') + ".png");

    }
    //run
    for (var i = 0; i < 10; i++) {
        runImages[i] = loadImage("assets/images/Run__" + String(i).padStart(3, '0') + ".png");
    }
    
}

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);
    
    for (var i = 0; i < idleImages.length; i++) {
        idleImages[i].resize(100, 100);
        runImages[i].resize(100, 100);
    } 


    frameCounter++;
    if (frameCounter >= 5) {
        frameCounter = 0;
        count++;
        if (count >= idleImages.length) {
            count = 0;
        }
    }


 if (isKeyPressed) {
    if (keyIsDown(87)) {        
         // W key
        characterY -= 5;
        image(runImages[count], characterX, characterY);
    }
    if (keyIsDown(83)) { // S key
        characterY += 5;
        image(runImages[count], characterX, characterY);
    }
    if (keyIsDown(65)) { // A key
        characterX -= 5;
        image(runImages[count], characterX, characterY);
    }
    if (keyIsDown(68)) { // D key
        characterX += 5;
        image(runImages[count], characterX, characterY);
    }
}
else {
    image(idleImages[count], characterX, characterY);
}

}
