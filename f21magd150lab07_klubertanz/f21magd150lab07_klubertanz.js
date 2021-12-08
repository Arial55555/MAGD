//commented sections refering to leaf1, leaf2, and/or leaf3 are old code used for testing before the loops were implemented
  /*let leaf1;
  let leaf2;
  let leaf3;*/
  let leafAray=[];
  let leafPos=2;
function setup() {
  background(255);
  createCanvas(800, 600);
  for (var lcv=0; lcv<100; lcv++)
    {
      leafAray[lcv]=new leaf();
    }
  /*leaf1=new leaf();
  leaf2=new leaf();
  leaf3=new leaf(); 
  leafAray[0]=leaf1;
  leafAray[1]=leaf2;
  leafAray[2]=leaf3;*/
}

class leaf
  {
    constructor()
    {
    var centerX, centerY;

    this.centerX=random(-80,width);
    this.centerY=random(-170,height);
    }

//moves leaves with arrow keys
joystickPress()  {
  if(keyIsPressed)
    {
  if (keyCode === LEFT_ARROW)
  {this.centerX--;}
  else if (keyCode === RIGHT_ARROW) 
  {this.centerX++;}
  else if (keyCode === UP_ARROW) 
  {this.centerY--;}
  else if (keyCode === DOWN_ARROW) 
  {this.centerY++;}
   }
  }
  
draw(){
  
  rectMode(CENTER);
  fill(255,0,0);
  
  beginShape();
  //leaf drawing!! Start with the left half
  vertex(this.centerX,this.centerY);
  vertex(this.centerX-20,this.centerY-40);
  vertex(this.centerX-40,this.centerY-30);
  vertex(this.centerX-30,this.centerY-80);
  vertex(this.centerX-60,this.centerY-70);
  vertex(this.centerX-60,this.centerY-90);
  vertex(this.centerX-80,this.centerY-80);
  vertex(this.centerX-70,this.centerY-100);
  vertex(this.centerX-40,this.centerY-130);
  vertex(this.centerX-50,this.centerY-140);
  //leaf stem
  vertex(this.centerX,this.centerY-140);
  vertex(this.centerX,this.centerY-170);
  vertex(this.centerX,this.centerY-140);
 //the same but inverted to create the right half of the leaf
  vertex(this.centerX+50,this.centerY-140);
    vertex(this.centerX+40,this.centerY-130);
  vertex(this.centerX+70,this.centerY-100);
  vertex(this.centerX+80,this.centerY-80);
  vertex(this.centerX+60,this.centerY-90);
  vertex(this.centerX+60,this.centerY-70);
  vertex(this.centerX+30,this.centerY-80);
  vertex(this.centerX+40,this.centerY-30);
  vertex(this.centerX+20,this.centerY-40);
  vertex(this.centerX,this.centerY);
  endShape();

  //correctoinal code allows for leaf looping
  if(this.centerX > width+80)
      {this.centerX=-80;}
  if(this.centerY>height+170)
      {this.centerY=0;}

  if(this.centerX < -80)
      {this.centerX=width+80;}
  if(this.centerY < -170)
      {this.centerY=height+170;}
  
  //this.centerX=this.centerX%width;
  //this.centerY=this.centerY%height;

  }
}
//all leaves are drawn, but only select leaves can be controled at a time, as determined by the user's mouse (see mouseClicked bellow)
function draw(){
  background(255);
  for (var lcv=0; lcv<100; lcv++)
    {
      if(lcv%leafPos==0)
        {
      leafAray[lcv].joystickPress();
      leafAray[lcv].draw();
        }
    }
  for (var lcv=0; lcv<100; lcv++)
    {leafAray[lcv].draw();}
  
  /*
  if(leafPos==0)
    {leaf1.joystickPress();}
  if(leafPos==1)
    {leaf2.joystickPress();}
  if(leafPos==2)
    {leaf3.joystickPress();}
    leaf1.draw();
    leaf2.draw();
    leaf3.draw();*/
}
//clicking changes which leaves are able to move with the arrow keys.
//also, the code is designed so that there is NO case where the user can:
	//move all leaves simultaneously or
	//has no control over any of the leaves
//this is done using the prime number 13 assuring nothing is easilly divisible
//also, the leafPos counter begins at/resets to 2 for similar reasons
function mouseClicked(){
 leafPos++;
  if(leafPos>=13)
    {leafPos=2;}
  print(leafPos);
}
