//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
   
    let url =  "https://japdevdep.github.io/ecommerce-api/product/5678.json";
    let commentUrl = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";



    fetch(url)
    .then(response => response.json())
    .then(data => {
        let info = "";
        let name = data.name;

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
             <h4 class="mb-1">` +"Descripcion:" +`</h4>
             <p>`+data.description + `</p>
             </div>
             <br>
             <br>
             <h6 class="mb-1">`+"Categoria:"+ ` `+data.category +  `</h6>
             <div>
             <h5 class="mb-1">`+ "Imagenes" + `</h5>
             <img class="img-thumbnail" src="${data.images[1]}">
             <img class="img-thumbnail" src="${data.images[2]}">
             <img class="img-thumbnail" src="${data.images[3]}">
             <img class="img-thumbnail" src="${data.images[4]}">
             </div>
             

             

        </div>
    `
    document.getElementById("productInfo").innerHTML = info;
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
         `<h5>Deja tu comentario </h5>
         <textarea class="text-center p-4 text-lg-left container mt-5" id="comment" rows="8" cols="60"></textarea><br>
    <button id="enviarComentario" class="btn btn-outline-danger float-right">Enviar</button>`;
    document.getElementById("addComment").innerHTML = addComment;
    
}); document.getElementById("user").innerHTML = "Usuario:" + localStorage.getItem("user");