  const Engine = Matter.Engine;
  const World= Matter.World;
  const Bodies = Matter.Bodies;
  const Constraint = Matter.Constraint;

var rectangle1,rectangle2,rectangle3;
var Unirect;
var bob1,rope1;
var ground,covid;
var covid2 , covid3 , covid4;
var score=0;
var fire ,water;
var waterImg ,fireImg,covidImg;
function preload() {
 waterImg=loadImage("Sprites/water.png");
 fireImg=loadImage("Sprites/fire.png");
 covidImg=loadImage("Sprites/covid.png");
}

function setup() {
  createCanvas(1200,1200);
  engine = Engine.create();
  world = engine.world;

  rectangle1 =new Rectangle(425,411,20,230);
  rectangle2 =new Rectangle(480,400,230,20);
  rectangle3 =new Rectangle(590,459,20,140);
  Unirect =createSprite(595,390,5,65);

  bob1 = new Bob(250,50,20);
  rope1 = new Rope(bob1.body,{x:250, y:50});

  covid =new Demon(680,520,20,20);
  covid2 =new Demon(595,360,20,20);
  covid3 =new Demon(425,284,20,20);

  ground = createSprite(600,540,1200,20);
  ground.shapeColor ="brown";

  fire = createSprite(840,445,120,170);
  fire.addImage(fireImg);
  fire.scale=0.25;

  water = createSprite(1100,495,120,170);
  water.addImage(waterImg);
  water.scale=0.5;
}

function draw() {
  background("black"); 
  fill("white");
  text("Score:"+score,width-300,50);

   

  Engine.update(engine);
  drawSprites();

rectangle1.display();
rectangle2.display();
rectangle3.display();
bob1.display();
rope1.display();
covid.display();
covid2.display();
covid3.display();
}
function mouseDragged(){
  //  if (gameState!=="launched"){
        Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
  //  }
}
function mouseReleased(){
  rope1.fly();
}
function keyPressed() {
  if(keyCode === 32) {
      rope1.attach(this.bob1);
  }
}