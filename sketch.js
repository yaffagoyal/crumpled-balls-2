
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(100,300,70);
	ground= new Ground(800,690,1600,20);
	dustbin= new dustBin(1300,600,200,200)
	/*box1= new dustBin(1300,670,200,20);
	box2= new dustBin(1200,630,20,100);
	box3= new dustBin(1400,630,20,100);*/
	
	Engine.run(engine);
}
	



function draw() {
  rectMode(CENTER);
  background(255);
  
  paper1.display();
  ground.display();
  dustbin.display();
  //box1.display(); 
  //box2.display();
  //box3.display();

  drawSprites();
 
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:570,y:-570});
	 }
   }




