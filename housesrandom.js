function setup() {
  createCanvas(400, 400);
  frameRate(1);
}

function draw() {
  background(255);

  strokeJoin(ROUND);
  strokeWeight(1);
  fill('#fffff');
  translate (200 ,250);

  let houseWidth = random(90, 220);
  let househeight = random(90, 220);
  
  rect(houseWidth/-2, househeight/-2, houseWidth, househeight);
  
  rect(houseWidth/random(-8, -20), househeight/2, houseWidth/random(2.4, 2.8), househeight/random(-2, -3));
  
  rect(houseWidth/random(-3, -4), househeight/-8, houseWidth/random(6.4, 6.8), househeight/ random(-3.8, -4.8));
  
  triangle(houseWidth/-2,househeight/-2, houseWidth/2, househeight/-2, 0, househeight*random(-0.8, -1.2));

  
  
}
