var inputKG = document.getElementById("berat");
var inputCM = document.getElementById("tinggi");
var calculateBtn = document.getElementsByClassName(".calculate-btn");
var result = document.getElementsByClassName(".result");
var statement = document.getElementsByClassName(".result-statement");

let BMI, tinggi, berat;

calculateBtn.addEventListener("click", () => {
  tinggi = inputCM.value;
  berat = inputKG.value;
  BMI = berat / (tinggi / 100) ** 2;
  result.innerText = BMI;

  if (BMI < 18.5) {
    statement.innerText = "Underberat";
  } else if (BMI >= 18.5 && BMI < 24.9) {
    statement.innerText = "Normal berat";
  } else if (BMI >= 25 && BMI < 29.9) {
    statement.innerText = "Overberat";
  } else {
    statement.innerText = "Obesity";
  }
});
