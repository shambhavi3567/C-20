var fixedRect,movingRect;


function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="blue"
  fixedRect.debug=true
  movingRect=createSprite(400,200,80,30)
  movingRect.shapeColor="pink"
  movingRect.debug=true
}

function draw() {
  background(0);
  movingRect.x=mouseX
  movingRect.y=mouseY  
  console.log(movingRect.x-fixedRect.x)

if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
  fixedRect.shapeColor="green"
  movingRect.shapeColor="green"
}
else{
  fixedRect.shapeColor="blue"
  movingRect.shapeColor="pink"
}


  drawSprites();
}
