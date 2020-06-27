
// creating a random number
var playerOne = Math.floor((Math.random() * 6) + 1);

  document.querySelector(".img1").setAttribute("src", "images/dice" + playerOne + ".png")


var playerTwo = Math.floor((Math.random() * 6) + 1);

  document.querySelector(".img2").setAttribute("src", "images/dice" + playerTwo +".png")


function displayResult(playerOne,playerTwo){
  var playerOne = this.playerOne;
  var playerTwo = this.playerTwo;
  if(playerOne === playerTwo){
    return "Draw!!!";
  }
  else if (playerOne > playerTwo){
    return "🚩 Player One won!!"
  }
  else if(playerOne < playerTwo){
    return "Player Two won!! 🚩"
  }
  else{
    return "Let's play"
  }
}

var result = displayResult();
document.querySelector(".outcome").innerHTML = result;

var button = document.querySelector(".btn");
button.addEventListener("click", refresh);
function refresh(){
  window.location.reload(false);
}
