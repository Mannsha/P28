
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree, ground, stone, boy;
var boyImg;

var mango1, mango2, mango3;

function preload()
{
	boyImg = loadImage("Plucking+mangoes2/images/boy.png");
	
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(350,200)

	ground = new Ground(400,600,800,50)
	//Create the Bodies Here.

	boy = createSprite(200,600,20,70)
	boy.addImage(boyImg)
	boy.scale = 0.15

	stone = new Stone(100,490)
	mango1 = new Mango(500,500)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  tree.display()
  ground.display()

  drawSprites();
  stone.display()
  mango1.display()

 
}



