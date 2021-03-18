class Food{
    constructor(){
    this.image = loadImage("images/Milk.png")
}
display(x,y){
    image(this.image,x,y,100,100);
}

readStock(){
    var foodStock = database.ref('foodRem');
    foodStock.on('value', function(data){
    foodS = data.val();
    })
  }
  
  readFeedTime(){
    var lastFeed = database.ref('lastfed');
    lastFeed.on('value', function(data){
    fedTime = data.val();
    })
}

writeStock(x){
    database.ref('/').update({
      foodRem:foodS-x,
      lastfed:hour()
    })
}

moreStock(y){
    database.ref('/').update({
      foodRem:foodS+y
    })
}
}