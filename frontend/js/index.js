// Déclaration et affectation de l'URL
let url = "http://localhost:3000/api/teddies";

// Chargement du nombre d'articles dans le panier à partir du localstorage
loadBasketCount();

// Chargement des données depuis l'API
fetch(url)
    // Formatage de la réponse au format json
    .then((response) => response.json())
    // Traitement des données
    .then((products) => {
        // On affiche les données dans la console
        console.log("Données chargées depuis l'API :", products);
        // Boucle pour afficher les produits dans la page html
        for (let product of products) {
            // On formate et on affiche le prix avec un constructeur qui prend en compte les paramètres locaux
            // Utilisation des backticks qui permettent de faire du texte multiligne
            const listStructure =
                `<tr class="justify-content-center">
                    <th><img src="${product.imageUrl}" height=50px></th>
                    <th class="align-middle text-start fw-normal">${product.name}</th>
                    <th class="align-middle text-end fw-normal">${new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(product.price/100)}</th>
                    <th class="align-middle text-end"><a href="product.html?id=${product._id}" type="button" class="btn btn-primary me-2">Voir article</a></th>
                </tr>`;
            // Injection du HTML
            document.getElementById('list').innerHTML += listStructure;
        }
    })
    // Capture de l'erreur en console et avec une fenêtre popup
    .catch((error) => {
        console.log(error);
        alert("Vous n'êtes pas connecté au serveur.",error);
    })
        
