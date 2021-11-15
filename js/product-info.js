//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


document.addEventListener("DOMContentLoaded", function(e){
    let relatedProducts = "";
   
    let url =  "https://japdevdep.github.io/ecommerce-api/product/5678.json";
    let commentUrl = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
    let urlProductRelated = "https://japdevdep.github.io/ecommerce-api/product/all.json";
    



    fetch(url)
    .then(response => response.json())
    .then(data => {
        let info = "";
        let img = "";
        let name = data.name;
        relatedProducts = data.relatedProducts;


        info += `
        <div class="col-3>
             <div class="d-block mb-4 h-100">
             <img class="img-thumbnail" width="50%" height="50%" src="${data.images[0]}">
             </div>
             <div>
             <h4 class="mb-1">`+ name + `</h4>
             </div>
             <div>
             <h5 class="mb-1">`+ data.currency + ` ` + data.cost +` </h5>
             <h5 class="mb-1">`+"Cantidad de vendidos:"+ ` ` + data.soldCount + `</h5>
             </div>
             <br>
             <div>
             <h4 class="mb-1">` +"Descripción:" +`</h4>
             <p>`+data.description + `</p>
             </div>
             <br>
             <br>
             <h6 class="mb-1">`+"Categoría:"+ ` `+data.category +  `</h6>
             
             

             

        </div>
    `
    img += `
    <div class="carousel-item active">
      <img src="${data.images[0]}"  alt="...">
    </div>
    <div class="carousel-item">
      <img src="${data.images[1]}" >
    </div>
    <div class="carousel-item">
      <img src="${data.images[2]}" >
    </div>
    <div class="carousel-item">
      <img src="${data.images[3]}">
    </div>
    <div class="carousel-item">
      <img src="${data.images[4]}" >
    </div>
    `
    document.getElementById("productInfo").innerHTML = info;
    document.getElementById("carouselImg").innerHTML = img;
    })

    fetch(urlProductRelated)
    .then(response => response.json())
    .then(add => {
        let info = "";
        for(let i = 0; i < relatedProducts.length ; i++){
            info += `
            <a href="product-info.html" >
            <li>
            <h6 class="mb-1">`+ add[relatedProducts[i]].name + `</h6>
            <img width="200px" src="${add[relatedProducts[i]].imgSrc}">
            </li>

            `
        }
        document.getElementById("productosRelacionados").innerHTML += info;
    })

    fetch(commentUrl)
    .then(response => response.json())
    .then(data => {
        let comments = "";
        for(let i = 0; i <data.length; i++){
            comments +=

            `<br>
            <strong>${data[i].user}</strong> dice:<br>
                 <p>${data[i].description}</p>
                 <sub>${data[i].dateTime}</sub><br>
                 <div style="text-align: right;">${data[i].score}/5</div><br><hr>
                 `;
                 

                 
        }
        
        document.getElementById("comments").innerHTML += comments;
    })

    
    
     let addComment = "";
        addComment +=

         `
         <h5>Deja tu comentario </h5><br>

         <input type="range" min="0" max="5"> Puntuación </input><br>

         <textarea class="text-center p-4 text-lg-left container mt-5" id="comment" rows="8" cols="60"></textarea><br>
    <button id="enviarComentario" class="btn btn-outline-danger float-right">Enviar</button>`;
    document.getElementById("addComment").innerHTML = addComment;
    
}); document.getElementById("user").innerHTML = "Usuario:" + localStorage.getItem("user");