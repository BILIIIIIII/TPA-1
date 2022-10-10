let inputKG = document.getElementById("berat");
let inputCM = document.getElementById("tinggi");
let calculateBtn = document.getElementById("calculate-btn");
var result = document.getElementById("result");
var statement = document.getElementById("result-statement");

calculateBtn.addEventListener("click", () => {
  let tinggi = inputCM.value;
  let berat = inputKG.value;

  console.log(tinggi);

  BMI = berat / (tinggi / 100) ** 2;
  result.innerText = BMI;

  if (BMI < 18.5) {
    statement.innerText = `Your BMI is ${BMI} which means You are Underweight`;
  } else if (BMI >= 18.5 && BMI < 24.9) {
    statement.innerText = `Your BMI is ${BMI} which means You are Normal`;
  } else if (BMI >= 25 && BMI < 29.9) {
    statement.innerText = `Your BMI is ${BMI} which means You are Overweight`;
  } else {
    statement.innerText = `Your BMI is ${BMI} which means You are Obesity`;
  }
});
