class CalculationError extends Error {
    constructor(message) {
      super(message); // Pass message to the Error class constructor
      this.name = this.constructor.name; // Setting the error's name as the class name
    }
}

let form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  let output = document.querySelector('output');
  let firstNum = document.querySelector('#first-num').value;
  let secondNum = document.querySelector('#second-num').value;
  let operator = document.querySelector('#operator').value;
  try {
  // Validate input to ensure they are numbers
  if (isNaN(firstNum) || isNaN(secondNum)) {
    throw new CalculationError('Both inputs must be valid numbers.');
  }

  // Implement error handling for division by zero
  if (operator === '/' && secondNum == 0) {
    throw new CalculationError('Division by zero is not allowed.');
  }

  // Calculation logic replacing eval
  let result;
  switch (operator) {
    case '+':
      result = firstNum + secondNum;
      break;
    case '-':
      result = firstNum - secondNum;
      break;
    case '*':
      result = firstNum * secondNum;
      break;
    case '/':
      result = firstNum / secondNum;
      break;
    default:
      throw new CalculationError('Invalid operator.');
  }

  // Display result safely
  output.textContent = result;
} catch (error) {
  // Error handling logic
  console.error(error);
  output.textContent = error.message; // Display error message in the output field
  if (error instanceof CalculationError) {
    // Special handling for calculation errors
    console.warn('Calculation error occurred:', error.message);
  }
} finally {
  // Code to run regardless of error
  console.log('Operation attempted with the values ' + firstNum + ' and ' + secondNum + '.');
}
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Start your code here
// You may move this JS to another file if you wish
errorBtns[0].addEventListener('click', () => {
  console.log('This is a console log message.');
});

errorBtns[1].addEventListener('click', () => {
  console.error('This is a console error message.');
});

// Console Count
errorBtns[2].addEventListener('click', () => {
  console.count('Count');
});

// Console Warn
errorBtns[3].addEventListener('click', () => {
  console.warn('This is a warning message.');
});

// Console Assert
errorBtns[4].addEventListener('click', () => {
  console.assert(false, 'Assertion failed: Expression is false');
});

// Console Clear
errorBtns[5].addEventListener('click', () => {
  console.clear();
});

// Console Dir (repeated for demonstration)
errorBtns[6].addEventListener('click', () => {
  console.dir(document.head);
});

// Console dirxml (repeated for demonstration)
errorBtns[7].addEventListener('click', () => {
  console.dirxml(document);
});

// Console Group Start
errorBtns[8].addEventListener('click', () => {
  console.group('Demo Group');
  console.log('Message inside group');
});

// Console Group End
errorBtns[9].addEventListener('click', () => {
  console.groupEnd();
});

// Console Table
errorBtns[10].addEventListener('click', () => {
  console.table([{ name: 'Alice', age: 24 }, { name: 'Bob', age: 27 }]);
});

// Start Timer
errorBtns[11].addEventListener('click', () => {
  console.time('Timer');
});

// End Timer
errorBtns[12].addEventListener('click', () => {
    console.timeEnd('Timer');
});

// Console Trace
errorBtns[13].addEventListener('click', () => {
    console.trace('Trace Example');
});

errorBtns[14].addEventListener('click', () => {
    try {
        // This function does not exist and will generate an error
        nonExistentFunction();  
    } catch (error) {
        console.error("Error caught: ", error);
        // Manually send the error to TrackJS
        TrackJS.track(error);
    }
});
