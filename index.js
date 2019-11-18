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
  })
});

//clear display
const clear = document.querySelector('.all-clear');

clear.addEventListener('click', () => {
  disp.value = "0";
})

