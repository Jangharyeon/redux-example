import configureStore from './components/store'

let store = new configureStore();
let store2 = new configureStore();

// 1
function render() {
  document.getElementById('_value').innerHTML = store.getState();
}
render();
store.subscribe(render);

let plusButton = document.getElementById('_plus');
let minusButton = document.getElementById('_minus');

plusButton.addEventListener('click', function () {
  store.dispatch({ type: 'PLUS' });
});

minusButton.addEventListener('click', function () {
  store.dispatch({ type: 'MINUS' });
});

// 2
function render2() {
  document.getElementById('_value2').innerHTML = store.getState();
}
render2();
store.subscribe(render2);

let plusButton2 = document.getElementById('_plus2');
let minusButton2 = document.getElementById('_minus2');

plusButton2.addEventListener('click', function () {
  store.dispatch({ type: 'PLUS' });
});

minusButton2.addEventListener('click', function () {
  store.dispatch({ type: 'MINUS' });
});
