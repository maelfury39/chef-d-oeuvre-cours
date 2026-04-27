const btn = document.querySelector(".button");
const info = document.querySelector("p");
const userLogin = document.querySelector(".input1");
const userPassword = document.querySelector(".input2");



btn.addEventListener("click", updateButton);


function updateButton() {
  if (userLogin.value.trim() === "ProB26" && userPassword.value.trim() === "CIELAR2026") {
    window.location.href = "html/main.html";

  } else {
    
    info.textContent = "Acces refusé.";
  }
}
