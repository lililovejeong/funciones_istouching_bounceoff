var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "#027c68";
  fixedRect.debug = true;
  movingRect = createSprite(400, 200, 80, 50);
  movingRect.shapeColor = "#b0e892";
  movingRect.debug = true;

  gameObject4 = createSprite(800, 50, 50, 50);
  gameObject4.shapeColor = "white";

}

function draw() {
  background(0,0,0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //bounceOff()

  if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "red";
  } else {
    fixedRect.shapeColor = "#027c68";
    movingRect.shapeColor = "#b0e892";
  }

  if(isTouching(movingRect, gameObject4)){
    movingRect.shapeColor = "blue";
    gameObject4.shapeColor = "red";
  } else {
    gameObject4.shapeColor = "white";
    movingRect.shapeColor = "#b0e892";
  }

  drawSprites();
}

function bounceOff(){

}

function isTouching(object1, object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2
  ){
    /*movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";*/
    return true;
  } else {
    /*fixedRect.shapeColor = "#027c68";
    movingRect.shapeColor = "#b0e892";*/
    return false;
  }
}