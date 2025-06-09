const questions = [];
const choices = ["Earth", "Mars", "Jupiter", "Saturn"];
const answers = [];

let currQNum = 0;
let score = 0;

function display() {
  if (currQNum < questions.length) {
    //Display question based off current num as index for qArray
  }
  else {
    //Display score & restart button
  }
}

function checkAnswer(btn) {
  if (btn.value === answers[currQNum]) score++;
  currQNum++;
  display();
}

function restart() {
  score = 0;
  currQNum = 0;
  display();
}

display();
