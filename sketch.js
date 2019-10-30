var movingRect,fixedRect;
function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(600,400,50,80);
  movingRect.shapeColor='green';
  movingRect.debug=true;
  fixedRect=createSprite(400,200,50,80);
  fixedRect.shapeColor='green';
  fixedRect.debug=true;
}

function draw() {
  background(0,0,0);
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2
  && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2)
 {
  movingRect.shapeColor='red';
  fixedRect.shapeColor='red';
 }
else
{
  fixedRect.shapeColor='green';
  movingRect.shapeColor='green';
}
  
  drawSprites();
}