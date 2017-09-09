var digit      = "";
var currentNum = "";
var operation  = false;
var operator   = null;
var result = null;

function clear(digit) {
  digit = "";
  currentNum = "";
  operator = null;
  operation = false;
  result = 0;
  updateScreen("");
}

function add(num) {
  result += parseInt(num);
  updateScreen(result.toString());
}

function subtract(num) {
  result -= parseInt(num);
  updateScreen(result.toString());
}

function multiply(num) {
  result *= parseInt(num);
  updateScreen(result.toString());
}

function divide(num) {
  result /= parseInt(num);
  updateScreen(result.toString());
}

function performOperation(op) {
  if (op.toString().includes('+')) {
    add(currentNum);
  } else if (op.toString().includes('-')) {
    subtract(currentNum);
  } else if (op.toString().includes('*')) {
    multiply(currentNum);
  } else if (op.toString().includes('%')) {
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

$('.button').click(function() {
    digit =  this.innerHTML;

    if (!parseInt(digit)) {
        if (digit.toString().includes('CE')) {
          clear(digit); }
        else {
            if (!result) { result = parseInt(currentNum); }
            if (operation) {
              performOperation(operator);
              operator  = digit;
              currentNum = ""; }
            else { addOperator(digit); }
        }
    } else {
        currentNum +=  parseInt(digit).toString();
        updateScreen(currentNum);
    }
});
