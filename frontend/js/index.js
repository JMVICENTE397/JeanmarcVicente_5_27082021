// Appel de la fonction qui affiche le nombre d'articles dans le panier
loadBasketCount();

// Chargement des données produits de l'API avec la méthode fetch (asynchrone)
fetch("http://localhost:3000/api/teddies")
    // Formatage de la réponse au format json
    .then((response) => response.json())
    // Traitement des données
    .then((products) => {
        // Contrôle des données en console
        console.log("Données produits chargées depuis l'API :", products);
        // Boucle pour afficher les produits dans la page html
        for (let product of products) {
            // Structure HTML avec Bootstrap
            // Utilisation des backticks pour faire du texte multiligne
            // Formatage du prix avec un constructeur qui prend en compte les paramètres locaux
            // Insertion de l'ID dans l'URL
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
    // Gestion des erreurs
    .catch((error) => {
        console.log(error);
        alert("Vous n'êtes pas connecté au serveur.",error);
    })