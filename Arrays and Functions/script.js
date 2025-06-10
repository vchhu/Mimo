const questions = [
  "What planet is named after the Roman god of war?",
  "What's the capital of France?",
  "How many faces does a dodecahedron have?",
  "Who painted the Mona Lisa?"
];
const choices = [
  ["Uranus", "Mars", "Jupiter", "Saturn"],
  ["Paris", "London", "Berlin", "Madrid"],
  ["11", "10", "20", "12"],
  ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"]
];
const answers = [
  "Mars",
  "Paris",
  "12",
  "Da Vinci"
];

const restartBtn =  document.createElement("button");
restartBtn.innerHTML = "Play Again?";
restartBtn.onclick = restart;
const btnsParent = document.getElementById("choicesArea");

let currQNum = 0;
let score = 0;

function display() {
  let text = document.getElementById("questionArea");
  if (currQNum < questions.length) {
    //Display question based off current num as index for qArray
  }
  else {
    //Display score & restart button
    text.innerHTML = 'You scored ${score} out of ${currQNum}';
    
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
