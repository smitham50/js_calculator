//integer keys
const ints = document.querySelectorAll(".int");

//display
const disp = document.querySelector(".calculator-screen");

//add event listeners to int buttons
ints.forEach(int => {
  int.addEventListener('click', (e) => {
    if (disp.value.length < 12) {
      disp.value === "0" ? disp.value = e.target.value : disp.value += e.target.value;
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

operators.forEach(operator => {
  operator.addEventListener('click', (e) => {
    //add
    if (e.target.value === '+') {
      let num1 = parseInt(disp.value);
      let num2;
      let firstClick = false;
      //enter next num and clear display
      
       
      num2 = parseInt(disp.value);
      equals.addEventListener('click', (num1, num2) => {
        disp.value = (num1 + num2).toString();
      })
    }
  });
});


