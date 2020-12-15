// Your code goes in here
const cost_input = document.querySelector('.cost');
const service_input = document.querySelector('.service');
const people_input = document.querySelector('.people');

const tipButton = document.querySelector('#tip_button');

tipButton.addEventListener('click', calculateTip);

function calculateTip () {
 let cost = Number(cost_input.value);
 let service = Number(service_input.value) / 100;
 let people = Number(people_input.value);
 let tip = (cost * service) / people;
 
 let tip_amount = document.querySelector('.tip');
 tip_amount.innerText = '$' + tip.toFixed(2) + ((people > 1) ? ' each' : '');
}

document.querySelector("#app").innerText = "Tip Calculator";












// https://stackoverflow.com/
// https://developer.mozilla.org/en-US/docs/Web/javascript
// https://www.w3schools.com/
// https://github.com/
// https://www.youtube.com/watch?v=eJIHT0cENR0&feature=emb_log
