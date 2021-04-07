const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var groundObj;
var treeObj, treeImg;
var boy, boyImg;
var stoneObj;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11;

function preload(){
treeImg = loadImage("Plucking mangoes/tree.png");
 boyImg = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj=new ground();

	stoneObj=new stone(235,420,30);

	mango1=new mango(600, 170, 33);
	mango2=new mango(670, 200, 34);
	mango3=new mango(710, 220, 35);
	mango4=new mango(730, 250, 35);
	mango5=new mango(780, 260, 35);
	mango6=new mango(825, 260, 35);
	mango7=new mango(855, 290, 35);
	mango8=new mango(880, 305, 35);
	mango9=new mango(940, 320, 35);
	mango10=new mango(980, 325, 36);

	attach=new sling(stone.body, {x:100, y:465});

	tree = createSprite(775, 368);
	tree.addImage(treeImg);
	tree.scale = 0.42;

	boy = createSprite(775, 368);
	boy.addImage(boyImg);
	boy.scale = 0.125;

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("golden");

  fill("black");
  textSize(18);

  detectCollision(stoneObj, mango1);
  detectCollision(stoneObj, mango2);
  detectCollision(stoneObj, mango3);
  detectCollision(stoneObj, mango4);
  detectCollision(stoneObj, mango5);
  detectCollision(stoneObj, mango6);
  detectCollision(stoneObj, mango7);
  detectCollision(stoneObj, mango8);
  detectCollision(stoneObj, mango9);
  detectCollision(stoneObj, mango10);
  
  drawSprites();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  stoneObj.display();

  }

  function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body, {x: mouseX, y: mouseY});
  }

  function mouseReleased(){
	  sling.fly();
  }

  function detectCollision(lstone, lmango){
	  mangoBodyPosition=lmango.body.position
	  stoneBodyPosition=lstone.body.position

	  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	  if(distance<=lmango.r+lstone.r){
		  Matter.Body.setStatic(lmango.body, false);
	  }
  }

function keyPressed(){

	if (keyCode === 32){
		Matter.Body.setPosition(stoneObj, {x:235, y:420})
		launcherObject.attach(stoneObj.body);
	}
}