
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall2,wall3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	
	wall1= new Dustbin(1000,375,200,20)
	wall2= new Dustbin(900,315,20,100)
	wall3= new Dustbin(1100,315,20,100)

	ground = new Ground(600,height,1200,20)

	paper = new Paper();




	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine)

  wall1.display()
  wall2.display()
  wall3.display()
  ground.display()
  paper.display()

  
  drawSprites();
 
}



