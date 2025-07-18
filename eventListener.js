document.getElementById("calc-btn").addEventListener("click", function () {
  const firstNumber = document.getElementById("firstNumber").value;
  const secondNumber = document.getElementById("secondNumber").value;
  const result = divideNumbers(firstNumber, secondNumber);
  document.getElementById("result").innerHTML = result;
});
