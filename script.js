let mouseBtn = document.getElementById("mouseBtn");
let mouseMsg = document.getElementById("mouseMsg");

mouseBtn.onmouseover = function () {
  mouseMsg.textContent = "Mouse over the button";
};

mouseBtn.onmouseout = function () {
  mouseMsg.textContent = "Mouse left the button";
};
let keyboardInput = document.getElementById("keyboardInput");
let keyboardMsg = document.getElementById("keyboardMsg");

keyboardInput.onkeydown = function (event) {
  keyboardMsg.textContent = "You pressed: " + event.key;
};

let form = document.getElementById("demoForm");
let formMsg = document.getElementById("formMsg");

form.onsubmit = function (event) {
  event.preventDefault();
  formMsg.textContent = "Form submitted!";
};

let focusInput = document.getElementById("focusInput");
let focusMsg = document.getElementById("focusMsg");

focusInput.onfocus = function () {
  focusMsg.textContent = "Input focused";
};

focusInput.onblur = function () {
  focusMsg.textContent = "Input lost focus";
};

let btnContainer = document.getElementById("btnContainer");
let delegateMsg = document.getElementById("delegateMsg");

btnContainer.onclick = function (event) {
  if (event.target.tagName === "BUTTON") {
    delegateMsg.textContent = event.target.getAttribute("data-msg");
  }
};
