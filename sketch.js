var fixedRect, movingRect
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 100);
  fixedRect.shapeColor = "pink"
  movingRect = createSprite(600, 200, 100, 50);
  movingRect.shapeColor = "pink"
}

function draw() {
  background(0); 
  movingRect.x = mouseX 
  movingRect.y = mouseY

  if(fixedRect.width/2 + movingRect. width/2 > movingRect.x - fixedRect.x &&
    fixedRect.width/2 + movingRect. width/2 > fixedRect.x - movingRect.x && 
    fixedRect.height/2 + movingRect. height/2 > movingRect.y - fixedRect.y &&
    fixedRect.height/2 + movingRect. height/2 > fixedRect.y - movingRect.y
    ){
    fixedRect.shapeColor = "lightblue"
    movingRect.shapeColor = "lightblue"
  }
  else{
    fixedRect.shapeColor = "pink"
    movingRect.shapeColor = "pink"
  }
  drawSprites();
  
}