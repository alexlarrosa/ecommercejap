//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    document.getElementById("user").innerHTML = "Usuario:" + localStorage.getItem("user");

    let passedValidation = true;
      let imgUrl = document.getElementById("imgUrl");
      let nombre = document.getElementById("name");
      let apellido = document.getElementById("surname");
      let edad = document.getElementById("age");
      let mail = document.getElementById("mail");
      let telefono = document.getElementById("number");

      document.getElementById("btnGuardar").onclick = function(e){
      

      if (nombre.value === "") {
        nombre.classList.add("is-invalid");
        passedValidation = false;
      } else {
        nombre.classList.remove("is-invalid");
      }

      if (apellido.value === "") {
        apellido.classList.add("is-invalid");
        passedValidation = false;
      } else {
        apellido.classList.remove("is-invalid");
      }

      if (mail.value === "") {
        mail.classList.add("is-invalid");
        passedValidation = false;
      } else {
        mail.classList.remove("is-invalid");
      }

      if (passedValidation) {
        localStorage.setItem("perfil", JSON.stringify({

            nombre: nombre.value,
            apellido: apellido.value,
            edad: edad.value,
            imgUrl: imgUrl.value,
            mail: mail.value,
            telefono: telefono.value,

          })

        );

        window.location = "my-profile.html";

      }
    
    }
      
      
 let perfil = localStorage.getItem("perfil");

  if (perfil) {
    perfil = JSON.parse(perfil);

    if (perfil.imgUrl != "") {

      document.getElementById("imgPerfil").src = perfil.imgUrl;
    }

    document.getElementById("imgUrl").value = perfil.imgUrl;
    document.getElementById("name").value = perfil.nombre;
    document.getElementById("surname").value = perfil.apellido;
    document.getElementById("age").value = perfil.edad;
    document.getElementById("mail").value = perfil.mail;
    document.getElementById("number").value = perfil.telefono;
  }



});