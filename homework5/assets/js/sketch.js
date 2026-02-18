
var idle1;
var count = 0;
var idleImages = [];
var fruitImages = [];

var fruitPositions = [
    {x: 500, y: 200},
    {x: 400, y: 0},
    {x: 200, y: 500},
    {x: 50, y: 200}
];

var frameCounter = 0;

var x = 100;
var y = 100;

function preload() {
    
   //idle 
    for (var i = 0; i < 10; i++) {
        idleImages[i] = loadImage("assets/images/Idle__" + String(i).padStart(3, '0') + ".png");

    }

//fruit

    for (var i = 0; i < 4; i++) {
        fruitImages[i] = loadImage("assets/images/Fruit" + String(i) + ".png");
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
    for (var i = 0; i < fruitImages.length; i++) {
        fruitImages[i].resize(0, 100);

    }

    //generate idle and fruit images
    image(idleImages[count], 400, 300);
    image(fruitImages[count % fruitImages.length], x, y);

    for (var i = 0; i < fruitImages.length; i++) {
        var pos = fruitPositions[i] || {x: 0, y: 0};
        image(fruitImages[i], pos.x, pos.y);
    }

//timer

    frameCounter++;
    if (frameCounter >= 5) {
        frameCounter = 0;
        count++;
        if (count >= idleImages.length) {
            count = 0;
        }
    }

    //move fruit 

    if (x < 400) {
        x += 2;
    } else {
        x = 100;
        y += 100;
    }
    if (y > 500) {
        y = 100;
    }
 

}


