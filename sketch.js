var garden,gardenImg,rabbit,rabbitImg
var gameState="PLAY"

function preload(){
  gardenImg=loadImage("garden.png")
  rabbitImg=loadAnimation("rabbit-jumping.pn","rabbit-standing.png")
  tigerImg=loadImage("tiger-jumping.png")
}

function setup(){
  createCanvas(600,600)
  garden=createSprite(300,300)
  garden.addImage("garden",gardenImg)
  garden.velocityY=1
  rabbit=createSprite(300,300)
  rabbit.addAnimation("rabbit",rabbitImg)
  rabbit.scale=1
  tigersGroup=new Group()
}

function draw(){
  background("black")
  if(gameState==="PLAY"){
    if(garden.y>400){
      garden.y=300
    }
  if(keyDown("left_arrow")&&rabbit.x>150){
    rabbit.x=rabbit.x-5
    rabbit.mirrorX(1)
  }
    if(keyDown("right_arrow")&&rabbit.x<450){
    rabbit.x=rabbit.x+5
      rabbit.mirrorX(-1)
  }
    if(keyDown("up_arrow")&&rabbit.y>50){
      rabbit.y=rabbit.y-5
    }
    if(keyDown("down_arrow")&&rabbit.y<520){
      rabbit.y=rabbit.y+5
    }
    spawnDoors()
    if(tigersGroup.isTouching(rabbit)){
      rabbit.destroy()
      gameState="END"
    }
  drawSprites();
     fill("red")
    textSize(15)
  text("number of doors crossed "+(rabbit.depth-2),300,450)
    
}
  if(gameState==="END"){
    fill("red")
    textSize(30)
    text("GameOver",230,250)
  }
}
function spawnDoors(){
  if(frameCount%100===0){
    var tiger=createSprite(200,-50)
    tiger.x=random(150,450)
    tiger.velocityY=1
   tiger.addImage(tigerImg)
    tiger.scale=0.2
    rabbit.depth=tiger.depth+1
    tiger.lifetime=700
    tigersGroup.add(tiger)
  }
}