const numbtns = document.querySelectorAll('#num-btn');

const plus = document.getElementById('btn-plus');
const minus = document.getElementById('btn-minus');
const times = document.getElementById('btn-times');
const div = document.getElementById('btn-div');
const equal = document.getElementById('btn-eq');
const reset = document.getElementById('btn-reset');

const result = document.getElementById('result');

let operation = '';
let lastOperation = '';
let res = 0;

numbtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    operation += btn.value;
    result.value = operation;
    res = parseFloat(operation);
  });
});
