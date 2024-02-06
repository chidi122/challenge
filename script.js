let player1 = prompt("Enter the first Name for player1");

let player2 = prompt("Enter the first Name for player2");

document.getElementById("warning-text").innerHTML = "Hit the button to start The game ;)";

setTimeout(() => {
  document.getElementById("warning-text").innerHTML = ""
}, 3000);

function RollTheDice(){

  document.getElementById("player1").innerHTML = player1 ? player1: "User1"

  document.getElementById("player2").innerHTML = player2 ? player2: "User1"

// that will give us a random number btween 1 and 6
const firstRandomNum = Math.floor(Math.random()*6)+1

// it will return a random picture
const FirstRandomImg = `assets/dice${firstRandomNum}.png`;

// to set the picture in html form javascript
document.querySelectorAll("img")[0].setAttribute("src",FirstRandomImg)

// that will give us a random number btween 1 and 6
const secondRandomNum = Math.floor(Math.random()*6)+1

// it will return a random picture
const secondRandomImg = `assets/dice${secondRandomNum}.png`;

document.querySelectorAll("img")[1].setAttribute("src",secondRandomImg)

if(firstRandomNum > secondRandomNum){
  // if the user wrote the name
  if(player1){
    document.getElementById("response").innerHTML = `The winner is ${player1}`
    // if the user did't add a name it will be the default one
  }else{
    document.getElementById("response").innerHTML = "The winner is User1"
  }
}else if(firstRandomNum < secondRandomNum){
  if(player2){
    document.getElementById("response").innerHTML = `The winner is ${player2}`
  }else{
    document.getElementById("response").innerHTML = "The winner is User2"
  }
}else {
  document.getElementById("response").innerHTML = "It's Draw :)";
}

}

document.getElementById("btn").addEventListener("click",RollTheDice)