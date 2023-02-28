// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
const amount = input.value;
const boxesArray = [];

for (let i = 0; i < amount; i++) {
const box = document.createElement('div');
box.style.width = `${30 + i * 10}px`;
box.style.height = `${30 + i * 10}px`;
box.style.backgroundColor = getRandomHexColor();
boxesArray.push(box);
}

boxes.append(...boxesArray);
}

function destroyBoxes() {
boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}