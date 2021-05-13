var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     surface1=createSprite(10,550,300,25);
     surface1.shapeColor="red";
     surface2=createSprite(270,550,200,25);
     surface2.shapeColor="blue";
     surface3=createSprite(500,550,190,25);
     surface3.shapeColor="green";
     surface4=createSprite(750,550,250,25);
     surface4.shapeColor="pink";

     box=createSprite(random(20,750),150,25,25)
     box.shapeColor="white";
     box.velocityX=5;
     box.velocityY=4;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites()
    box.bounceOff(edges);

    if(surface1.isTouching(box)&&box.bounceOff(surface1)){
        box.shapeColor="red";
    }
    if(surface2.isTouching(box)&&box.bounceOff(surface2)){
        box.shapeColor="blue";
        box.velocityX=0;
        box.velocityY=0;
    }
    if(surface3.isTouching(box)&&box.bounceOff(surface3)){
        box.shapeColor="green";
    }
    if(surface4.isTouching(box)&&box.bounceOff(surface4)){
        box.shapeColor="pink";
    }

   drawSprites()

    //add condition to check if box touching surface and make it box
}
