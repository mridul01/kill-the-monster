const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var bg;
var ground;
var block;
var monster;
var thread;
var superhero;

function preload() {
bg = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(1350, 680);
  engine = Engine.create();
    world = engine.world;

     ground = new Ground(700,500,900,20);

     block1 = new Blocks(700,460,50,50);
     block2 = new Blocks(700,440,50,50);
     block3 = new Blocks(700,420,50,50);
     block4 = new Blocks(700,400,50,50);
     block5 = new Blocks(700,380,50,50);

     block6 = new Blocks(620,480,50,50);
     block7 = new Blocks(620,460,50,50);
     block8 = new Blocks(620,440,50,50);
     block9 = new Blocks(620,420,50,50);

     block10 = new Blocks(780,480,50,50);
     block11 = new Blocks(780,460,50,50);
     block12 = new Blocks(780,440,50,50);
     block13 = new Blocks(780,420,50,50);

     block14 = new Blocks(520,480,50,50);
     block15 = new Blocks(520,460,50,50);


     monster = new Monster(1000,200,300,300);

     superhero = new Superhero(500,100,400,200);

     thread = new Thread(superhero.body,{x : 220, y: 180});
}

function draw() {
  background('lightblue');
  Engine.update(engine);

  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();

monster.display();

superhero.display();

thread.display();


}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  thread.fly();
}

function keyPressed(){
  if (keyCode === 32){
    Matter.Body.setPosition(superhero.body,{x:150, y:200})
    thread.attach(superhero.body)
  }
}
