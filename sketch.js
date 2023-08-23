var canvas;
var score =0;
var rocket, rocketImg;
var rockGroup, rockGroupImg;
var bullet, bulletImg;
var shootGroup, shootGroupImg;
var heading;

var life = 3;
var score = 0;
var gameState = 1;



function preload(){
  rocketImg = loadImage("./assets/Rocket.png");
  rockGroupImg = loadImage("./assets/Rock.png");
  shootGroupImg = loadImage("./assets/Shoot.png");
  bulletImg = loadImage("./assets/Shoot.png");
}


function setup() {
  canvas = createCanvas(800,800);
  background("#BDA297");
  // Create Rocket 
  rocket = createSprite(100, height/2, 50,50);
  rocket.addImage(rocketImg);
  rocket.scale=0.5;
}


function draw() {
  if(gameState===1){
    if (frameCount % 100 === 0) {
      drawrockGroup();
    }

    if(keyDown("space")){
      shootBullet();
    }
}

// Rock Create 
function drawrockGroup(){
  rockGroup = createSprite(800,random(20,780),40,40);
  rockGroup.addImage(rockGroupImg);
  rockGroup.scale = 0.1;
  rockGroup.velocityX = -8;
  rockGroup.lifetime = 400;
}


// Bullet Create 
function shootBullet(){
  bullet= createSprite(150, width/2, 50,20);
  bullet.y= rocket.y-20;
  bullet.addImage(bulletImg);
  bullet.scale=0.06;
  bullet.velocityX= 7;         
}


drawSprites();
}