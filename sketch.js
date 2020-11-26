
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,paperimg;
var dustbin1,dustbin2,dustbin3,dustbin1img,dustbin2img,dustbin3img;


function preload()
{
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paper = new Paper(200,50,10,10);

	dustbin1 = new Dustbin(480,620,20,100)
	dustbin2 = new Dustbin(540,660,100,20)
	dustbin3 = new Dustbin(600,620,20,100)

	//Create the Bodies Here.
	var groundOptions={isStatic:true}
	ground=Bodies.rectangle(400,680,800,20,groundOptions);
	
	World.add (world,ground)
	console.log(ground);


	Engine.run(engine);
  
}


function draw() {
	background(0);

  rectMode(CENTER);
  Engine.update(engine);

	rectMode(CENTER);
	rect(ground.position.x,ground.position.y,800,20);
	paper.display();

	dustbin1.display();
	dustbin2.display();
	dustbin3.display();

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x : 3, y : -2.5})
	}
}