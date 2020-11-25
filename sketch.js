const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var particles = []
var plinkos = []
var divisons = []

var divisionHeight = 300
var engine, world
var ground
function setup() {
  createCanvas(480,800);
  
  engine = Engine.create()
  world = engine.world

  ground = new Ground(width/2, height, width,20)

  for(var k =0; k<=width ; k =k +80){
    divisons.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }

  for(var j =40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75))
  }
  for(var j =20; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175))
  }
  for(var j =40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,275))
  }
  for(var j =20; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,375))
  }

 

}

function draw() {
  background(25);
  
  Engine.update(engine)
  
  ground.display()

  for(var j = 0; j<divisons.length; j++){
    divisons[j].display()
  }

  for(var k = 0; k<plinkos.length; k++){
    plinkos[k].display()
  }

  if(frameCount%60 == 0){
    particles.push(new Particle(random(width/2+10, width/2+10),10,10))
  }
  for(var k = 0; k<particles.length; k++){
    particles[k].display()
  }
  
}