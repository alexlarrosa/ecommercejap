//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

let url = "https://japdevdep.github.io/ecommerce-api/product/all.json";

fetch(url)
    .then(response => response.json())
    .then(data =>  {
      let productos  = "";
       for(let i = 0; i <data.length; i++){
        productos += `
        
        <div class="row">
        <div class="col-3">
            <img src="` + data[i].imgSrc + `" alt="` + data[i].description + `" class="img-thumbnail">
        </div>
        <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1">`+ data[i].name + " - " + data[i].currency + " " + data[i].cost +`</h4>
                <small class="text-muted"> cantidad de vendidos ` + data[i].soldCount + ` </small>
            </div>
            <p class="mb-1">` + data[i].description + `</p>
        </div>
    </div>


        `
}
document.getElementById("listaDeProductos").innerHTML = productos;
    })



})




