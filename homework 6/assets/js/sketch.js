var idle1;
var count = 0;
var idleImages = [];
var fruitImages = [];
var runImages = [];

var characterX = 400;
var characterY = 300;

/*var fruitPositions = [
    {x: 500, y: 200},
    {x: 400, y: 0},
    {x: 200, y: 500},
    {x: 50, y: 200}
];*/

var frameCounter = 0;

var x = 100;
var y = 100;



// draw image 
function ds(img, xPos, yPos, h) {
    if (!img) return;
    var iw = img.width || 1;
    var ih = img.height || 1;
    image(img, xPos, yPos, iw * h / ih, h);
}

function preload() {
    
   //idle 
    for (var i = 0; i < 10; i++) 
        idleImages[i] = loadImage("assets/images/Idle__" + String(i).padStart(3, '0') + ".png");

//fruit

    for (var i = 0; i < 4; i++) 
        fruitImages[i] = loadImage("assets/images/Fruit" + String(i) + ".png");

    //run 
    for (var i = 0; i < 10; i++) 
        runImages[i] = loadImage("assets/images/Run__" + String(i).padStart(3, '0') + ".png");
}



function setup() {
    createCanvas(1500, 1500);


}

function draw() {
    background(220);
    



    
    //image(fruitImages[count % fruitImages.length], x, y);
    


    /*for (var i = 0; i < fruitImages.length; i++) {
        var pos = fruitPositions[i] || {x: 0, y: 0};
        image(fruitImages[i], pos.x, pos.y);
    }
        */

//timer

    frameCounter++;
    if (frameCounter >= 5) {
        frameCounter = 0;
        count++;
        if (count >= idleImages.length) {
            count = 0;
        }
    }

    //Movement

    var moving = keyIsDown(87) || keyIsDown(83) || keyIsDown(65) || keyIsDown(68);    
           
    
    if (moving) 
        ds(runImages[count % runImages.length], characterX, characterY, 100);
    else 
        ds(idleImages[count % idleImages.length], characterX, characterY, 100);


    //move character with WASD keys
    if (keyIsDown(87)) {        
         // W key
        characterY -= 5;
    }
    if (keyIsDown(83)) { // S key
        characterY += 5;
    }
    if (keyIsDown(65)) { // A key
        characterX -= 5;
    }
    if (keyIsDown(68)) { // D key
        characterX += 5;
    }

 

}