let params = new URL(document.location).searchParams;

const id = params.get("id");

const productImage = document.querySelector("#product__image");
const productName = document.querySelector("#product__name");
const productDescription = document.querySelector("#product__description");
const productPrice = document.querySelector("#product__price");
const productColors = document.querySelector("#product__colors");
// const productColor = productColors.querySelector("#product__color");
const productQuantity = 1;

async function displayArticle() {
    let response = await fetch(`http://localhost:3000/api/teddies/${id}`)
    // On attend le résultat du fetch avec async et await avant de poursuivre

    .then(async function(response){
        if (response.ok) {
            let product = await response.json()
            // On attend le retour des données au format json avec async et await avant de poursuivre

            console.log(product)
            
            // Conversion du prix en euros
            product.price = product.price/100;
            // console.log(new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(product.price));

            productImage.innerHTML = `<img src="${product.imageUrl}" class="img-fluid rounded-start" alt="...">`;
            productName.innerText = product.name;
            // productPrice.innerText = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(product.price);
            productPrice.innerText = product.price;
            productDescription.innerText = product.description;
            
            for (let color of product.colors) {
                productColors.innerHTML += `<option class="product__color" value="${color}">${color}</option>`
            } 

            console.log(productColors.value)

            // document.getElementById('product').innerHTML=`<div class="row g-0">
            //                                                 <img class="col-md-6" src="${product.imageUrl}">
            //                                                 <div class="col-md-6">
            //                                                     <div class="card-body">
            //                                                         <h3 class="card-title">${product.name}</h3>
            //                                                         <h4 class="card-subtitle mb-2 text-muted">${product.price.innerText = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(product.price)}</h4>
            //                                                         <p class="card-text">${product.description}</p>
            //                                                         <select class="form-select" aria-label="Default select example">`
            //                                                             for (let color of product.colors) {
            //                                                             document.innerHTML += `<option value="${color}">${color}</option>`
            //                                                             }
            //                                                         `</select>
            //                                                         <div class="mt-3">
            //                                                             <button type="button" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#confirmation">Ajouter au panier</button>
            //                                                             <a href="index.html" type="button" class="btn btn-primary">Retourner à la liste</a>
            //                                                         </div>
            //                                                     </div>
            //                                                 </div>
            //                                             </div>
            //                                         </div>`
        }
    }) 
}

                                                        // <div class="col">
                                                        //     <div class="card shadow-sm">
                                                        //         <img src="${product.imageUrl}" width="50%">
                                                        //         <div class="card-body">
                                                        //             <p class="card-text">${product.name}</p>
                                                        //             <div class="d-flex justify-content-between align-items-center">
                                                        //                 <div class="btn-group">
                                                        //                     <button type="button" class="btn btn-sm btn-outline-secondary">Voir article</button>
                                                        //                 </div>
                                                        //                 <small class="text-muted">${product.price}</small>
                                                        //             </div>
                                                        //         </div>
                                                        //     </div>
                                                        // </div>


                    // let colorSelect = document.getElementById("color-select");
                    // for (let i = 0; i < article.colors.length; i++) {
                    //     let option = document.createElement("option");
                    //     option.innerText = article.colors[i];
                    //     colorSelect.appendChild(option);
                    // }

        
displayArticle();
addBasket();