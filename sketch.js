
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var SurvivalTime,score
var ground  


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
    ground.x = ground.width /2;
  FoodGroup=new Group();
  obstacleGroup=new Group();
  console.log(ground.x);
  monkey.collide(ground);
var SurvivalTime=0;
  
}


function draw() {
  background("lightblue");
  if(ground.x<0){
      ground.x = ground.width /2;
  }
  Food();
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  obstacles();
  stroke("white");
  textSize(20);
  fill("white"); 
  text("Score: "+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  SurvivalTime=Math.ceil(frameCount/frameRate());
  text("SurvivalTime:"+ SurvivalTime,100,50);


drawSprites();
  
}
function Food(){
    if(frameCount %80===0){
    banana=createSprite(50,100,10,10);
    banana.addImage(bananaImage);
    banana.y=Math.round(random(120,200))
    banana.lifetime=200;
      banana.scale=0.1
      banana.velocityX=-3;
    FoodGroup.add(banana);
    
  }
}
  function obstacles(){
    if(frameCount%300===0){
    obstacle=createSprite(130 ,330  ,10,40)
      
    obstacle.addImage(obstacleImage);
      obstacle.scale=0.1;
      obstacle.lifetime=100;
      obstacleGroup.add(obstacle);
    
  }
  
}
  
  

  










