// Déclaration et affectation de l'URL
let url = "http://localhost:3000/api/teddies";

class Product {
    constructor(jsonProduct) {
        // La fonction assign permet de récupérer toutes les propriétés des objets contenus dans le fichier JSON.
        jsonProduct && Object.assign(this, jsonProduct); 
    }
}

// let productNumber = localStorage.length;
// alert(productNumber);
// document.querySelector('.badge').innerText = productNumber;

main();

function main() {
    loadBasketCount();
    displayList();
}


function displayList() {
    fetch(url)
    // Formatage de la réponse au format json
    .then(response => response.json())
    // Traitement des données
    .then(products => {
        // On affiche les données dans la console
        console.log("Données chargées depuis l'API :", products)
        // Boucle pour afficher les produits dans la page html
        for (let product of products) {
            // On convertit le prix en euro (qui est stocké en centimes d'euro)
            product.price = product.price/100;
            // On formate et on affiche le prix avec un constructeur qui prend en compte les paramètres locaux
            // Utilisation des backticks qui permettent de faire du texte multiligne
            const listStructure =
                `<tr class="justify-content-center">
                    <th><img src="${product.imageUrl}" height=50px></th>
                    <th class="align-middle text-start fw-normal">${product.name}</th>
                    <th class="align-middle text-end fw-normal">${new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(product.price)}</th>
                    <th class="align-middle text-end pe-3"><a href="product.html?id=${product._id}" type="button" class="btn btn-primary">Voir article</a></th>
                </tr>`
            // Injection du HTML
            document.getElementById('list').innerHTML += listStructure
        }
    })
    
    // On affiche l'erreur en JS
    .catch(function(error){alert(error);})
}
        
