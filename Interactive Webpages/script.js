function convert() {
  let value = document.getElementById("val").value;
  let conv = document.querySelector("select").value;
  let result = 0;
  if (conv == "Miles to Kilometers") {
    result = value*1.60934;
  }
  else {
    result = value/1.60934;
  }
  let resultDisplay = document.querySelector("p");
  resultDisplay.innerHTML = "Result: " +result;
}
