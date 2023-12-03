
    document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".buttons button");
  
    let currentInput = "";
    let result = 0;
    let operator = "";
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => handleButtonClick(button.innerText));
    });
  
    function handleButtonClick(value) {
      if (isNumber(value) || value === ".") {
        currentInput += value;
      } else if (isOperator(value)) {
        if (currentInput !== "") {
          calculateResult();
          operator = value;
          currentInput = "";
        }
      } else if (value === "=") {
        calculateResult();
        operator = "";
      } else if (value === "C") {
        clearCalculator();
      }
  
      updateDisplay();
    }
  
    function isNumber(value) {
      return !isNaN(parseFloat(value)) && isFinite(value);
    }
  
    function isOperator(value) {
      return ["+", "-", "*", "/"].includes(value);
    }
  
    function calculateResult() {
      const inputNumber = parseFloat(currentInput);
      switch (operator) {
        case "+":
          result += inputNumber;
          break;
        case "-":
          result -= inputNumber;
          break;
        case "*":
          result *= inputNumber;
          break;
        case "/":
          result /= inputNumber;
          break;
        default:
          result = inputNumber;
      }
    }
  
    function clearCalculator() {
      currentInput = "";
      result = 0;
      operator = "";
    }
  
    function updateDisplay() {
      display.value = currentInput !== "" ? currentInput : result;
    }
    
  });