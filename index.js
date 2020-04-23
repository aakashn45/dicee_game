var random1 = Math.floor(6*Math.random())+1;

var imgsrc= "images/dice"+random1+".png";
document.querySelectorAll("img")[0].setAttribute("src",imgsrc);

var random2= Math.floor(6*Math.random())+1;
var imgsrc2="images/dice"+random2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imgsrc2);

if(random1 > random2){
  document.querySelector("h1").innerHTML="Player 1 won";
}
else{
    document.querySelector("h1").innerHTML="Player 2 won";
}
