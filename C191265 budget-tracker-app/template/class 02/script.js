// select
const btn = document.getElementById("add-button");
const counter = document.getElementById("counter");

// action
function increment() {
  counter.innerHTML = parseInt(counter.innerHTML) + 1;
}

// add event listener
btn.addEventListener("click", increment);
