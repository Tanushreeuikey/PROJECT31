const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,boy_walking,walking;
var thunder1,thunder2;
var drops=[];

function preload()
{
    thunder1=loadImage("thunderbolt/1.png")
    thunder2=loadImage("thunderbolt/2.png")
    boy_walking = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
}

function setup()
{
    createCanvas(600,700);

    engine = Engine.create();
	world = engine.world;

   boy = createSprite(300,530,50,200)
   boy.addAnimation("walking",boy_walking)
   boy.scale=0.5
    
  
   umbrella=new Umbrella(300,420,50,50)

   if(frameCount%30===0)
   {
       for(var i=0;i<100;i++)
       {
          drops.push(new Drop())
       }
   }
    Engine.run(engine);
}

function draw()
{
    background(0)
    Engine.update(engine);
    rectMode(CENTER)

    for(var i=0;i<drops.length;i++)
    {
        drops[i].display()
    }

   umbrella.display()
    rand = Math.round(random(1,4))
    if(frameCount%80===0)
    {
        thunderCreatedFrame=frameCount;
        thunder=createSprite(random(10,370), random(10,30), 10,10);
        switch(rand)
        {
            case 1: thunder.addImage(thunder1)
            break;
            case 2: thunder.addImage(thunder2)
            break;
            default:break;
        }
        thunder.scale = random(0.3,0.6)
        thunder.lifetime= 100
    }
    drawSprites();
}   

