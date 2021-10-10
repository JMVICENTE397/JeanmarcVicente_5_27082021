loadBasketCount();

// Récupération de l'id dans l'URL
let params = new URL(document.location).searchParams;
const id = params.get("id");

// Chargement des données depuis l'API
fetch(`http://localhost:3000/api/teddies/${id}`)
    // Formatage de la réponse au format JSON
    .then(response => response.json())
    // Traitement des données récupérées
    .then(product => {
        // Test pour vérifier le contenu et le format des données récupérées
        console.log("Article sélectionné :",product);
        // Structure HTML
        const productStructure =
            `<div class="row g-0">
                <div class="col-md-6">
                    <img src="${product.imageUrl}" class="img-fluid rounded-start" alt="${product.name}">
                </div>
                <div class="col-md-6 ps-3">
                    <div class="card-body">
                        <h3 id="product__name" class="card-title">${product.name}</h3>
                        <h4 id="product__price" class="card-subtitle mb-2 text-muted"><span>${new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(product.price/100)}</span></h4>
                        <p class="card-text mb-2">${product.description}</p>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Couleur</label>
                                <select id="colors" class="form-select"></select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Quantité</label>
                                <select id="product__quantity" class="form-select">
                                    <option value="1">1 article</option>
                                    <option value="2">2 articles</option>
                                    <option value="3">3 articles</option>
                                    <option value="4">4 articles</option>
                                    <option value="5">5 articles</option>
                                </select>
                            </div>
                        </div>
                        <div class="col">
                            <button id="addBasketBtn" type="button" class="btn btn-primary me-3 mb-3">Ajouter au panier</button>
                            <a href="index.html" type="button" class="btn btn-primary me-3 mb-3">Retour à la liste</a>
                        </div>
                    </div>
                </div>
            </div>`
        // Injection du HTML
        document.getElementById('product').innerHTML = productStructure;
        // On crée une boucle pour récupérer les couleurs
        for (let color of product.colors) {
            // Création de la structure HTML pour les couleurs qui sera imbriquée dans la structure du produit
            const optionStructure =
                `<option id="product__color" value="${color}">${color}</option>`
            // Injection du HTML
            document.getElementById('colors').innerHTML += optionStructure
        }
        // Appel de la fonction "Ajout au panier"
        addBasket();
    })
    // Capture de l'erreur en console et avec une fenêtre popup
    .catch((error) => {
        console.log(error);
        alert("Vous n'êtes pas connecté au serveur.",error);
    })