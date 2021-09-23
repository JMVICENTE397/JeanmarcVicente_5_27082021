// Déclaration et affectation de l'URL
let url = "http://localhost:3000/api/teddies";

// let productNumber = localStorage.length;
// alert(productNumber);
// document.querySelector('.badge').innerText = productNumber;

async function displayList() {
    let response = await fetch(url)
    // On attend le résultat du fetch avec async et await avant de poursuivre

    .then(async function(response){
        let products = await response.json()
        // On attend le retour des données au format json avec async et await avant de poursuivre

        // On affiche les données dans la console
        console.log(products)

        // Boucle pour afficher les produits dans la page html
        for (product of products) {

            // Conversion et affichage du prix en euros dans la console
            product.price = product.price/100;
            // console.log(new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(product.price));
            const listStructure =
                `<tr class="justify-content-end">
                    <th><img src="${product.imageUrl}" height=50px></th>
                    <th class="align-middle">${product.name}</th>
                    <th class="align-middle text-right">${product.price.innerText = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(product.price)}</th>
                    <th class="align-middle text-right"><a href="product.html?id=${product._id}" type="button" class="btn btn-primary">Voir article</a></th>
                </tr>`
            // Injection du HTML
            document.getElementById('list').innerHTML += listStructure
        }
    })
    
    // On affiche l'erreur en JS
    .catch(function(error){
        alert(error);
    })
}

// const displayList = async function() {
//     try {
//         // On récupère les données du serveur
//         let response = await fetch(url)
//             if (response.ok) {
//                 let products = await response.json()
//                 console.log(products)
//                 // Boucle qui affiche les articles
//                 for (product of products) {
//                     // Conversion du prix en euros
//                     product.price = product.price/100;
//                     console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(product.price));
//                     document.getElementById('list').innerHTML +=`<tr class="justify-content-end">
//                                                                         <th><img src="${product.imageUrl}" height=50px></th>
//                                                                         <th class="align-middle">${product.name}</th>
//                                                                         <th class="align-middle text-right">${product.price.innerText = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(product.price)}</th>
//                                                                         <th class="align-middle text-right"><a href="product.html?id=${product._id}" type="button" class="btn btn-primary">Voir article</a></th>
//                                                                     </tr>`
//                 }
//             }else {
//                 console.error('Retour du serveur : ', response.status)
//             } 
//         }
//     catch (e) {
//         console.error(e)
//     }
//     console.log(localStorage)
// }
        
displayList()