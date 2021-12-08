function setup() {
  createCanvas(400, 400);
}
let tX=50;
let tY=150;
let bX=250;
let bY=350;
let xDif=(bX-tX)/2;
let yDif=(bY-tY)/2;


var direction=0;
let center=(xDif+yDif);
let centRadius=(center)/1.25;
let stickCent=(center)/4;
let stickHalf=(stickCent)/2;

//This program will re-create the Atari controler. The first two Push-Pop segments will create the base box and the circle part.
  function draw() {
  background(200);
    push();
  var box=color(0,0,0);
    fill(box);
      strokeWeight(2);
  quad(tX,tY, tX,bY, bX,bY, bX,tY);
  pop();
         push();
  var circ=color(50,50,50);
    fill(circ);
      strokeWeight(2);
  ellipse((tX+bX)/2, (tY+bY)/2, centRadius);
  pop();
    
    //This draws the joystick. The state of the joystick changes dependeing on whether the user is pressing Up, Down, Left, or Right.
       push();
    joystickPress();
  var stick=color(75,75,75);
    fill(stick);
    strokeWeight(1);

    if(direction==0)
      {ellipse((tX+bX)/2, (tY+bY)/2, stickCent);}
   else if(direction==1)//LEFT
      {rect(xDif-stickHalf*4, yDif*2.25, tY, tX);}
    else if(direction==2)//RIGHT
      {rect(xDif+stickHalf*2, yDif*2.25, tY, tX);}
    else if(direction==3)//UP
     {rect(xDif+stickHalf, yDif, tX, tY);}
    else if(direction==4)//DOWN
      {rect(xDif+stickHalf, yDif*2.5, tX, tY);}
  pop();
    
    //draws the button on the atari controler, whose color changes to match wheter it is pressed or not
    push();
    if(!buttonPress())
      {
        strokeWeight(1);
        var button=color(100,0,0);
        fill(button);
        ellipse(225, 325, 30);

      }
    else
      {
        strokeWeight(3);
        var button=color(75,0,0);
        fill(button);
        ellipse(225, 325, 30);

      }
    pop();
    
}

//tells the program if UP,DOWN,LEFT, or RIGHT are pressed, or if controler is held in the neutral position.
function joystickPress()  {
  if(keyIsPressed)
    {
  if (keyCode === LEFT_ARROW)
  {direction= 1;} 
  else if (keyCode === RIGHT_ARROW) 
  {direction= 2;}
  else if (keyCode === UP_ARROW) 
  {direction= 3;}
  else if (keyCode === DOWN_ARROW) 
  {direction= 4;}
    }
   else
   {direction= 0;}
}

//Tells code if a keyboard input is made when the joystick is neutral
function buttonPress()  {
  if(keyIsPressed && direction==0)
    {playSoundEffect();
     return true;}
   else
   {return false;}
}

//displays text whenever the button is pressed on the atari controler
function playSoundEffect()
{text('PEW!', 300,300);}