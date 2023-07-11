let counterValue = document.getElementById("counterValue");

function onIncrement() {
  let pricceCounter = counterValue.textContent;
  let updateCouner = parseInt(pricceCounter) + 1;
  if (updateCouner > 0) {
    counterValue.style.color = "green";
  } else if (updateCouner < 0) {
    counterValue.style.color = "red";
  } else {
    counterValue.style.color = "black";
  }
  counterValue.textContent = updateCouner;
}

function onDecrement() {
  let pricceCounter = counterValue.textContent;
  let updateCouner = parseInt(pricceCounter) - 1;
  if (updateCouner > 0) {
    counterValue.style.color = "green";
  } else if (updateCouner < 0) {
    counterValue.style.color = "red";
  } else {
    counterValue.style.color = "black";
  }
  counterValue.textContent = updateCouner;
}

function onReset() {
  let counterElement = 0;
  counterValue.textContent = counterElement;
  counterValue.style.color = "black";
}
