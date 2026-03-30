var idleImages = [];
//var fruitImages = [];
var runImages = [];

var characterX = 400;
var characterY = 300;

var frameCounter = 0;
var count = 0;
var timer = 60;
var timerCounter = 0;

var score = 0;
var health = 0;

var Fruit;
var FruitArray = [];
var Poison;
var PoisonArray = [];

var themeMusic;
var ouchSound;
var yummySound;


function preload() {
    //poison
    for (var i = 0; i < 3; i++) {
        Poison = new makeFruit(random(0, 800), random(0, 600), random(0, 300), random(0, 300), 0, random(20, 100), 255, 0, 0);
        PoisonArray.push(Poison);
    }

    //"fruit"
    for (var i = 0; i < 10; i++) {
        Fruit = new makeFruit(random(0, 800), random(0, 600), random(0, 300), random(0, 300), 0, random(20, 100), 0, 0, 255);
        FruitArray.push(Fruit);
    }
    //idle 
    for (var i = 0; i < 10; i++) {
        idleImages[i] = loadImage("assets/images/Idle__" + String(i).padStart(3, '0') + ".png");
        runImages[i] = loadImage("assets/images/Run__" + String(i).padStart(3, '0') + ".png");
    }

    themeMusic = loadSound("assets/sound/nes_western_theme.mp3");
    ouchSound = loadSound("assets/sound/ouch.mp3");
    yummySound = loadSound("assets/sound/yummy.mp3");
}

function setup() {
    createCanvas(800, 600);
    //health
    health = 10;
    //game timer
    timer = 30;
}

function draw() {
    background(220);

    // play music handled in mousePressed()

    //draw the "poison"
    for (var i = 0; i < PoisonArray.length; i++) {
        PoisonArray[i].drawCircles();
    }
    //draw the "fruits"
    for (var i = 0; i < FruitArray.length; i++) {
        FruitArray[i].drawCircles();

    }


    //draw the character
    for (var i = 0; i < idleImages.length; i++) {
        idleImages[i].resize(100, 100);
        runImages[i].resize(100, 100);
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
    //movement

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

    //collision detection
    for (var i = 0; i < FruitArray.length; i++) {
        var collide = dist(characterX, characterY, FruitArray[i].x, FruitArray[i].y);
        if (collide < 50) {
            // randomize fruit position, size, and color            
            FruitArray[i].x = random(0, width);
            FruitArray[i].y = random(0, height);
            FruitArray[i].d = random(20, 100);

            //play yummy sound
            if (yummySound) {
                yummySound.play();
            }
            //score
            score++;
        }
    }
    //collision detection for poison
    for (var i = 0; i < PoisonArray.length; i++) {
        var collide = dist(characterX, characterY, PoisonArray[i].x, PoisonArray[i].y);
        if (collide < 50) {
            // randomize poison position, size, and color            
            PoisonArray[i].x = random(0, width);
            PoisonArray[i].y = random(0, height);
            PoisonArray[i].d = random(20, 100);
            //play ouch sound
            if (ouchSound) {
                ouchSound.play();
            }
            //score
            score--;
            health--;
        }
    }
    //game timer 
    timerCounter++;
    if (timerCounter >= 60) {
        timerCounter = 0;
        if (timer > 0) {
            timer--;
        }
    }
    textSize(20);
    fill(0);
    text("Time: " + timer, 10, 30);

    if (timer === 0 || health <= 0) {
        textSize(50);
        fill(255, 0, 0);
        text("Game Over Final Score: " + score, width / 4 - 150, height / 4);
        noLoop();
    }


    // score display

    textSize(20);
    fill(0);
    text("Score: " + score, 10, 60);

    //click to play music
    textSize(20);
    fill(0);
    text("Click to Play/Stop Music", 10, 90);

    // health display
    textSize(20);
    fill(0);
    text("Health: " + health, 700, 30);

}


function mousePressed() {
    if (themeMusic && !themeMusic.isPlaying()) {
        themeMusic.loop();
    }else if (themeMusic && themeMusic.isPlaying()) {
        themeMusic.stop();
    }
}

