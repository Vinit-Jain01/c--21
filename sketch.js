var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;  
 
function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,580,180,30);
    block1.shapeColor = "red";

    block2 = createSprite(300,580,180,30);
    block2.shapeColor = "green";

    block3 = createSprite(500,580,180,30);
    block3.shapeColor = "blue";

    block4 = createSprite(700,580,180,30);
    block4.shapeColor = "yellow";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "white";
    ball.velocityX = 5;
    ball.velocityY = 7;
}

function draw() {
    background(rgb(169,169,169));

    edges = createEdgeSprites();

    ball.bounceOff(edges);

    if(block2.isTouching(ball)){
        ball.shapeColor = "green";
        ball.velocityX = 4;
        ball.velocityY = 2;
        music.stop();   
    }
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "blue";
    }
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "red";
    }
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "yellow";
    }

    drawSprites();
}