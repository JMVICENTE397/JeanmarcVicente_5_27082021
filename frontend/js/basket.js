// Appel de la fonction qui affiche le nombre d'articles dans le panier
loadBasketCount();

// Affichage d'un message si le panier est vide
if (localStorage.getItem('basket') === null) {
    document.getElementById('basket').innerHTML = `<p class="alert alert-danger">Votre panier est vide.</p>`;
// Affichage d'un tableau si lee panier n'est pas vide
} else {
    // Initialisation d'une variable pour calculer le total à payer
    let totalToPay = 0;
    // Chargement du panier au format JS
    let arrayBasket = JSON.parse(localStorage.getItem('basket'));
    // Contrôles des données en console
    console.log("Contenu du panier :",arrayBasket);
    console.log("Premier produit du panier :",arrayBasket[0]);
    // Structure HTML du tableau avec Bootstrap
    const basketStructure =
        `<table class="table table-bordered table-hover">
        <thead>
            <tr>
                <th scope="col" class="text-start">Nom</th>
                <th scope="col" class="text-start">Couleur</th>
                <th scope="col" class="text-end">Prix</th>
                <th scope="col" class="text-end">Qté</th>
                <th scope="col" class="text-end">Total</th>
            </tr>
        </thead>
        <tbody id="row"></tbody>
        <tfoot>
            <tr>
                <th colspan="4">Montant à payer</th>
                <th id="toPay" class="text-end"></th>
            </tr>
        </tfoot>
    </table>
    <div class="col mt-4">
        <a href="index.html" type="button" class="btn btn-primary me-3 mb-3">Continuer vos achats</a>    
        <button id="emptyBasketBtn" type="button" class="btn btn-primary me-3 mb-3">Vider le panier</button>
        <button id="displayFormBtn" type="button" class="btn btn-primary me-3 mb-3">Commander</button>
    </div>`
    // Injection du HTML
    document.getElementById('basket').innerHTML = basketStructure
    // Boucle FOREACH pour afficher chaque produit et calculer lle total à payer par incrémentation
    arrayBasket.forEach(product => {
        // Structure HTML des lignes d'articles (avec Bootstrap)
        const rowStructure =
            `<tr>
                <td class="align-middle text-start">${product._name}</td>
                <td class="align-middle text-start">${product._color}</td>
                <td class="align-middle text-end">${new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(product._price)}</td>
                <td class="align-middle text-end">${product._quantity}</td>
                <td class="align-middle text-end">${new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format((product._price)*(product._quantity))}</td>
            </tr>`
        // Injection du HTML
        document.getElementById('row').innerHTML += rowStructure
        // Calcul du total à payer
        totalToPay += product._quantity * product._price;
        // Contrôle du calcul en console
        console.log("Incrémentation du total à payer :", totalToPay);
    });
    // Injection du total à payer
    document.querySelector('#toPay').textContent = new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(totalToPay);
    emptyBasket();
    displayForm();
}