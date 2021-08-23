var healthbar1, healthbar2, healthbar3, healthbar4, healthbar5, healthbar6, healthbar7;
var healthbar8, healthbar9, healthbar10
var otherhpbar;
var monsterhealth;
var hpbox1, hpbox2, hpbox3, hpbox4, hpbox5, hpbox6, hpbox7, hpbox8, hpbox9, hpbox10;
var monster;
var cube;
var attackbox;
var somethingattack;
var attack1;
var attack2;
var attack3;
var attack4;
var attack5;
var attack6;
var attack1image;
var attack2image;
var attack3image;
var attack1the2;
var attack1the3;
var attack1the4;
var attack3the1;
var attack4the1;
var attack4the2;
var attack5the1;
var attack6the1;
var fireball
var fireballgroup;
var otherattackgroup;
var otherhpbargroup
var attack
var attackgroup
var attackgroup1
var attackgroup2
var attackgroup3
var attackgroup1the
var monsterhealth
var gameState = 4
var health = 10;
var monsterhealth = 100;
var laserimage
var lightningimage
var rockimage

function preload(){
  
}

function setup(){
  createCanvas(displayWidth, displayHeight);
  healthbar1 = createSprite(10,10,10,10)
  healthbar2 = createSprite(10,10,10,10)
  healthbar3 = createSprite(10,10,10,10)
  healthbar4 = createSprite(10,10,10,10)
  healthbar5 = createSprite(10,10,10,10)
  healthbar6 = createSprite(10,10,10,10)
  healthbar7 = createSprite(10,10,10,10)
  healthbar8 = createSprite(10,10,10,10)
  healthbar9 = createSprite(10,10,10,10)
  healthbar10 = createSprite(10,10,10,10)
  hpbox1 = createSprite(displayWidth/2 - 45,15,10,10)
  hpbox2 = createSprite(displayWidth/2 - 35,15,10,10)
  hpbox3 = createSprite(displayWidth/2 - 25,15,10,10)
  hpbox4 = createSprite(displayWidth/2 - 15,15,10,10)
  hpbox5 = createSprite(displayWidth/2 - 5,15,10,10);
  hpbox6 = createSprite(displayWidth/2 + 5,15,10,10)
  hpbox7 = createSprite(displayWidth/2 + 15,15,10,10)
  hpbox8 = createSprite(displayWidth/2 + 25,15,10,10)
  hpbox9 = createSprite(displayWidth/2 + 35,15,10,10)
  hpbox10 = createSprite(displayWidth/2 + 45,15,10,10)
  cube = createSprite(displayWidth/2,displayHeight/2,50,50);
  monster = createSprite(displayWidth/2,100,100,100);
  otherhpbargroup = new Group()
  attackgroup1the = new Group()
  attackgroup1 = new Group()
  attackgroup2 = new Group()
  attackgroup3 = new Group()
}

