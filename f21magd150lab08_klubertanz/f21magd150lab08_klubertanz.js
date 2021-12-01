
var ben = []; 
let tom;
let yes;
var maxImages;
var imageIndex;
var benDanceTimer;
var font;
var messageChange;
var danceText;

var pdf;

function preload(){
  // Loading the images into the array
 var count=0;
  for (let lcv = 1; lcv < 6; lcv++) {
    ben[count] = loadImage("sharky" + lcv + ".gif");

	count++;
  }
  tom=loadImage("palp.png");
  yes=loadImage("yEss1.png");
  messageChange=true;
  danceText=loadStrings("SNP.txt");
}
function setup() {
  createCanvas(1300,700);
  maxImages = 5;
  imageIndex = 0;
  benDanceTimer=0;
   print(imageIndex);
tom.mask(yes);
    pdf = createPDF();

    pdf.beginRecord();

 }
function mousePressed(){
          pdf.save();
}
function draw() {
  // Prints Palp in the background, and a dancing Sharky in the foreground
  benDanceTimer++;
  image(tom,0,0,1200,601);


  //print(ben[imageIndex]);
  image(ben[imageIndex], 0, 0, 512, 512);
  if(benDanceTimer%15==0)
  {imageIndex++;}
  imageIndex=imageIndex%5;
    
	fill(255,0,255);
//Sharky And Palp Text is loaded here
  textFont('Arial');
  push();
  textSize(100);
  text("SHARKY AND PALP:", 50,75);
  pop();
  //Subtitle text loaded here
  push();
    textSize(75);
  text("Team Bros of the Sea!", 75,130);
  pop();
  push();
    textAlign(LEFT);
  textFont('Comic Sans');
  textSize(50);
  fill(0,200,200);
  //Holding a key down animates the movie text!
  if(benDanceTimer%15==0 && keyIsPressed)
  {messageChange=!messageChange;}
	if(messageChange)
  {text("Coming ", 0, 475);
text("4/5/2018",0,575)}
  else
  {text("To Fort Sharky", 850, 475);
   text("Near You!",900,575)}
	pop();

for (let i = 0; i < 3; ++i) {
    text(danceText[i], 10, 300 + (20 + 15) * i);
  }
}

