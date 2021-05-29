const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,boyAnimation,boyAnimation1,boy,platform,snowflack;


function preload(){
   backgroundImg=loadImage("snow2.jpg");
   boyAnimation=loadAnimation("download1.png","download1.png","download2.png","download2.png");
   


}

function setup() {
  var canvas =createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  platform = new Ground(800, 400, 1600, 20);

  boy=createSprite(400, 300, 50, 50);
  boy.addAnimation('standing',boyAnimation);
  boy.scale=0.5;

  snowflack=new SnowFlack(Math.round(random(1,800)),10,20,20);

  
}
  


function draw() {
  background(backgroundImg);
  platform.display();
  snowflack.display();
  
  

  drawSprites();
}