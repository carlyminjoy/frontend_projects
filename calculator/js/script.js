var digit, currentNum   = "";
var operation, finished = false;
var operator, result    = null;

function clear() {
  digit, currentNum   = "";
  operator            = null;
  operation, finished = false;
  result              = 0;
  updateScreen("");
}

function add(num) {
  result += parseFloat(num);
  updateScreen(result.toString());
}

function subtract(num) {
  result -= parseFloat(num);
  updateScreen(result.toString());
}

function multiply(num) {
  result *= parseFloat(num);
  updateScreen(result.toString());
}

function divide(num) {
  result /= parseFloat(num);
  updateScreen(result.toString());
}

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

function addOperator(digit) {
  operation   = true;
  operator    = digit;
  currentNum  = "";
}

function updateScreen(display) {
  $('.output').html(display);
}

function equals(v, s) {
  return v.toString().includes(s);
}

function updateNum(num) {
  currentNum +=  parseFloat(num).toString();
}

function addDecimal() {
  currentNum += '.';
}

$('.button').click(function() {
    if (finished) {
      clear();
    }

    digit =  this.innerHTML;

    if (!parseFloat(digit)) {
        if (equals(digit, '='))   { finished = true; }
        if (equals(digit, 'CE'))  { clear(); }
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
