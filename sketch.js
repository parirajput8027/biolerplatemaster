var car1,car2,car3,car4;
var wall1,wall2,wall3,wall4;



function setup()
 {
  createCanvas(800,400);
  car1 = createSprite(100,98, 50, 50);
  car2 = createSprite(100,188,50,50);
  car3 = createSprite(100,288,50,50);
  car4 = createSprite(100,388,50,50);
  wall1 = createSprite(700,100,50,700);
 

  
}

function draw() 
{
  background("lightblue"); 
  wall1.shapeColor="black" 
  car1.velocityX= 2
  car2.velocityX= 2
  car3.velocityX= 2
  car4.velocityX= 2

  if(car1.isTouching(wall1)||car2.isTouching(wall1)||car3.isTouching(wall1)||car4.isTouching(wall1))
  {
    car1.shapeColor="red"
    car2.shapeColor="blue"
    car3.shapeColor="green"
    car4.shapeColor="red"

    car1.velocityX=0
    car2.velocityX=0
    car3.velocityX=0
    car4.velocityX=0
  }

  
  drawSprites();
}