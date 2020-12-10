const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, line1, line2, line3;


function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = new Ball(200,50,30);

	ground = new Ground(400,680,800,20)

	line1 = new Line(600,630,10,50)
	line2 = new Line(700,630,10,50)
	line3 = new Line(650,650,100,10)

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
  
	ball.display();
	ground.display("pink");

	line1.display();
	line2.display();
	line3.display();

	drawSprites();
 
}

function keyPressed() {

	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})

	}
}

