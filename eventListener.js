document.getElementById("calc-btn").addEventListener("click", function () {
  const firstNumber = document.getElementById("firstNumber").value;
  const secondNumber = document.getElementById("secondNumber").value;

  try {
    const result = divideNumbers(firstNumber, secondNumber);
  } catch (error) {
    alert("Error: " + error);
  }

  if (result != "unknown") {
    document.getElementById("result").innerHTML = result;
  }
});
