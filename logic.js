function divideNumbers(num1, num2) {
  if (num2 == 0) {
    throw "Division by zero is not allowed.";
  }
  return num1 / num2;
}