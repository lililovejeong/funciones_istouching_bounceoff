function setup() {
    createCanvas(1200,800);
    fixedRect = createSprite(400, 100, 50, 80);
    fixedRect.shapeColor = "#027c68";
    fixedRect.debug = true;
    movingRect = createSprite(400, 800, 80, 30);
    movingRect.shapeColor = "#b0e892";
    movingRect.debug = true;
  
    gameObject1 = createSprite(100, 100, 50, 50);
    gameObject1.shapeColor = "green";
    gameObject2 = createSprite(600, 100, 50, 50);
    gameObject2.shapeColor = "yellow"
  
    gameObject3 = createSprite(0, 800, 50, 50);
    gameObject3.shapeColor = "pink";
    gameObject4 = createSprite(800, 50, 50, 50);
    gameObject4.shapeColor = "white";

    movingRect.velocityY = -5;
    fixedRect.velocityY = +5;

    gameObject1.velocityX = +5;
    gameObject2.velocityX = -5;

    gameObject3.velocityX = +5;
    gameObject3.velocityY = -5;
    gameObject4.velocityX = -5;
    gameObject4.velocityY = +5;
    
  }
  
  function draw() {
    background(0,0,0);
    /*movingRect.x = World.mouseX;
    movingRect.y = World.mouseY;*/
    bounceOff(movingRect, fixedRect);
    bounceOff(gameObject1, gameObject2);
    bounceOff(gameObject3, gameObject4);
    drawSprites();
  }
  
  function bounceOff(object1, object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2){
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
    }
  
    if (object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2){
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
    }

  }


