var wall,car;
var speed,weight;

function setup() {
  createCanvas(1350,400);
  speed=random(55,90);
  weight=random(400,1350);
  wall = createSprite(1320, 200, 60, height/2);
  wall.shapeColor="blue";
  car= createSprite(50,200,50,50);
  car.shapeColor="white";
  car.velocityX=speed;

}

function draw() {
  background("black");  
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/2250;
if(deformation >180){
car.shapeColor = color(255,0,0);
}
if(deformation<180 && deformation>100){
  car.shapeColor = color(230,230,0);
}



if(deformation<100){
car.shapeColor = color(0,255,0);

}

  }
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/2250;
if(deformation <10){
car.shapeColor = color(255,0,0);
}
if(deformation<180 && deformation>100){
  car.shapeColor = color(230,230,0);
}



if(deformation<100){
car.shapeColor = color(0,255,0);

}

  }
  
  drawSprites();
}
