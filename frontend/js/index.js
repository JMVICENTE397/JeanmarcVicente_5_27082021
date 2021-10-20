// Chargement du nombre d'articles dans le panier à partir du localstorage
loadBasketCount();

// Déclaration et affectation de l'URL
const url = "http://localhost:3000/api/teddies";

// Chargement des données depuis l'API
fetch(url)
    // Formatage de la réponse au format json
    .then((response) => response.json())
    // Traitement des données
    .then((products) => {
        // On affiche les données collectées dans la console
        console.log("Données chargées depuis l'API :", products);
        // Boucle pour afficher les produits dans la page html
        for (let product of products) {
            // On formate et on affiche le prix avec un constructeur qui prend en compte les paramètres locaux
            // Utilisation des backticks qui permettent de faire du texte multilignes
            const listStructure =
                `<tr class="justify-content-center">
                    <td><img src="${product.imageUrl}" height=60px></td>
                    <td class="align-middle text-start">${product.name}</td>
                    <td class="align-middle text-end">${new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(product.price/100)}</td>
                    <td class="align-middle text-end"><a href="product.html?id=${product._id}" type="button" class="btn btn-primary me-3">Voir</a></td>
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
        
