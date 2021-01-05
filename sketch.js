const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world, engine;
var umbrella;
var lightening, lightening1, lightening2, lightening3, lightening4;
var lighteningrCreatedFrame = 0;
var drops = [];
var maxDrops = 100;
var rand;

function preload(){
    lightening1 = loadImage("1.png");
    lightening2 = loadImage("2.png");
    lightening3 = loadImage("3.png");
    lightening4 = loadImage("4.png");
}

function setup(){
    createCanvas(500,800);  
    engine = Engine.create();
    world = engine.world;

     umbrella = new Umbrella(250,590);   

    if(frameCount % 150 === 0){
        for(var i=0; i<maxDrops; i++){
            drops.push(new Drops(random(0,400), random(0,400)));
        }
    }
}

function draw(){
    Engine.update(engine);
    background(0,0,0);

    rand = Math.round(random(1,4));
    if(frameCount % 70 === 0){
        lighteningrCreatedFrame = frameCount;
        lightening = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: lightening.addImage(lightening1);
            break;
            case 2: lightening.addImage(lightening2);
            break; 
            case 3: lightening.addImage(lightening3);
            break;
            case 4: lightening.addImage(lightening4);
            break;
            default: break;
        }
        lightening.scale = random(0.3,0.6)
    }

    if(lighteningrCreatedFrame + 10 === frameCount && lightening){
        lightening.destroy();
    }

    umbrella.display();  
    
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();  
    }
    
    drawSprites();
}   

