
// Creating Space with Moon and Stars using Loops


let moonX = 550;
let moonY = 30;
let moonSize = 30;
let clicks = 0;


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0,0,30);
  push();
  drawStars();
  pop();
  // Earth Water
  fill(0,150,200);
  circle(100,650,500)
  push();
  // Used to make the grass on earth
  fill(40,190,60);
  strokeWeight(0);
  ellipse(50,530,100,80);
  ellipse(90,530,100,100);
  ellipse(220,600,100,130);
  pop();
  // Used to make the astronaut
  fill(230,230,230);
  rect(95,390,18,45,8);
  rect(120,390,18,45,8);
  rect(90,425,25,12,5);
  rect(120,425,25,12,5);
  rect(90,340,55,60,12);
  rect(75,350,18,45,8);
  rect(145,350,18,45,8);
  circle(117, 325, 55);
  fill (0,0,120);
  circle(117, 325, 40);
  // Used to make the moon all controlled in mousepressed
  fill(200,200,200);
  circle(moonX, moonY, moonSize);
  fill(150,150,150);
  circle(moonX-moonSize*0.2,moonY-moonSize*0.15,moonSize*0.2);
  circle(moonX+moonSize*0.2,moonY+moonSize*0.1,moonSize*0.25);
  circle(moonX-moonSize*0.1,moonY+moonSize*0.25,moonSize*0.15);
  circle(moonX+moonSize*0.05,moonY-moonSize*0.3,moonSize*0.12);
}

function drawStars() {
  fill(255, 255, 200);
  noStroke();
  let y = 10;
  while (y < 600) {
    let x = 10;
    while (x < 600) {
      triangle(x,y-10,x-5,y+5,x+5,y+5);
      triangle(x,y+10,x-5,y-5,x+5,y-5);

      x = x + 40;
    }

    y = y + 40;
  }
}

function mousePressed() {
  clicks++;
  if (clicks <= 5) {
    for (let i = 1; i <= 5; i++) {
      if (clicks == i) {
        moonSize = 30 + i * 20;
        moonX = 550 - i * 70;
        moonY = 30 + i * 45;
      }
    }
  } else {
    clicks = 0;
    moonSize = 30;
    moonX = 550;
    moonY = 30;
  }
}