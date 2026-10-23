
let SunAlt = false;

let circleSunX = 50;
let circleSunY = 200;
let circleSunR = 125;

let chest = false;
let treasure;

let Seasons = 0;

let dropActive = false;

let snowActive = false;

function preload() {
treasure = loadImage('images/treasurechest.jpg');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER)
}

function draw() {
// Rain();
if (Seasons == 1) {
  Sun();
} else if (Seasons == 2) {
  Rain();
} else if (Seasons == 3) {
  Snow();
} else if(Seasons == 0){
  Experiences();
} 
}

function Experiences(){
background(238,75,100);
fill(255)
textSize(50)
text("Experinces",300,175)
fill(255,255,255,255)
rect(110,270,70,70)
rect(270,270,70,70)
rect(430,270,70,70)
rect(470,500,70,70)
fill(0)
text("1",145,320)
text("2",305,320)
text("3",465,320)
text("0",505,550)
fill("yellow")
text("Sun",145,250)
fill("darkGray")
text("Rain",305,250)
fill("blue")
text("Snow",465,250)
fill(255)
text("Return",500,480)
}

function Sun() {

background (119,196,254)
strokeWeight(2)
if (SunAlt == false) {
  fill(255,223,32)
  circle(50,200,250)
} 
else if (SunAlt == true) {
  fill(244,128,55);
    circle(circleSunX,circleSunY,circleSunR*2);
}
fill(0,119,190,200)
quad(0,500,0,200,600,200,600,300,)
noStroke()  
fill (255,202,75)
quad(0,500,600,300,600,600,0,600)
push()
SimpleBird(250,100,50)
SimpleBird(300,150,30)
SimpleBird(450,75,45)
pop()
if (chest == true){
  image(treasure,400,400,150,150)
} else if (Seasons !== 1){
  chest = false
}
}

function Rain() {
background(132,145,157)
stroke(1)
fill(18,47,104)
quad(0,400,0,150,600,150,600,400)
fill(38,23,15)
circle(300,900,1210)
fill(18,47,104)
circle(300,900,1200)
fill(38,23,15)
push()
noStroke()
quad(10,370,30,360,30,500,10,600)
quad(40,355,60,350,60,550,40,650)
quad(70,340,90,335,90,600,70,700)
quad(100,330,120,325,120,650,100,750)
quad(130,320,150,315,150,700,130,800)
quad(160,315,180,310,180,750,160,850)
quad(190,305,210,305,210,800,190,900)
quad(220,300,240,300,240,850,220,950)
quad(250,300,270,300,270,850,250,950)
quad(280,295,300,295,300,900,280,1000)
quad(310,300,330,300,330,850,310,950)
quad(340,300,360,300,360,850,340,950)
quad(370,305,390,305,390,800,370,900)
quad(400,305,420,310,420,750,400,850)
quad(430,315,450,315,450,800,430,800)
quad(460,320,480,325,480,750,460,750)
quad(490,325,510,335,510,700,490,700)
quad(520,340,540,350,540,650,520,650)
quad(550,355,570,360,570,600,550,600)
quad(580,365,595,375,595,550,580,550)
pop()
fill(38,23,15)
circle(300,900,1000)
push()
stroke(255,255,255)
fill(18,47,104,255)
Waves(100,200,20)
Waves(200,200,20)
Waves(300,200,20)
Waves(400,200,20)
Waves(500,200,20)
Waves(50,175,15)
Waves(150,175,15)
Waves(250,175,15)
Waves(350,175,15)
Waves(450,175,15)
Waves(550,175,15)
Waves(50,225,15)
Waves(150,225,15)
Waves(250,225,15)
Waves(350,225,15)
Waves(450,225,15)
Waves(550,225,15)
Waves(100,250,20)
Waves(200,250,20)
Waves(300,250,20)
Waves(400,250,20)
Waves(500,250,20)
pop()
if (dropActive) {
  RainDrop(dropX, dropY, dropW, dropH);
  RainDrop(dropX+30, dropY+20, dropW, dropH);
  RainDrop(dropX-30, dropY+20, dropW, dropH);
  RainDrop(dropX-15, dropY-20, dropW, dropH);
  RainDrop(dropX+15, dropY-20, dropW, dropH);
  dropY += dropSpeed;
  if (dropY > height+dropH) {
    dropActive = false;
    }
  }
}

function Snow() {
background(192,246,251)
strokeWeight(0)
fill(255,250,250)
rect(0,200,600,600)
push()
fill(135,206,250)
ellipse(250,375,400,250)
ellipse(450,375,250,200)
pop()
push()
fill(250,253,240)
circle(0,0,200)
pop()
push()
fill(250)
noStroke()
ellipse(150,90,70,50)
ellipse(170,110,70,50)
ellipse(310,90,70,50)
ellipse(330,70,70,50)
ellipse(450,80,80,50)
ellipse(470,100,80,50)
pop()
push()
fill(215,240,250)
circle(50,210,30)
circle(50,240,40)
circle(50,275,50)
fill(0)
circle(46,205,5)
circle(54,205,5)
fill('orange')
triangle(50,210,50,220,60,215)
fill(0)
circle(50,230,5)
circle(50,240,5)
circle(50,250,5)
pop()
if (snowActive) {
  SnowFlake(dropX,dropY)
  SnowFlake
  dropY += dropSpeed
  if (dropY > height) {
    snowActive = false
  }
}


}


function SimpleBird(x,y,wingspan) {
  stroke(0);
  strokeWeight(2);
  noFill();
  line(x-wingspan,y-wingspan*0.4,x,y);
  line(x,y,x+wingspan,y-wingspan * 0.4);
}

function Waves(x,y,wavelength) {
  stroke(0);
  strokeWeight(2);
  noFill();
  line(x-wavelength,y+wavelength*0.8,x,y);
  line(x,y,x+wavelength,y+wavelength*0.8);
}

function RainDrop(x,y,w,h)
 {
  fill("lightblue");
  stroke(0);
  strokeWeight(2);
  ellipse(x,y,w,h);
}

function SnowFlake(x,y) {
  fill("white");
  stroke(0);
  strokeWeight(2);
  stroke("lightblue")
  line(x-20,y-20,x+20,y+20);
  line(x+20,y-20,x-20,y+20);
  line(x,y-20,x,y+20);
  line(x-20,y,x+20,y);
}

function resetScene() {
  SunAlt = false;
  chest = false;
  dropActive = false;
  snowActive = false;
}

function mousePressed() {

  let d = dist(mouseX, mouseY, circleSunX, circleSunY);
  if (d < circleSunR) {
    SunAlt = !SunAlt;
  }

  if (Seasons == 1 &&mouseX<550&&mouseX>500&&mouseY<500&&mouseY>400) {
    chest = !chest;
  }

  if (Seasons == 2) {
    dropX = mouseX;
    dropY = mouseY;
    dropW = random(5, 10);
    dropH = random(10, 20);
    dropSpeed = random(4, 10);
    dropActive = true;
  }

  if (Seasons == 3) {
    dropX = mouseX;
    dropY = mouseY;
    dropSpeed = random(4, 10);
    snowActive = true;
  }
}

function keyPressed() {
  if (key === '1') {
    resetScene()
    Seasons = 1;
  } else if (key === '2') {
    resetScene()
    Seasons = 2;
  } else if (key === '3') {
    resetScene()
    Seasons = 3;
  } else if (key === '0') {
    resetScene()
    Seasons = 0;
  }
}
