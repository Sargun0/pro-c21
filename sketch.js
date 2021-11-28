var START=0;
var PRELOAD=1;
var PLAY=2;
var PAUSE=3
var END=4;
var gameState=START;
var canvas;
var background,frameImg;
var start_button,start_buttomImg;
var exit_button,exit_buttomImg;
var settings_button,settings_buttomImg;
var block1,block2,block3,block4,block5,block6,block7;
var ball,playerPaddle,edges;
var music;

function preload(){
    // load sound here
  frameImg=loadImage("Images/start background.jpg");
  start_buttonImg=loadImage("Images/start button.png");
  exit_buttonImg=loadImage("Images/quit button.png");
  settings_buttonImg=loadImage("Images/settings_button.png");
  music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    frame=createSprite(400,300);
    frame.addImage(frameImg);
    frame.scale=0.38;
  
    start_button=createSprite(400,300);
    start_button.addImage(start_buttonImg);
    start_button.scale=0.5
  
    settings_button=createSprite(398,400);
    settings_button.addImage(settings_buttonImg);
    settings_button.scale=0.41;
  
    exit_button=createSprite(397,500);
    exit_button.addImage(exit_buttonImg);
    exit_button.scale=0.41

    playerPaddle = createSprite(400,580,190,30);
    playerPaddle.shapeColor = "blue";
    playerPaddle.visible=false;
  
    block1 = createSprite(100,200,60,60);
    block1.shapeColor = "blue";
    //block1.visible=false;
      
    block2 = createSprite(210,200,60,60);
    block2.shapeColor = "yellow";
    //block2.visible=false;
  
    block3 = createSprite(310,200,60,60);
    block3.shapeColor = "red";
    //block3.visible=false;

    block4 = createSprite(410,200,60,60);
    block4.shapeColor = "green";
    //block4.visible=false;
  
    block5 = createSprite(510,200,60,60);
    block5.shapeColor = "pink";
    //block5.visible=false;
  
    block6 = createSprite(610,200,60,60);
    block6.shapeColor = "orange";
    //block6.visible=false;
  
    block7 = createSprite(710,200,60,60);
    block7.shapeColor = "brown";
    //block7.visible=false;
  

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.visible=false;
    //write code to add velocityX and velocityY

}

function draw() {
    background("white");
    if(gameState==START){
      if(mousePressedOver(start_button)){
        gameState=PLAY;
        ball.velocityX=3;
        ball.velocityY=3;
        start_button.visible=false;
        settings_button.visible=false;
        exit_button.visible=false;
        ball.visible=true;
        playerPaddle.visible=true;
      }
      if(mousePressedOver(settings_button)){
        start_button.visible=false;
        settings_button.visible=false;
        exit_button.visible=false;
      }
      if(mousePressedOver(exit_button)){
        frame.visible=false;
        start_button.visible=false;
        settings_button.visible=false;
        exit_button.visible=false;
      }
      
    }
    if(gameState==PLAY){
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    playerPaddle.x=mouseX;
    
    //write code to bounce off ball from the block1 
    if(playerPaddle.isTouching(ball) && playerPaddle.shapeColor==blue && ball.bounceOff(playerPaddle)){
        ball.shapeColor = "blue";
        music.play();
    }if(playerPaddle.isTouching(ball) && playerPaddle.shapeColor==yellow){
        ball.shapeColor = "yellow";
        music.play();
    }if(playerPaddle.isTouching(ball) && playerPaddle.shapeColor==red){
        ball.shapeColor = "red";
        music.play();
    }
      
      
      
    }
    drawSprites();
    textSize(25);
    fill("white");
    text("LEVEL SELECT",380,40);
    textSize(60);
    fill("white");
    text("1   2   3   4   5   6   7   8   9  ",45,150);
    textSize(25);
    fill("white");
    text("BALL COLOUR",394,400);
    textSize(25);
    fill("white");
    text("PLAYER PADDLE COLOUR",390,500);
    
    
}
