var oceanImg, ocean;
var coinImg, coin, coinGroup;
var climberImg, climber, climbersGroup;
var frog, frogImg;
var gameState = "play"
var score = 0;


function preload()
{
  oceanImg = loadImage("water.jpg");
  coinImg = loadImage("coin.png");
  climberImg = loadImage("seaweed.png");
  frogImg = loadImage("frog.png");
  
}


function setup(){
  createCanvas(580,450);
  ocean = createSprite(300,300,50,50);
  ocean.addImage("ocean",oceanImg);
  ocean.velocityY=2;

  frog = createSprite(200,200,50,50);
  frog.scale = 0.1;
  frog.addImage("frog",frogImg); 

//create coin group and climber group
coinGroup =new Group();
climbersGroup = new Group();

}

function draw()
{
  
  background(0);
 
 
  if (gameState === "play")
 {
   if(coinGroup.isTouching(frog))    
    {
      coinGroup.destroyEach();
      score=score+1;
    }
     
  
  if(ocean.y>300)
   {
    ocean.y=150;
   }
     if(keyDown("UP_ARROW"))
   {
     frog.y=frog.y-5;
    
   }
     if(keyDown("LEFT_ARROW"))
   {
     frog.x=frog.x-5;
   }
  
    if(keyDown("RIGHT_ARROW"))
   {
     frog.x=frog.x+5;
   }
   
   
    frog.velocityY=1;
    frog.velocityX=1;
 }
if (frog.y==450)
{
  text("Game Over",200,200);
  ocean.setVelocity(0,0);
  frog.lifetime=0;
  gameState="end";
}
 
  if (gameState === "end")
  {
    
    
    coinGroup.destroyEach();
    climbersGroup.destroyEach();
    
     
  }  

  spawnCoin();
  drawSprites();
  fill("yellow");
  stroke("blue");
  

  textSize(20);
  text("Score: "+score,150,30);
}


// create the coin and climber in the same function
function spawnCoin()
 {
  
  if (frameCount % 280 === 0)
   {
    //make the x position of the coin and climber the same
    climber=createSprite(Math.round(random(10,550)),80,200,50);
    climber.addImage("climber",climberImg);
    climber.setVelocity(0,2);
    
    climber.scale = 0.5;
    climber.lifetime = 160;
    climbersGroup.add(climber);
    
    coin = createSprite(climber.x,20,20,20);
    coin.addImage("coin",coinImg);
    coin.setVelocity(0,2);
    
    coin.scale = 0.1;
    
    coin.lifetime = 160;
    
    coinGroup.add(coin);
    
  }
  
}