function draw(){
   background("white")
   //wall
   //wall
   //wall
   //wall
   //wall
   healthbar1.x = cube.x - 45
   healthbar1.y = cube.y - 45
   healthbar2.x = cube.x - 35
   healthbar2.y = cube.y - 45
   healthbar3.x = cube.x - 25
   healthbar3.y = cube.y - 45
   healthbar4.x = cube.x - 15
   healthbar4.y = cube.y - 45
   healthbar5.x = cube.x - 5
   healthbar5.y = cube.y - 45
   healthbar6.x = cube.x + 5
   healthbar6.y = cube.y - 45
   healthbar7.x = cube.x + 15
   healthbar7.y = cube.y - 45
   healthbar8.x = cube.x + 25
   healthbar8.y = cube.y - 45
   healthbar9.x = cube.x + 35
   healthbar9.y = cube.y - 45
   healthbar10.x = cube.x + 45
   healthbar10.y = cube.y - 45
   if(frameCount%50 == 0){
    fireball = createSprite(random(50,displayHeight - 50),-10, 10, 10);
    fireball.velocityY = 10
    fireball.lifetime = 200
    attackgroup1the.add(fireball)
   }
   if(frameCount % 200 == 0){
     var thecase = Math.round(random(0,6))
     switch(thecase){
       case 1:{
         attack1the()
       }
       case 2:{
         attack2the()
       }
       case 3:{
         attack3the()
       }
       case 4:{
         attack4the()
       }
       case 5:{
         attack5the()
       }
       case 6:{
         attack6the()
       }
      }
    if(attackgroup1the.isTouching(cube)){
       health = health - 1
    }
     if(attackgroup1.isTouching(cube)){
       health = health - 1;
     }
     if(attackgroup2.isTouching(cube)){
       health = health - 2
    };
    if(attackgroup3.isTouching(cube)){
       health = health - 3
    }
   }
   if(keyDown("UP_ARROW")){
     cube.y = cube.y - 4;
   }
   if(keyDown("RIGHT_ARROW")){
     cube.x = cube.x + 4;
   }
   if(keyDown("LEFT_ARROW")){
     cube.x = cube.x - 4;
   }
   if(keyDown("DOWN_ARROW")){
     cube.y = cube.y + 4;
   }
   if(keyDown("space")){
     otherhpbar = createSprite(cube.x,cube.y,10,75)
     otherhpbar.velocityY = -10;
     otherhpbar.lifetime = 300;
     otherhpbargroup.add(otherhpbar)
   }
   if(otherhpbargroup.isTouching(monster)){
     monsterhealth = monsterhealth - 1
   }
   if(health == 10){
     healthbar1.shapeColor = "green"
     healthbar2.shapeColor = "green"
     healthbar3.shapeColor = "green"
     healthbar4.shapeColor = "green"
     healthbar5.shapeColor = "green"
     healthbar6.shapeColor = "green"
     healthbar7.shapeColor = "green"
     healthbar8.shapeColor = "green"
     healthbar9.shapeColor = "green"
     healthbar10.shapeColor = "green"
   }
   if(health == 9){
    healthbar1.shapeColor = "green"
    healthbar2.shapeColor = "green"
    healthbar3.shapeColor = "green"
    healthbar4.shapeColor = "green"
    healthbar5.shapeColor = "green"
    healthbar6.shapeColor = "green"
    healthbar7.shapeColor = "green"
    healthbar8.shapeColor = "green"
    healthbar9.shapeColor = "green"
    healthbar10.shapeColor = "gray"
   }
   if(health == 8){
    healthbar1.shapeColor = "green"
    healthbar2.shapeColor = "green"
    healthbar3.shapeColor = "green"
    healthbar4.shapeColor = "green"
    healthbar5.shapeColor = "green"
    healthbar6.shapeColor = "green"
    healthbar7.shapeColor = "green"
    healthbar8.shapeColor = "green"
    healthbar9.shapeColor = "gray"
    healthbar10.shapeColor = "gray"
   }
   if(health == 7){
    healthbar1.shapeColor = "green"
    healthbar2.shapeColor = "green"
    healthbar3.shapeColor = "green"
    healthbar4.shapeColor = "green"
    healthbar5.shapeColor = "green"
    healthbar6.shapeColor = "green"
    healthbar7.shapeColor = "green"
    healthbar8.shapeColor = "gray"
    healthbar9.shapeColor = "gray"
    healthbar10.shapeColor = "gray"
   }
   if(health == 6){
    healthbar1.shapeColor = "green"
    healthbar2.shapeColor = "green"
    healthbar3.shapeColor = "green"
    healthbar4.shapeColor = "green"
    healthbar5.shapeColor = "green"
    healthbar6.shapeColor = "green"
    healthbar7.shapeColor = "gray"
    healthbar8.shapeColor = "gray"
    healthbar9.shapeColor = "gray"
    healthbar10.shapeColor = "gray"
   }
   if(health == 5){
    healthbar1.shapeColor = "green"
    healthbar2.shapeColor = "green"
    healthbar3.shapeColor = "green"
    healthbar4.shapeColor = "green"
    healthbar5.shapeColor = "green"
    healthbar6.shapeColor = "gray"
    healthbar7.shapeColor = "gray"
    healthbar8.shapeColor = "gray"
    healthbar9.shapeColor = "gray"
    healthbar10.shapeColor = "gray"
  }
  if(health == 4){
    healthbar1.shapeColor = "yellow"
    healthbar2.shapeColor = "yellow"
    healthbar3.shapeColor = "yellow"
    healthbar4.shapeColor = "yellow"
    healthbar5.shapeColor = "gray"
    healthbar6.shapeColor = "gray"
    healthbar7.shapeColor = "gray"
    healthbar8.shapeColor = "gray"
    healthbar9.shapeColor = "gray"
    healthbar10.shapeColor = "gray"
  }
  if(health == 3){
    healthbar1.shapeColor = "yellow"
    healthbar2.shapeColor = "yellow"
    healthbar3.shapeColor = "yellow"
    healthbar4.shapeColor = "gray"
    healthbar5.shapeColor = "gray"
    healthbar6.shapeColor = "gray"
    healthbar7.shapeColor = "gray"
    healthbar8.shapeColor = "gray"
    healthbar9.shapeColor = "gray"
    healthbar10.shapeColor = "gray"
  }
  if(health == 2){
    healthbar1.shapeColor = "red"
    healthbar2.shapeColor = "red"
    healthbar3.shapeColor = "gray"
    healthbar4.shapeColor = "gray"
    healthbar5.shapeColor = "gray"
    healthbar6.shapeColor = "gray"
    healthbar7.shapeColor = "gray"
    healthbar8.shapeColor = "gray"
    healthbar9.shapeColor = "gray"
    healthbar10.shapeColor = "gray"
  }
  if(health == 1){
    healthbar1.shapeColor = "red"
    healthbar2.shapeColor = "gray"
    healthbar3.shapeColor = "gray"
    healthbar4.shapeColor = "gray"
    healthbar5.shapeColor = "gray"
    healthbar6.shapeColor = "gray"
    healthbar7.shapeColor = "gray"
    healthbar8.shapeColor = "gray"
    healthbar9.shapeColor = "gray"
    healthbar10.shapeColor = "gray"
  }
  if(health == 0){
    healthbar1.shapeColor = "gray"
    healthbar2.shapeColor = "gray"
    healthbar3.shapeColor = "gray"
    healthbar4.shapeColor = "gray"
    healthbar5.shapeColor = "gray"
    healthbar6.shapeColor = "gray"
    healthbar7.shapeColor = "gray"
    healthbar8.shapeColor = "gray"
    healthbar9.shapeColor = "gray"
    healthbar10.shapeColor = "gray"
    gameState = 5
  }
   console.log(health)
   drawSprites();
}

