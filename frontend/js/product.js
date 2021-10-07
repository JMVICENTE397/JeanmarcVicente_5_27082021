let params = new URL(document.location).searchParams;
const id = params.get("id");

    displayArticle();
    loadBasketCount();


async function displayArticle() {
    // On attend le résultat du fetch avec async et await avant de poursuivre
    let response = await fetch(`http://localhost:3000/api/teddies/${id}`)
    .then(async function(response){
        // On attend le retour des données au format json avec async et await avant de poursuivre
        let product = await response.json()
        // Affichage dans la console des données du produit
        console.log("Produit sélectionné : ", product)
        // Conversion du prix en euros
        product.price = product.price/100;
        // Création de la structure HTML du produit
        const productStructure =
            `<div class="row g-0">
                <div class="col-md-6">
                    <img src="${product.imageUrl}" class="img-fluid rounded-start" alt="${product.name}">
                </div>
                <div class="col-md-6">
                    <div class="card-body">
                        <h3 id="product__name" class="card-title">${product.name}</h3>
                        <h4 id="product__price" class="card-subtitle mb-2 text-muted"><span>${new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(product.price)}</span></h4>
                        <p class="card-text">${product.description}</p>
                        <select id="colors" class="form-select"></select>
                        <div class="mt-3">
                            <button id="addBasketBtn" type="button" class="btn btn-primary" me-2 >Ajouter au panier</button>
                            <a href="index.html" type="button" class="btn btn-primary">Retourner à la liste</a>
                        </div>
                    </div>
                </div>
            </div>`
        // Injection du HTML
        document.getElementById('product').innerHTML += productStructure
        // On crée une boucle pour récupérer les couleurs
        for (let color of product.colors) {
            // Création de la structure HTML pour les couleurs qui sera imbriquée dans la structure du produit
            const optionStructure =
                `<option id="color" value="${color}">${color}</option>`
            // Injection du HTML
            document.getElementById('colors').innerHTML += optionStructure
        }
        addBasket();
    }) 
}

function addBasket() {
    // Déclenchement de la fonction avec le clic sur le boutton
    document.getElementById('addBasketBtn').addEventListener("click", (e) => {
        console.log(e);
        e.preventDefault();

        // Récupération des données de la page qui seront envoyées dans le panier
        let selectedProduct = {
            id: id,
            name: product__name.innerText,
            color: document.querySelector('#colors').value,
            price: parseFloat(product__price.innerText),
            quantity: 1
        };
        console.log(colors.value);
        console.log(selectedProduct);
        // Création d'un tableau pour stocker les objets
        let arrayBasket = [];
        let condition = false;
        // Si le panier n'est pas vide, on récupère son contenu
        if (localStorage.getItem("basket") !== null) {
            // Conversion du fichier JSON en objet JavaScript
            arrayBasket = JSON.parse(localStorage.getItem("basket"));
            console.log("Panier avant ajout du nouveau produit :",arrayBasket);
            // Boucle pour détecter si un couple (produit/couleur) existe dans le panier
            for (let product of arrayBasket){
                if (product.name == selectedProduct.name && product.color == selectedProduct.color) {
                    product.quantity += 1;
                    condition = true;
                }
            }
            console.log(condition);
            if (condition == false) {
                arrayBasket.push(selectedProduct);
            }
        } else {
            // La méthode push permet d'ajouter le nouvel objet à la fin du tableau
            arrayBasket.push(selectedProduct);
        }
        console.log("Panier après ajout du nouveau produit :",arrayBasket)
        // Conversion de l'objet JavaScript en fichier JSON
        localStorage.setItem("basket", JSON.stringify(arrayBasket));
        // Renvoi vers la page d'accueil
        // window.location.href="index.html";

        // On appelle la fonction qui compte le nombre de produits dans le local storage
        basketCount();
        popupRedirection();
    })
}

function basketCount() {
    let productsNumber = localStorage.getItem('basketCount');
    // Conversion en nombre entier de la chaîne de caractères récupérée du local storage.
    productsNumber = parseInt(productsNumber);
    // Si le compteur n'est pas vide, on ajoute 1.
    if (productsNumber) {
      localStorage.setItem('basketCount', productsNumber + 1);
      document.querySelector('.badge').textContent = productsNumber + 1;
    // Si le compteur est vide, on le crée avec la valeur 1.
    } else {
      localStorage.setItem('basketCount', 1);
      document.querySelector('.badge').textContent = 1;
    }
  }

function popupRedirection() {
    if (window.confirm("Le produit a été ajouté à votre panier.\nCliquez sur OK pour continuer vos achats.\nCliquez sur ANNULER pour aller au panier.")){
        window.location.href = "index.html";
    } else {
        window.location.href = "basket.html";
    }
}

{/* <button type="button" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#confirmation">Ajouter au panier</button> */}
                            
