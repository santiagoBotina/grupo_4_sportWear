window.addEventListener("load", function () {
  //Inputs
  let form = document.querySelector("form");
  let nombre = document.querySelector("#nombre");
  let apellido = document.querySelector("#apellido");
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  let confirmPassword = document.querySelector("#confirmPassword");

  //Divs errores
  let nombreError = document.querySelector(".errorNombre");
  let apellidoError = document.querySelector(".errorApellido");
  let emailError = document.querySelector(".errorEmail");
  let passwordError = document.querySelector(".errorPassword");
  let confirmPasswordError = document.querySelector(".errorConfirmPassword");

  //   form.addEventListener("submit", (event) => {
  //     let errores = [];

  //Campo NOMBRE
  nombre.addEventListener("blur", function () {
    if (this.value.length < 2) {
      nombre.style.backgroundColor = "#ff5151";
      nombreError.innerText = "El campo debe tener min 2 caractéres";
      //   errores.push("El campo debe tener min 2 caractéres");
    }
  });

  nombre.addEventListener("change", function () {
    if (this.value.length >= 2) {
      nombre.style.backgroundColor = "#dadada";
      nombreError.innerText = "";
    }
  });

  //Campo APELLIDO
  apellido.addEventListener("blur", function () {
    if (this.value.length < 2) {
      apellido.style.backgroundColor = "#ff5151";
      apellidoError.innerText = "El campo debe tener min 2 caractéres";
      //   errores.push("El campo debe tener min 2 caractéres");
    }
  });

  apellido.addEventListener("change", function () {
    if (this.value.length >= 2) {
      apellido.style.backgroundColor = "#dadada";
      apellidoError.innerText = "";
    }
  });

  //Email
  email.addEventListener("blur", function () {
    if (!this.value.includes("@") || this.value.indexOf(".") == -1) {
      email.style.backgroundColor = "#ff5151";
      emailError.innerText = "Debes incluir un email válido";
      //   errores.push("El campo debe tener min 2 caractéres");
    }
  });

  email.addEventListener("change", function () {
    if (this.value.length >= 2) {
      email.style.backgroundColor = "#dadada";
      emailError.innerText = "";
    }
  });

  //Campo CONTRASEÑA
  password.addEventListener("blur", function () {
    if (this.value.length < 8) {
      password.style.backgroundColor = "#ff5151";
      passwordError.innerText = "La contraseña debe tener min 8 caractéres";
      //   errores.push("El campo debe tener min 2 caractéres");
    }
  });

  password.addEventListener("change", function () {
    if (this.value.length >= 8) {
      password.style.backgroundColor = "#dadada";
      passwordError.innerText = "";
    }
  });

  confirmPassword.addEventListener("blur", function () {
    if (this.value !== password.value) {
      confirmPassword.style.backgroundColor = "#ff5151";
      confirmPasswordError.innerText = "Las contraseñas deben ser iguales";
      //   errores.push("El campo debe tener min 2 caractéres");
    }
  });

  confirmPassword.addEventListener("change", function () {
    if (this.value == password.value) {
      confirmPassword.style.backgroundColor = "#dadada";
      confirmPasswordError.innerText = "";
    }
  });

  // console.log(errores);
  // if (errores.length > 0) {
  //   event.preventDefault();
  //   this.alert("hola");
  // }
  //   });
});