function attack1the(){
    attack1 = createSprite(50,-1100,250,displayHeight);
    attack1the2 = createSprite(displayWidth - 50,displayHeight + 1100,250,displayHeight);
    attack1the3 = createSprite(-1100,50,displayWidth,250);
    attack1the4 = createSprite(1100,displayHeight - 50,displayWidth,250);
    attack1.velocityY = 10
    attack1the2.velocityY = -10
    attack1the3.velocityX = 10
    attack1the4.velocityX = -10
    attack1.lifetime = 400
    attack1the2.lifetime = 400
    attack1the3.lifetime = 400
    attack1the4.lifetime = 400
    attackgroup1.add(attack1)
    attackgroup1.add(attack1the2)
    attackgroup1.add(attack1the3)
    attackgroup1.add(attack1the4)
}

function attack2the(){
     attack2 = createSprite(displayWidth/2,-50,50,50);
     attack2.velocityY = 10
     attack2.lifetime = 200
     attackgroup2.add(attack2)
}

function attack3the(){
     attack3 = createSprite(350,-500,100,1000);
     attack3the1 = createSprite(displayWidth - 350,-500,100,1000);
     attack3.velocityY = 10
     attack3the1.velocityY = 10
     attack3.lifetime = 300
     attack3the1.lifetime = 300
     attackgroup2.add(attack3)
     attackgroup2.add(attack3the1)
}

function attack4the(){
  attack4 = createSprite(displayWidth/2 + 300, -displayHeight/2,10,displayHeight)
  attack4the1 = createSprite(displayWidth/2,-displayHeight/2,10,displayHeight)
  attack4the2 = createSprite(displayWidth/2 - 300,-displayHeight/2,10,displayHeight)
  attack4.lifetime = 300
  attack4the1.lifetime = 300
  attack4the2.lifetime = 300
  attackgroup1.add(attack4)
  attackgroup1.add(attack4the1)
  attackgroup1.add(attack4the2)
}

function attack5the(){
  attack5 = createSprite(displayWidth + 25, displayHeight/2, 50, displayHeight)
  attack5the1 = createSprite(-25, displayHeight/2, 50, displayHeight)
  attack5.velocityX = - 5
  attack5the1.velocityX = 5
  attack5.lifetime = 100
  attack5the1.lifetime = 100
  attackgroup2.add(attack5)
  attackgroup2.add(attack5the1)
}

function attack6the(){
  attack6 = createSprite(cube.x, -25, 50, 50)
  attack6the1 = createSprite(displayWidth + 25, cube.y, 50, 50)
  attack6.lifetime = 400
  attack6the1.lifetime = 400
  attack6.velocityY = 10
  attack6the1.velocityX = -10
}