var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "#027c68";
  fixedRect.debug = true;
  movingRect = createSprite(400, 200, 80, 50);
  movingRect.shapeColor = "#b0e892";
  movingRect.debug = true;

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";

  gameObject3 = createSprite(0, 800, 50, 50);
  gameObject3.shapeColor = "pink";
  gameObject4 = createSprite(800, 50, 50, 50);
  gameObject4.shapeColor = "white";

  gameObject3.velocityX = +5;
  gameObject3.velocityY = -5;
  gameObject4.velocityX = -5;
  gameObject4.velocityY = +5;

}

function draw() {
  background(0,0,0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "red";
  } else {
    fixedRect.shapeColor = "#027c68";
    movingRect.shapeColor = "#b0e892";
  }

  if(isTouching(movingRect, gameObject1)){
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "red";
  } else {
    gameObject1.shapeColor = "green";
    movingRect.shapeColor = "#b0e892";
  }

  bounceOff(gameObject3, gameObject4);

  drawSprites();
}
