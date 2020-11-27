
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper1,bucket1;

function preload(){
	dustbin=loadImage("dustbingreen.png")
	paperimg=loadImage("paper.png")
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	paper1=new Paper(50,650)
	

	bucket=createSprite(440,630,10,10)
	bucket.addImage(dustbin)
	bucket.scale=0.3
	ground = new Ground(400,690,800,20);
	Engine.run(engine);

	r=new Ground(475,630,10,111)
	a=new Ground(400,630,10,111)
  
}


function draw() {

  background(255);


  r.display()
  a.display()
  paper1.display()
  ground.display()

  
  drawSprites()

 
}



function keyPressed() {
	if(keyCode===UP_ARROW){
		console.log("hello")
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:150,y:-100})
		
		

	}

}