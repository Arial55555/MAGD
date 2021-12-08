let cam;
let panned;
let panned2;

var font;
let img;

let walls;
let cardPool;
var RANDOMAT;
function preload() {
  walls = loadImage('walls.jpg');
  img = loadImage('https://st2.depositphotos.com/4397063/9010/v/950/depositphotos_90104724-stock-illustration-compas-single-1-2.jpg');
cardPool = loadTable('Water Monsters.csv', 'csv', 'header');
font=loadFont('8bitoperator.ttf');
}

function setup() {
  createCanvas(710, 400, WEBGL);
  cam = createCamera();
  left=true;
  right=false;
  center=true;
RANDOMAT=0;
}

function draw() {
  background(250);

//A Compas is placed in the center of the area for user navigation
image(img, 0, 50, 100,100);
  
  
  translate(-240, -100, 0);
  normalMaterial();
    texture(walls);

  let dirX = mouseX - width / 2;
  let dirY = mouseY - height / 2;
    directionalLight(250, 250, 250, -dirX, -dirY, 1);

      ambientLight(175, 60, 60);


  


  //Building1
  translate(130, 0, 0);
  push();
  rotateX(1)
  box(70, 200, 70);
  pop();
  // Cylinder Smokestack
  translate(0, -5, 60);
  push();
  rotateZ(-0.1);
  rotateX(-.5);
  rotateY(0.1);
  cylinder(30, 100);
  pop();
  
//Building2
  translate(140, 5, -60);
  push();
  rotateX(1)
  box(70, 200, 70);
  pop();
  // Cylinder Smokestack
  translate(0, -5, 60);
  push();
  rotateZ(-0.1);
  rotateX(-.5);
  rotateY(0.1);
  cylinder(30, 100);
  pop();
  
  //Building3
  translate(140, 5, -60);
  push();
  rotateX(1)
  box(70, 200, 70);
  pop();
// Cylinder Smokestack
  translate(0, -5, 60);
  push();
  rotateZ(-0.1);
  rotateX(-.5);
  rotateY(0.1);
  cylinder(30, 100);
  pop();

// Cone Structure
  translate(-375, 125, 70);
  push();
  rotateZ(0);
  rotateX(-10);
  rotateY(0);
  cone(70, 70);
  pop();
  
  // Cone Structure2
  translate(450,0,0);
  push();
  rotateZ(0);
  rotateX(-10);
  rotateY(0);
  cone(70, 70);
  pop();
  
  //Congratulations.
  //Yugioh was the only CSV I had on me.
  //It was for a statistics class. Don't ask why.
  textFont(font);
  fill(255,0,255);

if(center)
{
  push();
  textSize(10);
    textAlign(CENTER);
  text(cardPool.getString(RANDOMAT,0), -225,0);
  print(cardPool.getString(RANDOMAT,0));
  pop();
}
else if(left)
  {
  push();
  textSize(10);
    textAlign(LEFT);
  text(cardPool.getString(RANDOMAT,0), 0,-50);
  print(cardPool.getString(RANDOMAT,0));
  pop();
  }
  else if(right)
  {
  push();
  textSize(10);
  textAlign(RIGHT);
  text(cardPool.getString(RANDOMAT,0), -400,-50);
  print(cardPool.getString(RANDOMAT,0));
  pop();
  }
  
}

//Clicking allows the viewer to look left and right.
//When one hits the edge in one direction, the rotation reverses direction.
//The function checks if the user is currently moving left or right
//to determine which direction to continue going in when in the center.
function mouseClicked()
{
	if(center)
	{
		if(left)
		{cam.pan(-0.5);
		right=false;}
		if (right)
		{cam.pan(0.5);
		left=false;}
		center=false;
	}
	else if(left)
	{
		cam.pan(0.5);
		right=true;
		center=true;
		left=false;
	}
	else if(right)
	{
		cam.pan(-0.5);
		right=false;
		center=true;
		left=true;
	} 
	//Also, clicking slects a random card name from the list of Water Monsters.
	RANDOMAT=random(cardPool.getRowCount());
	RANDOMAT=floor(RANDOMAT);
	print(RANDOMAT);
	
}
