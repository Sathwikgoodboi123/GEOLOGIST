
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer;
var stone;
var rubber;
var iron;
var sand1;
var sand2;
var sand3;
var sand4;
var sand5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Groud(400,height,800,10);
    hammer = new Hammer(400,350,150,50);
	stone = new Stone(200,350,100,100);
	rubber = new Rubber(500,350,100,100);
	iron = new Iron(100,250,100,50);
	sand1 = new Sand(400,350,10,10);
	sand2 = new Sand(400,355,10,10);
	sand3 = new Sand(400,345,10,10);
	sand4 = new Sand(400,340,10,10);
	sand5 = new Sand(400,360,10,10);
	Engine.run(engine);
  
}

function draw() {
  background(0);
  rectMode(CENTER);
  background(0);
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  iron.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  drawSprites();
 
}



