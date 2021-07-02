var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    green=createSprite(100,500,200,40)
    green.shapeColor="green"
    blue=createSprite(300,500,200,40)
    blue.shapeColor="blue"
    red=createSprite(500,500,200,40)
    red.shapeColor="red"
    pink=createSprite(700,500,200,40)
    pink.shapeColor="pink"
    ball=createSprite(0,0,40,40)
    ball.shapeColor="purple"
    ball.velocityY=3
    ball.velocityX=6
    
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    
    edges=createEdgeSprites();
    ball.bounceOff(edges)
    if(ball.isTouching(green)){
        ball.shapeColor="green"
    }
    else if(ball.isTouching(blue)){
        music.play();
        ball.shapeColor="blue"
    }
    else if(ball.isTouching(red)){
        ball.shapeColor="red"
    }
    else if(ball.isTouching(pink)){
        ball.shapeColor="pink"
    }
    //add condition to check if box touching surface and make it box
    drawSprites();
}
