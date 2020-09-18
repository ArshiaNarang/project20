var car,wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed=random(55,99);
  weight=random(400,1500);

  car=createSprite(50,200,20,20);
  car.velocityX = speed;

  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor="brown";
}

function draw() {
  background(0,0,0);  
 
  if(wall.x-car.x<wall.width/2+car.width/2){
    car.velocityX=0;
  
     var deformation=0.5*weight*speed*speed/22500

      if(deformation<100){
      car.shapeColor="green";
      }
if(deformation >= 100 && deformation <=180){
   car.shapeColor="yellow";
  }

  if(deformation > 180){
    car.shapeColor="red";
  }
}

    drawSprites();
  
  }
  
