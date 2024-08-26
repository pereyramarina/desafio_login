// Selecciona el botón de iniciar sesión utilizando su ID
const sign_in_btn = document.querySelector("#sign-in-btn");

// Selecciona el botón de registrarse utilizando su ID
const sign_up_btn = document.querySelector("#sign-up-btn");

// Selecciona el contenedor principal utilizando su clase
const container = document.querySelector(".container");

// Añade un listener al botón de registrarse que, al hacer clic, 
// agrega la clase "sign-up-mode" al contenedor
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

// Añade un listener al botón de iniciar sesión que, al hacer clic, 
// remueve la clase "sign-up-mode" del contenedor
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});