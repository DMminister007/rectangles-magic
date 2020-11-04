var fixed;
var moving;

function setup() {
  var canvas = createCanvas(1200,800);
  fixed = createSprite(400,200,80,80); 
  fixed.shapeColor = "green"; 
  fixed.debug = true; 
  moving = createSprite(300,200,100,70); 
  moving.shapeColor = "green"; 
  moving.debug = true;

}

function draw() {
  background("black"); 
  moving.x = mouseX; 
  moving.y = mouseY; 
  
  if(moving.x-fixed.x < moving.width/2 + fixed.width/2
    && fixed.x-moving.x < moving.width/2 + fixed.width/2  
    && moving.y-fixed.y < moving.height/2 + fixed.height/2
    && fixed.y-moving.y < moving.height/2 + fixed.height/2 ){ 
    fixed.shapeColor = "red";
    moving.shapeColor = "red"; 
  }
  else{ 
    fixed.shapeColor = "green"; 
    moving.shapeColor = "green"; 
  } 
  drawSprites();
}