var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceImage = "dice" + randomNumber1 +".png"; //dice1.png - dice6.png

//var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 +".png";

//var randomImageSource2 = "images/" + randomDiceImage2;

var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

//if player 1 wins
if(randomDiceImage > randomDiceImage2){
  document.querySelector("h1").innerHTML = "Player one wins";
}

//if player 2 wins
else if(randomDiceImage < randomDiceImage2){
document.querySelector("h1").innerHTML = "Player two wins";
}

//if draw
else{
  document.querySelector("h1").innerHTML = "Draw";
}
