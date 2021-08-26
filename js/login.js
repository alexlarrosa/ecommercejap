//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("sendBTN").onclick= function(e){
        let userField = document.getElementById("user");
        let passField = document.getElementById("password");
        let completField = true;

        if(userField.value == "" || passField.value == "" ){
            completField = false;
            alert("Ingresa los datos para continuar");
        }else{
            window.location.href="home.html";
        }
        
        
    }

});