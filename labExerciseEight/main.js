document.addEventListener("DOMContentLoaded", () => {
  let numberOfSides = document.getElementById("number-of-sides");
  let numberOfSidesValue = numberOfSides.value;
  let playerOneScore = document.getElementById("total-score-player-one");
  let playerTwoScore = document.getElementById("total-score-player-two");
  let playerOneDice = document.getElementById("dice-result-one");
  let playerTwoDice = document.getElementById("dice-result-two");
  let newGameBtn = document.getElementById("new-game-btn");
  let rollDiceBtn = document.getElementById("roll-dice-btn");

  let playerOneDiceContainer = document.getElementById(
    "player-one-dice-container"
  );
  let playerTwoDiceContainer = document.getElementById(
    "player-two-dice-container"
  );

  let playerOneMainContainer =
    document.getElementsByClassName("first-container");
  let playerTwoMainContainer =
    document.getElementsByClassName("second-container");

  let playerOneTitle = document.getElementById("player-one");
  let playerTwoTitle = document.getElementById("player-two");

  newGameBtn.addEventListener("click", () => {
    location.reload();
  });

  let rotation = 0;
  const rotateDiv = (element) => {
    rotation += 360;
    element.style.transform = `rotate(${rotation}deg)`;
  };

  const getRandomNumber = (range) => {
    return Math.floor(Math.random() * range) + 1;
  };

  numberOfSides.addEventListener("change", () => {
    numberOfSidesValue = numberOfSides.value;
  });

  let playerOneTotalScore = 0;
  let playerTwoTotalScore = 0;
  let playerOne = 1;

  rollDiceBtn.addEventListener("click", () => {
    if (numberOfSides.value === "Choose the dice you wanna play with:") {
      window.alert("Select a dice!");
    } else {
      numberOfSides.disabled = true;
      if (playerOne === 1) {
        rotateDiv(playerOneDiceContainer);
        playerOneDice.textContent = getRandomNumber(numberOfSidesValue);
        playerOneTotalScore += parseInt(playerOneDice.textContent);
        playerOneScore.textContent = playerOneTotalScore;
        playerOne = 0;

        if (playerOneTotalScore >= 100) {
          playerOneMainContainer[0].style.backgroundColor =
            "rgb(255, 149, 0, 0.9)";
          playerOneTitle.textContent = "Winner!";
          rollDiceBtn.disabled = true;
        }
      } else {
        rotateDiv(playerTwoDiceContainer);
        playerTwoDice.textContent = getRandomNumber(numberOfSidesValue);
        playerTwoTotalScore += parseInt(playerTwoDice.textContent);
        playerTwoScore.textContent = playerTwoTotalScore;
        playerOne = 1;

        if (playerTwoTotalScore >= 100) {
          playerTwoMainContainer[0].style.backgroundColor =
            "rgb(255, 149, 0, 0.9)";
          playerTwoTitle.textContent = "Winner!";
          rollDiceBtn.disabled = true;
        }
      }
    }
  });
});
