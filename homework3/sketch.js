let dudeX = 600;
let dudeY = 350;

let sun1x = 200;
let sun1y = 140;
let sun1vx = 0;
let sun1vy = 0;
let sun2x = 400;
let sun2y = 100;
let sun2vx = 2;
let sun2vy = 2;
let sun3x = 140;
let sun3y = 180;
let sun3vx = 0;
let sun3vy = 0;
let sun4x = 110;
let sun4y = 200;
let sun4vx = 0;
let sun4vy = 0;


function setup() {
    createCanvas(800, 600);
    sun1vx = random(-3, 3);
    sun1vy = random(-3, 3);
    sun2vx = random(-3, 3);
    sun2vy = random(-3, 3);
    sun3vx = random(-3, 3);
    sun3vy = random(-3, 3);
    sun4vx = random(-3, 3);
    sun4vy = random(-3, 3);
}



function draw() {
    // Handle WASD movement
    if (keyIsPressed) {
        if (key === 'w') {
            dudeY -= 5;
        }
        if (key === 's') {
            dudeY += 5;
        }
        if (key === 'a') {
            dudeX -= 5;
        }
        if (key === 'd') {
            dudeX += 5;
        }
    }

    // Update sun 1 position and bounce

    sun1x += sun1vx;
    sun1y += sun1vy;
    sun2x += sun2vx;
    sun2y += sun2vy;
    sun3y += sun3vy;
    sun3x += sun3vx;
    sun4y += sun4vy;
    sun4x += sun4vx;
    // bounce off walls sun 3
    if (sun3x - 100 < 0 || sun3x + 100 > 800) {
        sun3vx *= -1;
    }
    if (sun3y - 100 < 0 || sun3y + 100 > 600) {
        sun3vy *= -1;
    }
    // Bounce off walls sun 4
    if (sun4x - 100 < 0 || sun4x + 100 > 800) {
        sun4vx *= -1;
    }
    if (sun4y - 100 < 0 || sun4y + 100 > 600) {
        sun4vy *= -1;
    }
    // Bounce off walls sun 2
    if (sun2x - 100 < 0 || sun2x + 100 > 800) {
        sun2vx *= -1;
    }
    if (sun2y - 100 < 0 || sun2y + 100 > 600) {
        sun2vy *= -1;
    }

    // Bounce off walls sun 1
    if (sun1x - 100 < 0 || sun1x + 100 > 800) {
        sun1vx *= -1;
    }
    if (sun1y - 100 < 0 || sun1y + 100 > 600) {
        sun1vy *= -1;
    }

    background(120);

    // grass
    fill(0, 128, 0);
    rect(25, 400, 750, 550);


    // upper border
    noStroke();
    fill(76, 43, 32);
    rect(0, 0, 800, 50);
    // left border
    rect(0, 25, 50, 600);
    // bottom border
    rect(50, 550, 800, 50);
    // right border
    rect(750, 25, 50, 600);

    // text
    fill(0);
    textSize(25);
    text("Mike Rhiney", 580, 530);
    text("Simple Shape Art", 50, 30);

    // square in top left corner
    fill(255, 215, 0);
    square(0, 0, 50);
    // square in top right corner

    square(750, 0, 50);
    // square in bottom right corner

    square(750, 550, 50);
    // square in bottom left corner

    square(0, 550, 50);



    // triangle top left square
    fill(255, 0, 0);

    triangle(10, 10, 40, 10, 25, 40);
    // triangle top right square

    triangle(760, 10, 790, 10, 775, 40);

    // triangle bottom right square

    triangle(760, 560, 790, 560, 775, 590);

    // triangle bottom left square

    triangle(10, 560, 40, 560, 25, 590);



    // sun? 1
    fill(150, 100, 122);
    circle(sun1x, sun1y, 90);
    // sun? 2
    fill(200, 120, 122);
    circle(sun2x, sun2y, 90);
    // sun? 3
    fill(250, 220, 22);
    circle(sun3x, sun3y, 90);
    // sun? 4
    fill(255, 20, 20);
    circle(sun4x, sun4y, 90);






    // house?
    fill(250, 220, 222);
    rect(440, 340, 120, 70);

    // roof
    fill(100, 120, 222);
    triangle(440, 340, 560, 340, 500, 170);

    //door
    fill(150, 70, 122);
    rect(490, 380, 30, 30);

    //traingle ufo beam
    fill(250, 250, 22);
    triangle(580, 350, 620, 350, 600, 130);

    //ufo body
    fill(25, 20, 222);
    ellipse(600, 140, 190, 70);

    //ufo dome
    fill(125, 220, 122);
    arc(600, 130, 90, 90, PI, TWO_PI);

    //dude body
    fill(200, 50, 122);
    ellipse(dudeX, dudeY, 10, 30);
    //dude head
    fill(255, 220, 200);
    circle(dudeX, dudeY - 20, 15);

}
