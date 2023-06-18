const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
//인풋 필드에서 인풋 값 가져오기
function getUserNumberInput() {
  return parseInt(userInput.value);
}
//generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + parseInt(enteredNumber);
  createAndWriteOutput("+", initialResult, enteredNumber);
  logEntries.push(enteredNumber);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - parseInt(enteredNumber);
  createAndWriteOutput("-", initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * parseInt(enteredNumber);
  createAndWriteOutput("*", initialResult, enteredNumber);
}

function devide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * parseInt(enteredNumber);
  createAndWriteOutput("/", initialResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", devide);
