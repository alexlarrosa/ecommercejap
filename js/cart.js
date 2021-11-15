//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let costo = "";
let moneda = "UYU ";

function updateCost(cantidad){
 document.getElementById("subtotal").innerHTML = moneda + cantidad * parseInt(costo);
 document.getElementById("totalCosto").innerHTML = moneda + cantidad * parseInt(costo);
 productCost = cantidad * parseInt(costo);
 costoSegunEnvio()
}

function costoSegunEnvio(){
if(document.getElementById("premium").checked == true){
    premium = productCost * 0.15;
    total = premium + productCost;
    
    document.getElementById("precioEnvio").innerHTML = moneda + premium;
    document.getElementById("totalCosto").innerHTML = moneda + total;

}if(document.getElementById("express").checked == true){
    express = productCost * 0.07;
    total = express + productCost;
    document.getElementById("precioEnvio").innerHTML = moneda + express;
    document.getElementById("totalCosto").innerHTML = moneda + total;

}if(document.getElementById("standard").checked == true){
    standard = productCost * 0.05;
    total = standard + productCost;
    document.getElementById("precioEnvio").innerHTML = moneda + standard;
    document.getElementById("totalCosto").innerHTML = moneda + total;
}

}

var productCost = "";
document.addEventListener("DOMContentLoaded", function(e){







    
    
        document.getElementById("user").innerHTML = "Usuario:" + localStorage.getItem("user");

        
        
    
        
    });

    let url = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
    

    fetch(url)
    .then(response =>response.json() )
    .then(data => {
        let cartProduct = "";
        costo = data.articles[0].unitCost;
        
        
        

        for(let i = 0; i <data.articles.length; i++){

            cartProduct += `
            <tr>
              <th scope="row"><img src="` + data.articles[i].src + `" width="52px"></th>
               <td>`+ data.articles[i].name +`</td>
               <td>`  + data.articles[i].currency + data.articles[i].unitCost + `</td>
               <td><input id="count" type="number" value="1" onchange="updateCost(this.value)" min="1" ></td>
               <td id="subtotal">`+ moneda + costo +`</td>
            </tr>
            
        `
        }

        document.getElementById("cartProduct").innerHTML = cartProduct;
        updateCost(1)
        let total = "";
        let premium = "";
        let express = "";
        let standard = "";


        document.getElementById("premium").addEventListener("change", function(){
            premium = productCost * 0.15;
           total = premium + productCost;
           document.getElementById("precioEnvio").innerHTML = moneda + premium;
           document.getElementById("totalCosto").innerHTML = moneda + total;
           

        });

        document.getElementById("express").addEventListener("change", function(){
             express = productCost * 0.07;
            total = express + productCost;
            document.getElementById("precioEnvio").innerHTML = moneda + express;
            document.getElementById("totalCosto").innerHTML = moneda + total;
            
 
         });
         document.getElementById("standard").addEventListener("change", function(){
             standard = productCost * 0.05;
            total = standard + productCost;
            document.getElementById("precioEnvio").innerHTML = moneda + standard;
            document.getElementById("totalCosto").innerHTML = moneda + total;
            
 
         });

        
    })
    function unselect(){
        document.querySelectorAll('[name=envio]').forEach((x) => x.checked=false);
      }
      unselect()

      document.getElementById("tarjeta").onclick = function(e){
        document.getElementById("transf").checked = false;
          document.getElementById("mtdPago").innerHTML = `
          <input class="form-control" type="text" placeholder="Nombre del titular"  required><br>
          <div class="invalid-feedback"></div>

          <input class="form-control" type="number"  placeholder="Número de tarjeta" required><br>
          <div class="invalid-feedback"></div>

          <input class="form-control"  placeholder="CVV" class="aligne-right" type="number" required><br>
          <div class="invalid-feedback"></div>

          <label>Fecha vencimiento:</label>
          <input class="form-control"  placeholder="" class="aligne-right" type="date" required>
          <div class="invalid-feedback"></div>`
      }
      document.getElementById("transf").onclick = function(e){
        document.getElementById("tarjeta").checked = false;
        document.getElementById("mtdPago").innerHTML = `
        <select class="form-control" id="selecBanco">
        <option>Seleccione su banco
        <option>ITAU
        <option>SANTANDER
        <option>BROU
        <option>BANDES
        <option>BBVA
        <option>CITIBANK
        <option>HSBC BANK
        <option>SCOTIABANK
        
      </select><br>
      <input class="form-control" placeholder="Número de cuenta" type="number" required>
      <div class="invalid-feedback"></div>`
    }
    function compraValidada(){
        window.location = "home.html"
    }

    document.getElementById("confirmarCompra").onclick = function(e){
        let pais = document.getElementById("pais")
        let calle = document.getElementById("calle")
        let nroPuerta = document.getElementById("numPuerta")
        let esquina = document.getElementById("esquina")
        let validacion = true;
        if((document.getElementById("premium").checked == false) &&
           (document.getElementById("express").checked == false) &&
           (document.getElementById("standard").checked == false) 

        ){
            validacion = false
            swal("Oops!", "No has seleccionado metodo de envio!", "error")

        }
        if(pais.value == "" || calle.value == "" || nroPuerta.value == "" || esquina.value ==""){
            validacion = false
            swal("Oops!", "No has completado todos los campos de dirección!", "error")
        }
        if(document.getElementById("tarjeta").checked == false &&
        document.getElementById("transf").checked == false){
            validacion = false
            swal("Oops!", "No has elejido un metodo de pago!", "error")
        }
        if(validacion == true){
            swal("Genial!", "Gracias por tu compra!", "success")
            setTimeout(compraValidada, 5000)
        }
        

    }
    

    
        