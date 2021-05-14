const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var background ;
var backgroundImg1
var hr,min;
function preload() {
    // create getBackgroundImg( ) here
    backgroundImg1 = loadImage("sunrise5.png");
    getTime();

}

function setup(){
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }
    else{
        background(backgroundImg1)
    }
    
    Engine.update(engine);
    //getTime()
    // write code to display time in correct format here
    textSize(30)
    fill(0,0,0)
    text("Time: "+hr+":"+min ,width-250,30)

}

async function getTime(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json(); 
    var dateTime=responseJSON.datetime
    console.log(responseJSON.datetime)
    
    hr=dateTime.slice(11,13)
    min=dateTime.slice(14,16)
    console.log(min)
    console.log(hr)
    if(hr===5){
        background=loadImage("sunrise1.png");
    }
    else if(hr===6){
        background=loadImage("sunrise2.png");
    }
    else if(hr===7||hr===8){
        background=loadImage("sunrise3.png");
    }
    else if(hr===9){
        background=loadImage("sunrise4.png");
    }
    else if(hr===10||hr===11||hr===12||hr===13||hr===14||hr===15||hr===16){
        background=loadImage("sunrise5.png");
    }
    else if(hr===17){
        background=loadImage("sunrise6.png");
    }
    else if(hr===18){
        background=loadImage("sunrise7.png");
    }
    else if(hr===19){
        background=loadImage("sunrise8.png");
    }
    else if(hr===20||hr===21){
        background=loadImage("sunrise10.png");
    }
    else if(hr===22||hr===23){
        background=loadImage("sunrise11.png");
    }
    else if(hr===0||hr===1||hr===2||hr===3||hr===4){
        background=loadImage("sunrise12.png");
    }
    backgroundImg=loadImage(background);
    
}
