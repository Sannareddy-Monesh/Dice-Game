
var randNum1 = Math.floor(Math.random()*6+1);
var randNum2 = Math.floor(Math.random()*6+1);

document.querySelector(".img1").setAttribute("src", "images/dice" + randNum1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randNum2 + ".png");

if (randNum1 == randNum2){
    document.querySelector("h1").innerHTML = "<u> Draw </u>";
    document.querySelector("body").classList.add("draw");
    document.querySelector("h1").classList.add("header2");
}else if (randNum1 > randNum2){
    document.querySelector("h1").innerHTML = "<u> Player1 </u> Wins";
    document.querySelector("body").classList.add("win1");
    document.querySelector("h1").classList.add("header1");
}else {
    document.querySelector("h1").innerHTML = "<u> Player2</u> Wins";
    document.querySelector("body").classList.add("win2");
}