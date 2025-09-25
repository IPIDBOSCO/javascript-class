var count = 0;
var button = document.getElementById('myButton');
var button2 = document.getElementById('myButton2');
var content = document.getElementById('count');

button.addEventListener('click', () => {
  count++;
  content.innerHTML = 'Veces presionado: ' + count;
});

button2.addEventListener('click', () => {
  count--;
  content.innerHTML = 'Veces presionado: ' + count;
});
