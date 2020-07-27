const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var bird, slingshot;
var ground,ground2,platform;

function preload() {
    bgimg = loadImage("sprites/bg.png");
}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    platform = new Ground(150, 305, 300, 170);
    ground = new Ground(600,395,1200,10);
    ground2 = new Ground(900,170,200,10);
    


    

    box14 = new Box2(850,160,50,40);
    box15 = new Box2(895,160,50,40);
    box16 = new Box2(940,160,50,40);
    box17 = new Box2(870,140,50,40);
    box18 = new Box2(915,140,50,40);
    box19 = new Box2(890,120,50,40);
    
    bird = new Bird(200,50);

    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background('blue');
    Engine.update(engine);
platform.display();
    ground.display();
    ground2.display();

    

    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();

    bird.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
    if(keyCode === 32) {
        slingshot.attach(bird.body);
    }
}

