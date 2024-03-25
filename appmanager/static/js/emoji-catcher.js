const squares = document.querySelectorAll(".square-style");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("emoji");
  });


  let randomIndex = Math.floor(Math.random() * squares.length);
  let randomSquare = squares[randomIndex];
  randomSquare.classList.add("emoji");
  hitPosition = randomIndex;
}


squares.forEach((square, index) => {
  square.addEventListener("mousedown", () => {
    if (index == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function moveEmoji() {
  timerId = setInterval(randomSquare, 500);
}

moveEmoji();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert(`Game Over! Your final Score Is ${result}`);
  }
}

let countDownTimerId = setInterval(countDown, 1000);
