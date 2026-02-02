function setup()
{
    createCanvas(800,600);
}



function draw()
{
    background(120);

    // grass
    fill(0,128,0);
    rect(25,400,750,550);


    // upper border
    noStroke();
    fill(76,43,32);
    rect(0,0,800,50);
    // left border
    rect(0,25,50,600);
    // bottom border
    rect(50,550,800,50);
    // right border
    rect(750,25,50,600);

    // text
    fill(0);
    textSize(25);
    text("Mike Rhiney",580,530);
    text("Simple Shape Art",50,30);

    // square in top left corner
    fill(255,215,0);
    square(0,0,50);
    // square in top right corner
    
    square(750,0,50);
    // square in bottom right corner
    
    square(750,550,50);
    // square in bottom left corner
    
    square(0,550,50);



    // triangle top left square
    fill(255,0,0);
    
    triangle(10,10, 40,10, 25,40);
    // triangle top right square
    
    triangle(760,10, 790,10, 775,40);

    // triangle bottom right square
    
    triangle(760,560, 790,560, 775,590);

    // triangle bottom left square
    
    triangle(10,560, 40,560, 25,590);






    // sun? 1
    fill(50,120,122);
    circle(200,140,90);
// sun? 2
    fill(200,120,122);
    circle(170,160,90);
// sun? 3
    fill(250,220,22);
    circle(140,180,90);
    // sun? 4
    fill(255,20,20);
    circle(110,200,90);




   
    // house?
    fill(250,220,222);
    rect(440,340,120,70);

    // roof
    fill(100,120,222);
    triangle(440, 340, 560, 340, 500, 170);

    //door
    fill(150,70,122);
    rect(490,380,30,30);

//traingle ufo beam
     fill(250,250,22);
    triangle(580,350, 620,350, 600,130);

    //ufo body
    fill(25,20,222);
    ellipse(600,140,190,70);

    //ufo dome
    fill(125,220,122);
    arc(600,130,90,90, PI, TWO_PI);

    //dude body
    fill(200,50,122);
    ellipse(600,350,10,30);  
    //dude head
    fill(255,220,200);
    circle(600,330,15);

}
