// Set initial variables to default values
var digit, currentNum   = "";
var operation, finished = false;
var operator, result    = null;

// Clears the screen using 'AC' button
function clear() {
  digit, currentNum   = "";
  operator, result    = null;
  operation, finished = false;
  updateScreen("");
}

// Clears the current entry only
function clearEntry() {
  updateScreen("");
}

// Adds result to current num on screen
function add(num) {
  result += parseFloat(num);
  updateScreen(result.toString());
}
// Subtracts current num on screen from result
function subtract(num) {
  result -= parseFloat(num);
  updateScreen(result.toString());
}

// multiplies result by current num on screen
function multiply(num) {
  result *= parseFloat(num);
  updateScreen(result.toString());
}

// Divides result by current num on screen
function divide(num) {
  result /= parseFloat(num);
  updateScreen(result.toString());
}

// Determines which operation to perform
function performOperation(op) {
  if (equals(op, '+')) {
    add(currentNum);
  } else if (equals(op, '-')) {
    subtract(currentNum);
  } else if (equals(op, '*')) {
    multiply(currentNum);
  } else if (equals(op, '%')) {
    divide(currentNum);
  }
}

// Stores operator for later use
function addOperator(digit) {
  operation   = true;
  operator    = digit;
  currentNum  = "";
}

// Updates the calculator display screen
function updateScreen(display) {
  $('.output').html(display);
}

// Returns and displays the final result
function equals(v, s) {
  return v.toString().includes(s);
}

// Updates the current num & converts to string
function updateNum(num) {
  currentNum +=  parseFloat(num).toString();
}

// Adds a decimal place to the current num
function addDecimal() {
  currentNum += '.';
  updateScreen(currentNum);
}

// Runs as buttons on the calculator are clicked
$('.button').click(function() {
    if (finished) {
      clear();
    }

    digit =  this.innerHTML;

    if (!parseFloat(digit)) {
        if (equals(digit, '='))   { finished = true; }
        if (equals(digit, 'AC'))  { clear(); }
        if (equals(digit, 'CE'))  { clearEntry(); }
        if (equals(digit, '.'))   {
          addDecimal();
          updateScreen();
        }
        else {
            if (!result) { result = parseFloat(currentNum); }
            if (operation) {
              performOperation(operator);
              operator  = digit;
              currentNum = ""; }
            else { addOperator(digit); }
        }
    } else {
        updateNum(digit);
        updateScreen(currentNum);
    }
});
