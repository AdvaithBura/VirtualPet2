//Create variables here
var dog, database, foodS, dogImg, dog1Img, fedTime, getFoodButton, feedButton;
function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(800, 450);

  database = firebase.database();
  dog = createSprite(650,200,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.4;

  food1 = new Food();

  //Pet Naming
var petName = createInput("Enter pet name here");
petName.position(900,70);

//Button creation
getFoodButton = createButton("Click to get more food");
getFoodButton.position(420,460);
feedButton = createButton("Click to feed Puppy");
feedButton.position(700,70);
}


function draw() {  
background(46,139,87);

//dog position reset
//dog.x = 650;
//dog.y = 200;


// space key mechanics
food1.readStock();
food1.readFeedTime();


//text
textSize(35);
fill("red");
text("Food Remaining: "+ foodS,300,430);


//milk picture
 for(var r = 0; r< foodS; r++){
  if(r<10){
  food1.display(r*50-20,70);
  }
}

for(q = 0; q<foodS; q++){
    if(q>9 && q<=20){
  food1.display(q*50-520,170)
}
}



//more food mechanics
getFoodButton.mousePressed(function(){
  if(foodS < 20){
  food1.moreStock(1);
  }
  dog.x = 650;
  dog.y = 200;
  dog.addImage(dogImg);
})


//feeding button pressed mechanics
feedButton.mousePressed(function(){
if(foodS > 0){
  food1.writeStock(1);

  if(foodS >= 11){
    dog.x = foodS*50-400;
    dog.y = 250;
    }
  
    if(foodS<= 10){
      dog.x = foodS*50+100;
      dog.y = 150;
    }

    dog.addImage(happyDog);
  }
})


//fedTime text
if(fedTime < 12 && fedTime > 0){
  text("Last fed: " + fedTime + " AM",20,40);
}
var theFoodTime = fedTime-12;
if(fedTime >12){
  text("Last fed: " + theFoodTime + " PM",20,40);
}
if(fedTime == 0){
  text("Last fed : 12 AM",20,40);
}
if(fedTime == 12){
  text("Last fed : 12 PM", 20,40);
}

drawSprites();
}









