// Appel de la fonction qui affiche le nombre d'articles dans le panier
loadBasketCount();

// Récupération de l'ID dans l'URL
let params = new URL(document.location).searchParams;
const id = params.get("id");

// Chargement des données du produit de l'API avec la méthode fetch
fetch(`http://localhost:3000/api/teddies/${id}`)
    // Formatage de la réponse au format JSON
    .then(response => response.json())
    // Traitement des données récupérées
    .then(product => {
        // Contrôle des données en console
        console.log("Données du produit sélectionné chargées depuis l'API :",product);
        // Structure HTML avec Bootstrap
        // Utilisation d'un modal)
        const productStructure =
            `<div class="row g-0">
                <div class="col-lg-6">
                    <img src="${product.imageUrl}" class="img-fluid rounded-start" alt="${product.name}">
                </div>
                <div class="col-lg-6">
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
                            <button id="addBasketBtn" type="button" class="btn btn-primary me-3 mb-3" data-bs-toggle="modal" data-bs-target="#confirmation">Ajouter au panier</button>
                            <a href="index.html" type="button" class="btn btn-primary me-3 mb-3">Retourner à la liste</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="confirmation" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Confirmation</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Cet article a été ajouté à votre panier.
                        </div>
                        <div class="modal-footer">
                            <a type="button" href="index.html" class="btn btn-primary">Continuer vos achats</a>
                            <a type="button" href="basket.html" class="btn btn-secondary">Aller au panier</a>
                        </div>
                    </div>
                </div>
            </div>`
        // Injection du HTML
        document.getElementById('product').innerHTML = productStructure;
        // On crée une boucle pour récupérer les couleurs
        // Les boucles FOR OF permettent d'itérer à l'interieur d'un tableau
        // Les boucles FOR IN permettent d'itérer à l'intérieur d'un objet
        for (let color of product.colors) {
            // Structure HTML pour les couleurs imbriquée dans la structure produit
            const optionStructure =
                `<option id="product__color" value="${color}">${color}</option>`
            // Injection du HTML
            document.getElementById('colors').innerHTML += optionStructure
        }
        // Appel de la fonction "Ajout au panier"
        addBasket();
    })
    // Gestion des erreurs
    .catch((error) => {
        console.log(error);
        alert("Vous n'êtes pas connecté au serveur.",error);
    })