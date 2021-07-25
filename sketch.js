const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var btn;
var btn2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
btn=createImg("up.png")
btn.position(20,30)
btn.size(50,50)
btn.mouseClicked(vforce)

btn2=createImg("right.png")
btn2.position(200,30)
btn2.size(50,50)
btn2.mouseClicked(hforce)


  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var ball_options={
    restitution:0.8
  }

  ball=Bodies.circle(200,100,20,ball_options)
 World.add(world,ball)


  rectMode(CENTER);
 ellipseMode(RADIUS);



}

function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y,20)
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}
function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}

function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
