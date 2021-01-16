const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stand1obj,stand2obj

var boxobj1,boxobj2,boxobj3,boxobj4,boxobj5,boxobj6,boxobj7,boxobj8,boxobj9,boxobj10,boxobj11,boxobj12,boxobj13;
var boxobj14,boxobj15,boxobj16,boxobj17,boxobj18,boxobj19;

var slingshot,Polygonobj,backgroundImg,backgroundImg2;

var gameState = "in_position";
var score=0;

function preload(){
    Polygonobj = loadImage("polygon.png"); 
    backgroundImg = loadImage("day.jpg");
    backgroundImg = loadImage("night.jpg");
    find_time();

}


function setup(){
createCanvas(1500,700);
engine = Engine.create();
world  = engine.world;

Engine.run(engine);
                       //x  //y //h  //w
groundobj = new ground(600,690,2000,10);
stand1obj = new ground(740,590,350,10);
stand2obj = new ground(600,200,190,10);
Polygonobj =new Polygon(90,200,20);

slingShot = new SlingShot(Polygonobj.body,{x:200,y:250});


//blocks objs
boxobj1 = new box(620,539,50,50);
boxobj2 = new box(680,539,50,50);
boxobj3 = new box(740,539,50,50);
boxobj4 = new box(800,539,50,50);
boxobj5 = new box(860,539,50,50);
boxobj6 = new box(650,480,50,50);
boxobj7 = new box(710,480,50,50);
boxobj8 = new box(770,480,50,50);
boxobj9 = new box(830,480,50,50);
boxobj10 = new box(680,420,50,50);
boxobj11 = new box(740,420,50,50);
boxobj12 = new box(800,420,50,50);
boxobj13 = new box(740,360,50,50);
boxobj14 = new box(530,160,50,50);
boxobj15 = new box(590,160,50,50);
boxobj16 = new box(650,160,50,50);
boxobj17 = new box(560,100,50,50);
boxobj18 = new box(620,100,50,50);
boxobj19 = new box(590,40,50,50);


}





function draw(){

    rectMode(CENTER);
    background (backgroundImg);
    Engine.update(engine);

    fill ("blue")
    textSize(30)
    text("Score:"+score,750,40)
      
    // stand display
    groundobj.display();
    stand1obj.display();
    stand2obj.display();
    //box display
    boxobj1.display();
    boxobj2.display();
    boxobj3.display();
    boxobj4.display();
    boxobj5.display();
    boxobj6.display();
    boxobj7.display();
    boxobj8.display();
    boxobj9.display();
    boxobj10.display();
    boxobj11.display();
    boxobj12.display();
    boxobj13.display();
    boxobj14.display();
    boxobj15.display();
    boxobj16.display();
    boxobj17.display();
    boxobj18.display();
    boxobj19.display();

    /*boxobj1.score();
    boxobj2.score();
    boxobj3.score();
    boxobj4.score();
    boxobj5.score();
    boxobj6.score();
    boxobj7.score();
    boxobj8.score();
    boxobj9.score();
    boxobj10.score();
    boxobj11.score();
    boxobj12.score();
    boxobj13.score();
    boxobj14.score();
    boxobj15.score();
    boxobj16.score();
    boxobj17.score();
    boxobj18.score();
    boxobj19.score();*/

    Polygonobj.display();

    slingShot.display();


    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(Polygonobj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
    gameState = "not_in_position";
}

function keyPressed(){
    if(keyCode==32){
        slingShot.attach(Polygonobj.body)
    }
}

async function find_time(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    console.log(response);
    
    var response_JSON = await response.json();
    console.log(response_JSON);
    
    var date_time = response_JSON.datetime;
    console.log(date_time);
    
    var hour = date_time.slice(11,13);
    console.log(hour)

    if(hour>06 && hour<19){
        bg="day.jpg";
    }
    else{
        bg="night.jpg";
    }
    backgroundImg = loadImage(bg);
}   