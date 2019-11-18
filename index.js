//integer keys
const ints = document.querySelectorAll(".int");

//display
const disp = document.querySelector(".calculator-screen");

//first key click after operator?
let afterOperator = false;

//add event listeners to int buttons
ints.forEach(int => {
  int.addEventListener('click', (e) => {
    if (disp.value.length < 12) {
      if (!afterOperator) {
        disp.value === "0" ? disp.value = e.target.value : disp.value += e.target.value;
      } else {
        disp.value = e.target.value;
        afterOperator = false;
      }
    }
  });
});

//clear display
const clear = document.querySelector('.all-clear');

clear.addEventListener('click', () => {
  disp.value = "0";
});

//operators
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equal-sign');
let num1, num2;

operators.forEach(operator => {
  operator.addEventListener('click', (e) => {
    afterOperator = true;
    //add
    if (e.target.value === '+') {
      num1 = parseInt(disp.value);

      //after equals
      equals.addEventListener('click', () => {
        num2 = parseInt(disp.value);
        disp.value = (num1 + num2).toString();
        num1 = 0;
        num2 = 0;
      })
    }
  });
});


