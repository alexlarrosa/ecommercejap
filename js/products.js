const PRODUCTS_ACS = "cost => COST";
const PRODUCTS_DCS = "COST => cost";
const PRODUCTS_REL_DCS = "RELEVANCIA => relevancia";


//funcion de productos segun costo
function sortProducts(criterio, array ){
    let result = [];
    
    if (criterio === PRODUCTS_ACS){
        
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
function redirect(name){
  window.location.href="product-info.html";
  localStorage.setItem("auto", name)
}



let url = "https://japdevdep.github.io/ecommerce-api/product/all.json";


let array = "";
function createHtml(data){
    let productos  = "";
    for(let i = 0; i <data.length; i++){
        
        productos += `
        <div class="col-md-3">
        <a href="product-info.html" class="card mb-4 shadow-sm custom-card"  >
            <img class="bd-placeholder-img card-img-top" src="` + data[i].imgSrc + `">
            <h5 class="m-3">`+  data[i].name + " - " + data[i].currency + " " + data[i].cost  +`</h5>
            <h6 class="m-3"> cantidad de vendidos ` + data[i].soldCount + `</h6>        
        <div class="card-body">
        <p class="card-text">` + data[i].description + `</p>
    </div>
    </a>
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
             
        
        filtro = array.filter(function(price){
            
            return price.cost >= minCost && price.cost <= maxCost;
        })
        array = filtro;
        
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
            
     document.getElementById("user").innerHTML = "Usuario:" + localStorage.getItem("user");



        });




