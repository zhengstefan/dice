var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomPicture1 = "images/dice"+randomNumber1+".png";
document.getElementsByTagName("img")[0].setAttribute("src", randomPicture1);


if (randomNumber1 === 1) {
document.getElementsByTagName("h1")[0].innerHTML = "One!";
} else if  (randomNumber1 === 2) {
  document.getElementsByTagName("h1")[0].innerHTML = "Two!";
} else if  (randomNumber1 === 3) {
  document.getElementsByTagName("h1")[0].innerHTML = "Three!";
} else if  (randomNumber1 === 4) {
  document.getElementsByTagName("h1")[0].innerHTML = "Four!";
} else if  (randomNumber1 === 5) {
  document.getElementsByTagName("h1")[0].innerHTML = "Five!";
} else if  (randomNumber1 === 6) {
  document.getElementsByTagName("h1")[0].innerHTML = "Six!";
}

function refreshPage(){
    window.location.reload();
}
