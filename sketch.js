const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var ground;
var engine,world,ball;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var bouncyball={
    restitution:1
  }
  ball=Bodies.circle(200,100,20,bouncyball)
  World.add(world,ball)
  var grass={
    isStatic:true
  }
  ground=Bodies.rectangle(400,390,800,20,grass)
  World.add(world,ground)

}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  drawSprites();
}