//integer keys
const ints = document.querySelectorAll(".int");

//display
const disp = document.querySelector(".calculator-screen");

//first key click after operator?
let afterOperator = false;

//add decimal
const dec = document.querySelector('.decimal')

dec.addEventListener('click', (e) => {
  disp.value += e.target.value;
})

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
let num1, num2, adding = false, subtracting = false, dividing = false, multiplying = false;

operators.forEach(operator => {
  operator.addEventListener('click', (e) => {
    afterOperator = true;
    num1 = parseFloat(disp.value);
    //add
    if (e.target.value === '+') {
      adding = true;
    }
      

    //subtract
    if (e.target.value === '-') {
      subtracting = true;
    }

    //divide
    if (e.target.value === '/') {
      dividing = true;
    }

    //multiply
    if (e.target.value === '*') {
      multiplying = true;
    }

    //after equals
    equals.addEventListener('click', () => {
      num2 = parseFloat(disp.value);

      let result;
      
      if (adding) {
        result = (num1 + num2) % 1 === 0 ? parseInt(num1 + num2).toString() : parseFloat(num1 + num2).toFixed(6).toString()
        disp.value = result;
        adding = false;
      };

      if (subtracting) {
        result = (num1 - num2) % 1 === 0 ? parseInt(num1 - num2).toString() : parseFloat(num1 - num2).toFixed(6).toString()
        disp.value = result;
        subtracting = false;     
      };

      if (multiplying) {
        result = (num1 * num2) % 1 === 0 ? parseInt(num1 * num2).toString() : parseFloat(num1 * num2).toFixed(6).toString()
        disp.value = result;
        multiplying = false; 
      };

      if (dividing) {
        result = (num1 / num2) % 1 === 0 ? parseInt(num1 / num2).toString() : parseFloat(num1 / num2).toFixed(6).toString()
        disp.value = result;
        dividing = false;
      }
      result = 0;
      num1 = 0;
      num2 = 0;
    })
 
  });
});


