var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	bgIMG=loadImage("bg.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 300, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 300, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	groundSprite.visible=false;

	Log1Sprite = createSprite(width/2.7,650,15);
	Log1Sprite.shapeColor=color(255);

	Log2Sprite = createSprite(width/1.7,650,15);
	Log2Sprite.shapeColor=color(255);

	Log3Sprite = createSprite(width/2.1,695,180,15);
	Log3Sprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 300 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);

	Log1 = Bodies.rectangle(width/2.7,650,15,{restitution:3, isStatic:true});
	World.add(world,Log1);  
	
	Log2 = Bodies.rectangle(width/1.7,650,15,{restitution:3, isStatic:true});
	World.add(world,Log2);  
	
	Log3 = Bodies.rectangle(width/2.1,695,180,15,{restitution:3, isStatic:true});
    World.add(world,Log3);  

	//Create a Ground
	ground = Bodies.rectangle(width/2, 680, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgIMG);
  Engine.update(engine);
 /* packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y */
  
  drawSprites();

  keyPressed();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:false});
	//World.add(world, packageBody);
	
	packageSprite.x = packageBody.position.x;
	packageSprite.y = packageBody.position.y;
	Body.setStatic(packageBody,false);

	/*packageBody.position.x = helicopterSprite.x;
	packageBody.position.y = helicopterSprite.y;*/
	

	
  }
}
