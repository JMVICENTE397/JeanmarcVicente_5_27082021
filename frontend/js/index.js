// Déclaration et affectation de l'URL
let url = "http://localhost:3000/api/teddies";

const displayList = async function() {
    try {
        // On récupère les données du serveur
        let response = await fetch(url)
            if (response.ok) {
                let products = await response.json()
                console.log(products)
                // Boucle qui affiche les articles
                for (product of products) {
                    // Conversion du prix en euros
                    product.price = product.price/100;
                    console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(product.price));
                    document.getElementById('list').innerHTML +=`<tr class="justify-content-end">
                                                                        <th><img src="${product.imageUrl}" height=50px></th>
                                                                        <th class="align-middle">${product.name}</th>
                                                                        <th class="align-middle text-right">${product.price.innerText = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(product.price)}</th>
                                                                        <th class="align-middle text-right"><a href="product.html?id=${product._id}" type="button" class="btn btn-primary">Voir article</a></th>
                                                                    </tr>`
                }
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
        
displayList()