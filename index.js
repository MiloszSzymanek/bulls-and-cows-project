function getSecretNumber() {
  let fourth = Math.floor(Math.random() * 10);
  for (let i; (i = 1); i++) {
    third = Math.floor(Math.random() * 10);
    second = Math.floor(Math.random() * 10);
    first = Math.floor(Math.random() * 10);
    if (
      third != fourth &&
      second != fourth &&
      second != third &&
      first != fourth &&
      first != third &&
      first != second
    ) {
      break;
    }
  }
  let secretNumber =
    fourth.toString() + third.toString() + second.toString() + first.toString();

  return secretNumber;
}



let secretNumber = getSecretNumber();


function checkPlayersNumber() {
  let number = document.getElementById("userNumber").value;
  let numberString = number.toString();
  let numberArr = numberString.split("");
  let newArr = [];
  let warning = "";
  for (let i = 0; i < numberArr.length; i++) {
    if (!newArr.includes(numberArr[i]) && numberArr.length == 4) {
      newArr.push(numberArr[i]);
    } else {
      warning =
        "The number must consist of 4 digits and each digit must be unique.";
    }
  }

  document.getElementById("message").innerHTML = warning;
}


let playersNumber = checkPlayersNumber();



function countBullsAndCows(secretNumber) {
  let player = document.getElementById("userNumber").value;
  let playerArray = player.split("");
  let secretArray = secretNumber.split("");
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < playerArray.length; i++) {
    if (
      secretArray.includes(playerArray[i]) &&
      secretArray.indexOf(playerArray[i]) !==
        playerArray.indexOf(playerArray[i]) &&
      playerArray.length == 4
    ) {
      cows += 1;
    }

    if (
      secretArray.includes(playerArray[i]) &&
      secretArray.indexOf(playerArray[i]) ==
        playerArray.indexOf(playerArray[i]) &&
      playerArray.length == 4
    ) {
      bulls += 1;
    }
  }
  let result = `Number of Bulls: ${bulls} Number of Cows: ${cows}`;
  
  document.getElementById("results").innerHTML = result;
}

function winner(secretNumber) {
  if (document.getElementById("userNumber").value == secretNumber) {
    document.getElementById("results").innerHTML = "Congratulations You won!  ";
  }
}

console.log(countBullsAndCows(secretNumber));

function toDo() {
  checkPlayersNumber();
  console.log(secretNumber);
  countBullsAndCows(secretNumber);
  winner(secretNumber);
}

function start() {
  secretNumber = getSecretNumber();
}
