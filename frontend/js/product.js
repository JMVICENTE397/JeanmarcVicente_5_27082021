let params = new URL(document.location).searchParams;
let id = params.get("id");

const displayArticle = async function() {
    try {
        // On récupère les données du serveur
        let response = await fetch(`http://localhost:3000/api/teddies/${id}`)
            if (response.ok) {
                let product = await response.json()
                console.log(product)
                // Conversion du prix en euros
                product.price = product.price/100;
                console.log(new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(product.price));

                    // let colorSelect = document.getElementById("color-select");
                    // for (let i = 0; i < article.colors.length; i++) {
                    //     let option = document.createElement("option");
                    //     option.innerText = article.colors[i];
                    //     colorSelect.appendChild(option);
                    // }
                document.getElementById('product__image').innerHTML = `<img src="${product.imageUrl}" class="img-fluid rounded-start" alt="...">`;
                document.getElementById('product__name').innerText = product.name;
                document.getElementById('product__price').innerText = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(product.price);
                document.getElementById('product__description').innerText = product.description;
                for (let i=0; i<product.colors.length; i++) {
                    document.getElementById('product__color').innerHTML += `<option value="1">${product.colors[i]}</option>`
                }
                // `<div class="col">
                //         <div class="card shadow-sm">
                //             <img src="${article.imageUrl}" width="50%">
                //             <div class="card-body">
                //                 <p class="card-text">${article.name}</p>
                //                 <div class="d-flex justify-content-between align-items-center">
                //                     <div class="btn-group">
                //                         <button type="button" class="btn btn-sm btn-outline-secondary">Voir article</button>
                //                     </div>
                //                     <small class="text-muted">${article.price}</small>
                //                 </div>
                //             </div>
                //         </div>
                //     </div>`
        `<p class="card-text">${product.description}</p>
        <p class="card-text"><small class="text-muted">${product.colors}</small></p>
    // for (color of colors) {    
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
                Default radio
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
                Default checked radio
            </label>
        </div>
        <div>
            <a href="index.html" type="button" class="btn btn-primary">Ajouter au panier</a>
            <a href="index.html" type="button" class="btn btn-primary">Retour à l'accueil</a>
        </div>`    
            }
            else {
                console.error('Retour du serveur : ', response.status)
            } 
        }
    catch (e) {
        console.error(e)
    }
    console.log(localStorage)
}
        
displayArticle()