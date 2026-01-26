function setup()
{
    createCanvas(800,600);
}



function draw()
{
    background(120);

    fill(0,128,0);
    rect(25,400,750,550);
    // upper border
    noStroke();
    fill(0,100,255);
    rect(0,0,800,50);
    // left border
    rect(0,25,50,600);
    // bottom border
    rect(50,550,800,50);
    // right border
    rect(750,25,50,600);

    fill(0);
    textSize(25);
    text("Mike Rhiney",580,530);
    text("Simple Shape Art",50,30);

    // square in top left corner
    fill(155,100,22);
    square(0,0,50);
    // square in top right corner
    fill(155,100,22);
    square(750,0,50);
    // square in bottom right corner
    fill(155,100,22);
    square(750,550,50);
    // square in bottom left corner
    fill(155,100,22);
    square(0,550,50);

    // triangle top left square
    fill(255,0,0);
    triangle(10,10, 40,10, 25,40);

    // triangle top right square
    fill(255,0,0);
    triangle(760,10, 790,10, 775,40);

    // triangle bottom right square
    fill(255,0,0);
    triangle(760,560, 790,560, 775,590);

    // triangle bottom left square
    fill(255,0,0);
    triangle(10,560, 40,560, 25,590);






    // shape 2
    fill(50,120,122);
    circle(200,140,90);

    fill(200,120,122);
    circle(180,140,90);

   
    // house?
    fill(250,220,222);
    rect(440,340,120,70);

    // roof
    fill(100,120,222);
    triangle(440, 340, 560, 340, 500, 170);

    //door
    fill(150,70,122);
    rect(490,380,30,30);

    // shape 5
    fill(25,20,222);
    ellipse(340,140,190,70);

    // shape 6
    fill(200,20,82);
    arc(500, 80, 90, 90, 90, PI + QUARTER_PI);

    

    

    // shape 9
    fill(25,120,222);
    ellipse(340,290,50,190);

    
}