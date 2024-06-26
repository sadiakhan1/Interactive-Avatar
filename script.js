/* maybe change aother color and add more languages for "Hello, my name is Sadia."

/* VARIABLES */
let eyeWidth = 185;
let pupilWidth = 185;
let ellipseX = 170;
let eyeHeight = 30;

/* SETUP RUNS ONCE */
function setup() {
  // sets the screen size
  createCanvas(400, 400);

  // sets the background color
  background(255, 249, 226);
}

/* DRAW LOOP REPEATS */
function draw() {
  // clear the canvas
  background(255, 249, 226);

  //background
  fill('#3F5277');
  arc(170,210,290,320,0,360);

  //face
  noStroke();
  fill('#ffd0d7');
  ellipse(ellipseX, 200, 200, 250); //hijab
  fill('#C69B7E');
  ellipse(ellipseX, 200, 150, 180); //actual face

  //mouth
  fill('#a13d2d');
  angleMode(DEGREES);
  arc(170, 230, 60, 60, 0, 180);

  //earrings
  stroke(0)
  strokeWeight(0.5)
  line(98, 224, 87, 260) //left
  line(243, 220, 254, 260) //right

  //torso
  noStroke();
  fill('#800000');
  arc(170, 400, 189, 190, 180, 900);

  //hijab + neck + eyebrows
  fill('#ffd0d7');
  rectMode();
  rect(200, 300, 30, 100); //hijab
  fill('#C69B7E');
  rect(160, 287, 22, 20); //neck
  fill('#000');
  rect(120, 155, 35, 4) //left eyebrow
  rect(182, 155, 35, 4) //right eyebrow
  
  //eyes
  fill('#f9f9f9');
  stroke('Black');
  strokeWeight(0.1);

  if (mouseIsPressed) {
    fill(0);
    //left eye
    fill('#f9f9f9');
    ellipse(140, eyeWidth, 37, 30); //white part
    fill('#000000');
    ellipse(140, pupilWidth, 17, 20); //pupil
    fill('#000000');
    ellipse(138, 183, 3, 5); //shine

    ellipse(200, eyeWidth, 37, eyeHeight/4); //right
  } else {
    //left eye
    fill('#f9f9f9');
    ellipse(140, eyeWidth, 37, 30); //white part
    fill('#000000');
    ellipse(140, pupilWidth, 17, 20); //pupil
    fill('#FFFFFF');
    ellipse(138, 183, 3, 5); //shine

    //right eye
    fill('#f9f9f9');
    ellipse(200, eyeWidth, 37, 30); //white part
    fill('#000000');
    ellipse(200, pupilWidth, 17, 20); //pupil
    fill('#FFFFFF');
    ellipse(198, 183, 3, 5); //shine
  }

  //Sign your name
  textSize(15);
  fill(0); 
  text('Click the\nscreen to see\nsomething cool!', 290, 355);

  //Add a short description
  textSize(15);
  text('Me, Sadia!', 10, 20);
}