function setup() {
  createCanvas(400, 400);
}

//dot stats:
let dX=105;
let dY=362.5;
let dV=10;
let dS=2;

let channelState=0;
let clicked=false;
let clicTim=0;

  function draw() {
  background(200);
    clicTim--;
    push();
  var screen=color(170,150,80);
    fill(screen);
      strokeWeight(2);
  quad(20,20, 380,20, 380,300, 20,300);
  pop();
    
    //Here are the channels!
    if(channelState==1)
 {
   push();
  var greyBack=color(200,200,200);
    fill(greyBack);
      strokeWeight(2);
  quad(20,20, 380,20, 380,300, 20,300);
  pop();
push();
  //Sun
    ellipseMode(CENTER);
  noStroke();
  fill(255);
  ellipse(190, 55, 40, 40);
    
  //Horizon
  fill(88);
    strokeWeight(4);
stroke(77);
  line(20, 200, 105, 162 );
  line(130, 162 , 220, 200 );
  
  //RoadHorizon
    ellipseMode(CORNERS);
    noStroke();
  fill(165);
  ellipse(110,250, 125,155);
  
  //Buildings
  fill(88);
  strokeWeight(3);
stroke(50);
rect(30, 25, 25, 165);
    rect(68, 80, 20, 95);
    rect(153, 30, 20, 145);
  rect(190, 100, 25, 90);
  
  //Roadlines
  point(117,195);
  point(117,186);
  point(117,178);
  point(117,171);
  point(117,165);
  point(117,160);
 pop();
 }
    
    if(channelState==2)
 {
ellipseMode(CENTER);
push();
  var blackBack=color(0,0,0);
    fill(blackBack);
      strokeWeight(2);
  quad(20,20, 380,20, 380,300, 20,300);
  pop();
    //Stars
  push();
    hex('#244400');
    colorMode(RGB,360,360,360,100);
    let w=color(255,255,255);
    noFill();
    stroke(w);
    strokeWeight(2);
    beginShape(POINTS);
  vertex(40,30);
  vertex(130,40);
  vertex(60,54);
  vertex(14,30);
  vertex(160,70);
  vertex(140,110);
  vertex(50,190);
  vertex(60,114);
    endShape();
  pop();
  push();
  strokeWeight(3);
  stroke(w);
    beginShape(POINTS);
  vertex(120,40);
  vertex(180,180);
  vertex(60,30);
  vertex(14,185);
  vertex(30,180);
  vertex(185,18);
  vertex(50,30);
  vertex(185,114);
    endShape();
  pop(); 
  
  //Sun
  push();
    colorMode(RGB,100);
  strokeWeight(6);
  stroke (120,80,0);
    let a=color(255,255,0);
    fill(a);
    ellipse(190, 100, 75, 75);
  pop();
  
  //Planetoid
  push();
    colorMode(HSB,360,100,100,100);
    let b=color(170,150,80);
    fill(b);
    ellipse(100, 120, 150, 150);
  pop();
  
  //Continents
  push();
    var h= color('#244400');
    fill(h);
  quad(100,140, 110,120, 160,130, 110,60);
    quad(100,70, 60,120, 50,130, 70,80);
  triangle(60,130, 70,180, 100,180);
  pop(); 
  
    //Moon
  push();
    colorMode(RGB,255,255,255,100);
    strokeWeight(5);
  stroke (120,120,120);
    let d=color(120,120,140);
      fill(d);
    ellipse(40, 40, 30, 30);
  pop();
 }
    
    
  push();
   var boop=color(100,150,100);
    fill(boop);
      strokeWeight(1);
  ellipse(60,360, 50);
  quad (100,375, 375,375, 375,350, 100,350);
  pop();
  
    push();
  //Rectangle is a sliding volume bar
  if(overRect())
    {
      if(!mouseIsPressed)
      {dX+= dS;} 
      ellipse(dX,dY, dV,dV); 
  if(dX <= 105 || dX>=370)
  {dS *= -1;}
      
    }
    else
  {text("This is slippery volume slider- click to hold it steady!",100, 365);}
    
    //circle changes chanel
    if(overCircle())
      {
        if(clicked && clicTim<=0)
          {clicked=false;}
        text("DEW IT",40, 365);
        if(mouseIsPressed && clicked==false)
        {
          channelState++;
          clicked=true;
          clicTim=20;
        }
      }
    else
    {text("CLICK NOW!",42, 345, 20);}
  if(channelState==3)
    {channelState=0;}
    pop();
}  
function overRect()  {
  if (mouseX >= 100 && mouseX <= 
      375 && 
      mouseY >= 350 && mouseY <= 375) {
    return true;
  } else {
    return false;
  }
}

function overCircle() {
  var disX = 60 - mouseX;
  var disY = 360 - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < 25 ) {
    return true;
    
  } else {
    return false;
  }
}