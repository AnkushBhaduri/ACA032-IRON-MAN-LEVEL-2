
var bg, backgroundImg,ground;
var ironman, stones, stoneImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
 ironmanImg= loadImage("images/iron.png");
 stoneImg= loadImage("images/stone.png");
}

function setup() {
createCanvas(1000, 600);
bg = createSprite(580,300);
 ironman=createSprite(200,585,20,50);
 ironman.scale=0.4;
 ironman.addImage(ironmanImg);
 ground=createSprite(200,585,1500,100);
 ground.visible=false;
 bg.velocityY= 6;
 bg.addImage(backgroundImg);
 bg.scale =1.5;
 stonesGroup = new Group();

 
}

function draw() {

  if (bg.y >550){
    bg.y = bg.height/4;
   }
   if (ironman.y< 100){
     ironman.y=100;
   }
   if (ironman.x< 100){
    ironman.x=100;
  }
   if(keyDown("up")){
     ironman.velocityY= -10
   };
   if(keyDown("left")){
    ironman.velocityX= -8
  };
  if(keyDown("right")){
    ironman.velocityX= 8
  }
  if(keyDown("down")){
    ironman.velocityY=16
  }
  ironman.velocityY+= 0.5;

ironman.collide(ground);
generateStones ();
for (var i=0; i< (stonesGroup).length ; i++){
  var temp =(stonesGroup).get(i);
  if(temp.isTouching(ironman)){
    ironman.collide(temp)
  }
}
 
    drawSprites();
   
}

function generateStones(){
  if (frameCount%50===0){
    var stone= createSprite(1200,120,40,10);
    stone.x=random(50,450);
    stone.addImage(stoneImg);
    stone.scale=0.5;
    stone.velocityY= 5;
    stone.lifetime=250;
    stonesGroup.add(stone);
  }}