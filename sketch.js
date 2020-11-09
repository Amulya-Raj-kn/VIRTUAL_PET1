var dog,dogImg,dogImg1;
var database;
var foodS,foodStock;

function preload(){
   dogImg=loadImage("Dog.png");
   dogImg1=loadImage("happy dog.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(500,500);

//create a sprite called dog,add image and give scale 





  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20); 

}

// function to display UI
function draw() {
  background(46,139,87);
 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }

  drawSprites();
  fill(255,255,254);
  stroke("black");
  //display text FOOD REMAINING AND PRESS UP ARROW TO FEED 
  



}

//Function to read values from DB







//Function to write values in DB
