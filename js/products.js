const PRODUCTS_ACS = "cost => COST";
const PRODUCTS_DCS = "COST => cost";
const PRODUCTS_REL_DCS = "RELEVANCIA => relevancia";


//funcion de productos segun costo
function sortProducts(criterio, array ){
    let result = [];
    
    if (criterio === PRODUCTS_ACS){
        console.log("PRODUCTS_ACS");
        result = array.sort(function (a, b ){
            if (a.cost < b.cost) {
                return -1;
              }
              if (a.cost > b.cost) {
                return 1;
              }
              return 0;
            });
            
       
    }else if(criterio === PRODUCTS_DCS){
        console.log("PRODUCTS_DCS")
        result = array.sort(function (a, b){
            if (a.cost > b.cost) {
                return -1;
              }
              if (a.cost < b.cost) {
                return 1;
              }
              return 0;
        })
    }else if (criterio === PRODUCTS_REL_DCS) {
        console.log("PRODUCTS_REL_DCS")
        result = array.sort(function (a, b) {
          if (a.soldCount > b.soldCount) {
            return -1;
          }
          if (a.soldCount < b.soldCount) {
            return 1;
          }
          return 0;
        });
      }
      
      return result;

}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

let url = "https://japdevdep.github.io/ecommerce-api/product/all.json";

let array = "";
function createHtml(data){
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
 return productos;
};
fetch(url)
    .then(response => response.json())
    .then(data =>  {
        array = data;
      productos = createHtml(data);
      
document.getElementById("listaDeProductos").innerHTML = productos;


document.getElementById("filtroBtn").onclick = function(e){
             let minCost = document.getElementById("min").value;
             let maxCost = document.getElementById("max").value;
             
        
        filtro = array.filter(function(el){
            
            return el.cost >= minCost && el.cost <= maxCost;
        })
        array = filtro;
        console.log(filtro);
        productos = createHtml(filtro);
        document.getElementById("listaDeProductos").innerHTML = productos;
        
        
             
              
             
         
  
        }})
        
        document.addEventListener("DOMContentLoaded", function(e){
          document.getElementById("clean").onclick = function(e){
            window.location.href="products.html";
        }
            document.getElementById("costAsc").onclick = function(e){
                sortProducts(PRODUCTS_ACS, array);
                productos = createHtml(sortProducts(PRODUCTS_ACS, array));
                document.getElementById("listaDeProductos").innerHTML = productos;

            }
            document.getElementById("costDesc").onclick = function(e){
                sortProducts(PRODUCTS_DCS, array);
                productos = createHtml(sortProducts(PRODUCTS_DCS, array));
                document.getElementById("listaDeProductos").innerHTML = productos;
            }
            document.getElementById("relDesc").onclick = function(e){
                sortProducts(PRODUCTS_REL_DCS, array);
                productos = createHtml(sortProducts(PRODUCTS_REL_DCS, array));
                document.getElementById("listaDeProductos").innerHTML = productos;
            }


        });
console.log(user)



