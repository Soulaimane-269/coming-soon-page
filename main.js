"usestrict";
const form = document.querySelector("form") , inputWrapper= document.querySelector(".input-field .input-wrapper");

form.addEventListener("submit", validateForm);

function showAlert() {
  let node = document.createElement("p");
  let textnode = document.createTextNode("Please provide a valid email");
  node.appendChild(textnode);
  inputWrapper.appendChild(node);
  node.style.position = "absolute";
  node.style.bottom = "-55%";
  node.style.left = "5%";
  node.style.color = "red";
  if(window.matchMedia("(max-width:950px)").matches) {
  node.style.position = "absolute";
  node.style.bottom = "0";
  node.style.left = "5%";
  node.style.color = "red";
  } 
  setTimeout(() => {
    inputWrapper.removeChild(node);
  }, 2000);
}
function validateForm(e) {
  e.preventDefault();
  let emailValue = e.target[0].value;
  let reg =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (reg.test(emailValue)) {
    e.target[0].value = "";
  } else {
    showAlert();
  }
}

