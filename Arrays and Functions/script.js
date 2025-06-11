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

let currQ = 0;
let score = 0;

function display() {
  var text = document.getElementById("questionArea");
  var btnsParent = document.getElementById("choicesArea");
  if (currQ < questions.length) {
    //Display question based off current num as index for qArray
    text.innerHTML = questions[currQ];
    for (let i = 0; i < 4; i++) {
      let btn = document.getElementById(`choice${i}`);
      btn.innerHTML = choices[currQ][i];
      btn.value = choices[currQ][i];
    }
  }
  else {
    //Display score & restart button
    text.innerHTML = `You scored ${score} out of ${currQ}`;
    for (let i = 0; i < 4; i++) btnsParent.removeChild();
    let restartBtn = document.createElement("button");
    restartBtn.innerHTML = "Play Again?";
    restartBtn.onclick = restart;
    btnsParent.appendChild(restartBtn);
  }
}

function checkAnswer(btn) {
  if (btn.value === answers[currQ]) score++;
  currQ++;
  display();
}

function restart() {
  score = 0;
  currQ = 0;
  var btnsParent = document.getElementById("choicesArea");
  btnsParent.removeChild();
  for (let i = 0; i < 4; i++) {
    let btn = document.createElement("button");
    btn.id = `choice${i}`;
    btnsParent.appendChild(btn);
  }
  display();
}

display();
