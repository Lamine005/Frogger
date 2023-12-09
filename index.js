const timeLeftDisplay = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const startPauseButton = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')
const logsLeft = document.querySelectorAll('.log-left')
const logsRight = document.querySelectorAll('.log-right')
const carsLeft = document.querySelectorAll('.car-left')
const carsRight = document.querySelectorAll('.car-right')

let currentIndex = 76;
const width = 9;
let timerId;
let outcomeTimerId;
let currentTime = 20;

function moveFrog(e) {
  squares[currentIndex].classList.remove("frog");

  switch (e.key) {
    case "ArrowRight":
      if (currentIndex % width < width - 1) currentIndex += 1;

      break;
    case "ArrowLeft":
      if (currentIndex % width !== 0) currentIndex -= 1;

      break;
    case "ArrowDown":
      if (currentIndex + width < width * width) currentIndex += width;
      break;
    case "ArrowUp":
      if (currentIndex - width >= 0) currentIndex -= width;
      break;
  }
  squares[currentIndex].classList.add("frog");
}

document.addEventListener("keyup", moveFrog);

function autoMoveElements() {
  logsLeft.forEach((logLeft) => moveLogLeft(logLeft));
  logsRight.forEach((logRight) => moveLogright(logRight));
  carsLeft.forEach((carLeft) => moveLogright(carLeft));
  carsRight.forEach((carRight) => moveLogright(carRight));

}

function checkResult(){
    win()
    lose()
}

function moveLogLeft(logLeft) {
  switch (true) {
    case logLeft.classList.contains("l1"):
      logLeft.classList.remove("l1");
      logLeft.classList.add("l2");
      break;

    case logLeft.classList.contains("l2"):
      logLeft.classList.remove("l2");
      logLeft.classList.add("l3");
      break;

    case logLeft.classList.contains("l3"):
      logLeft.classList.remove("l3");
      logLeft.classList.add("l4");
      break;

    case logLeft.classList.contains("l4"):
      logLeft.classList.remove("l4");
      logLeft.classList.add("l5");
      break;

    case logLeft.classList.contains("l5"):
      logLeft.classList.remove("l5");
      logLeft.classList.add("l1");
      break;
  }
}

function moveLogright(logRight) {
  switch (true) {
    case logRight.classList.contains("l1"):
      logRight.classList.remove("l1");
      logRight.classList.add("l5");
      break;

    case logRight.classList.contains("l2"):
      logRight.classList.remove("l2");
      logRight.classList.add("l1");
      break;

    case logRight.classList.contains("l3"):
      logRight.classList.remove("l3");
      logRight.classList.add("l2");
      break;

    case logRight.classList.contains("l4"):
      logRight.classList.remove("l4");
      logRight.classList.add("l3");
      break;

    case logRight.classList.contains("l5"):
      logRight.classList.remove("l5");
      logRight.classList.add("l4");
      break;
  }
}

function moveCarLeft(carLeft) {
    switch (true) {
      case carLeft.classList.contains("l1"):
        carLeft.classList.remove("l1");
        carLeft.classList.add("l2");
        break;
  
      case carLeft.classList.contains("l2"):
        carLeft.classList.remove("l2");
        carLeft.classList.add("l3");
        break;
  
      case carLeft.classList.contains("l3"):
        carLeft.classList.remove("l3");
        carLeft.classList.add("l1");
        break;

    }
  }
function moveCarRight(carRight) {
    switch (true) {
      case carRight.classList.contains("l1"):
        carRight.classList.remove("l1");
        carRight.classList.add("l3");
        break;
  
      case carRight.classList.contains("l2"):
        carRight.classList.remove("l2");
        carRight.classList.add("l1");
        break;
  
      case carRight.classList.contains("l3"):
        carRight.classList.remove("l3");
        carRight.classList.add("l2");
        break;

    }
  }

setInterval(autoMoveLogs, 1000);

function lose(){
    if(squares[currentIndex].classList.contains('c1') || squaresquares[currentIndex].classList.contains('l4') || squaresquares[currentIndex].classList.contains('l5') || currentTime <= 0){
        resultDisplay.textContent = 'you lose'
        clearInterval(timerId)
        squares[currentIndex].classList.remove('frog')
        document.removeEventListener('keyup',moveFrog)
    }
}

 function win() {
    if(squares[currentIndex].classList.contains('ending-block')){
        resultDisplay.textContent = 'You win'
        clearInterval(timerId)
        document.removeEventListener('keyup',moveFrog)

    }
 }