//create the bow sprite and the bow image
var bow, bowImage;

//create the arrow, arrow image and the arrow group
var arrow, arrowImage, arrowGroup;

//create the background and the background image
var background, backgroundImage;

//create the balloons and the balloon group
var red_balloon, blue_balloon, green_balloon, pink_balloon, balloonGroup;

//create the balloon images
var red_balloonImage, blue_balloonImage, green_balloonImage, pink_balloonImage;

//create the balloon groups
var redB, blueB, greenB, pinkB;

//create the score varible
var score;


function preload()

{

  //assign the bow image to the bow image varible
  bowImage = loadImage('bow.png');

  //assign the arrow image to the arrow image varible
  arrowImage = loadImage('arrow.png');

  //assign the background image to the background image varible
  backgroundImage = loadImage('background.png');

  //assign the balloon1 image to the balloon1 varible
  red_balloonImage = loadImage('red_balloon.png');

  //assign the balloon2 image to the balloon2 varible
  blue_balloonImage = loadImage('blue_balloon.png');

  //assign the balloon3 image to the balloon3 varible
  green_balloonImage = loadImage('green_balloon.png');

  //assign the balloon4 image to the balloon4 varible
  pink_balloonImage = loadImage('pink_balloon.png');

}


function setup()

{

  //create the canvas   
  createCanvas(500, 500);

  //create the background sprite and add the image to the background and scale it
  background = createSprite(0, 0, 600, 600);
  background.addImage(backgroundImage);
  background.scale = 2.5;

  //create the bow sprite and add the image and scale the bow
  bow = createSprite(480, 220, 20, 50);
  bow.addImage(bowImage);
  bow.scale = 1;

  //assign score to 0
  score = 0;

  //create all the groups
  redB = new Group();
  blueB = new Group();
  greenB = new Group();
  pinkB = new Group();
  arrowGroup = new Group();



}


function draw()

{

  //assign a velocity to the ground sprite
  background.velocityX = -3


  //make the balloons dissap when touched by a arrow
  if (arrowGroup.isTouching(redB))

  {

    redB.destroyEach();
    score = score + 1;
    arrowGroup.destroyEach();

  }

  //make the balloons dissap when touched by a arrow
  if (arrowGroup.isTouching(blueB))

  {

    blueB.destroyEach();
    score = score + 3;
    arrowGroup.destroyEach();

  }

  //make the balloons dissap when touched by a arrow
  if (arrowGroup.isTouching(greenB))

  {

    greenB.destroyEach();
    score = score + 2;
    arrowGroup.destroyEach();

  }

  //make the balloons dissap when touched by a arrow
  if (arrowGroup.isTouching(pinkB))

  {

    pinkB.destroyEach();
    score = score + 4;
    arrowGroup.destroyEach();

  }

  //assign a point to where the ground regenerates
  if (background.x < 0)

  {

    background.x = background.width / 2;

  }


  //assign the y axis of the mouse to the y axis of the bow
  bow.y = mouseY

  //if the space key is pressed the arrows are spawned
  if (keyDown('space'))

  {

    if (frameCount % 15  === 0) {

      //call the arrow function
      spawnArrow();
    }


  }

  //select a balloon image 
  var select_balloon = Math.round(random(1, 4));

  //apply it every 80 fps
  if (World.frameCount % 80 == 0)

  {

    //assign numbers to images so the computer can choose
    if (select_balloon == 1)

    {

      spawnRed_Balloon();

    } else if (select_balloon == 2)

    {

      spawnBlue_Balloon();

    } else if (select_balloon == 3)

    {

      spawnGreen_Balloon();

    } else

    {

      spawnPink_Balloon();

    }

  }

  //draw all the sprites
  drawSprites();

  //show the score
  text("Score: " + score, 425, 25);

}


//create the arrow function
function spawnArrow()

{



  //create the arrow sprite and add the arrow image to it
  arrow = createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = bow.x
  arrow.y = bow.y
  arrow.lifetime = 130;

  //scale the arrow
  arrow.scale = 0.25;

  //give the arrows velocity
  arrow.velocityX = -5;

  //add the arrows to the group
  arrowGroup.add(arrow);



}

//spawn the red balloon
function spawnRed_Balloon()

{

  //create the balloon sprite and add the image and scale it
  red_balloon = createSprite(-200, 250);
  red_balloon.addImage(red_balloonImage);
  red_balloon.scale = 0.115;

  //make the y random and give it velocity and lifetime
  red_balloon.y = Math.round(random(50, 450));
  red_balloon.velocityX = 7;
  red_balloon.lifetime = 225;

  //game adaptivity
  if (score > 0)

  {

    red_balloon.velocityX = score / 5 + 7;

  }

  //add the red balloon to the group
  redB.add(red_balloon);


}

//spawn blue balloon
function spawnBlue_Balloon()

{

  //create the balloon sprite assign the image and the scale
  blue_balloon = createSprite(-200, 250);
  blue_balloon.addImage(blue_balloonImage);
  blue_balloon.scale = 0.10;

  //assign a random y and a lifetime and a velocity
  blue_balloon.y = Math.round(random(50, 450));
  blue_balloon.lifetime = 225;
  blue_balloon.velocityX = 7;

  //game adaptivity
  if (score > 0)

  {

    blue_balloon.velocityX = score / 5 + 7;

  }

  //add the blue balloon to the group
  blueB = new Group();
  blueB.add(blue_balloon);


}

//spawn the green balloon
function spawnGreen_Balloon()

{

  //create the balloon sprite add the image and scale it
  green_balloon = createSprite(-200, 250);
  green_balloon.addImage(green_balloonImage);
  green_balloon.scale = 0.10;

  //assign a random y and a lifetime and a velocity
  green_balloon.y = Math.round(random(50, 450));
  green_balloon.lifetime = 225;
  green_balloon.velocityX = 7;

  //game adaptivity
  if (score > 0)

  {

    green_balloon.velocityX = score / 5 + 7;

  }

  //add the green balloon to the group
  greenB = new Group();
  greenB.add(green_balloon);

}

//spawn the pink balloon
function spawnPink_Balloon()

{
  //create the balloon sprite assign image and give scale
  pink_balloon = createSprite(-200, 250);
  pink_balloon.addImage(pink_balloonImage);
  pink_balloon.scale = 0.75;

  //assign random y lifetime and velocity
  pink_balloon.y = Math.round(random(50, 450));
  pink_balloon.lifetime = 225;
  pink_balloon.velocityX = 7;

  //game adaptivity
  if (score > 0)

  {

    pink_balloon.velocityX = score / 5 + 7;

  }

  //add the blue balloon to the group
  pinkB = new Group();
  pinkB.add(pink_balloon);

}