const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2, 50, 400, 20);

	bobObject1 = new Bob(width/2-80, 325);
	bobObject2 = new Bob(width/2-40, 325);
	bobObject3 = new Bob(width/2, 325);
	bobObject4 = new Bob(width/2+40, 325);
	bobObject5 = new Bob(width/2+80, 325);

	rope1 = new Rope(bobObject1.body, {x:width/2-80, y:60})
	rope2 = new Rope(bobObject2.body, {x:width/2-40, y:60})
	rope3 = new Rope(bobObject3.body, {x:width/2, y:60})
	rope4 = new Rope(bobObject4.body, {x:width/2+40, y:60})
	rope5 = new Rope(bobObject5.body, {x:width/2+80, y:60})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
	
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	roof.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === 32){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-30,y:-30});
	}
}


