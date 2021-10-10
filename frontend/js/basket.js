loadBasketCount();

if (localStorage.getItem("basket") === null) {
    document.getElementById('basket').innerHTML = `<p class="shadow alert alert-danger">Votre panier est vide.</p>`;
} else {
    // Création d'un tableau pour recevoir les produits du local storage
    let arrayBasket = [];
    // Création d'une variable pour calculer le total à payer
    let totalToPay = 0;
    console.log("Contenu du panier avant chargement",arrayBasket);
    arrayBasket = JSON.parse(localStorage.getItem('basket'));
    console.log("Contenu du panier après chargement",arrayBasket);
    console.log("Premier produit du panier",arrayBasket[0]);
    const basketStructure =
        `<table class="table table-bordered table-hover shadow">
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
        <a href="command.html" type="button" class="btn btn-primary me-3 mb-3">Commander</a>
    </div>`
    document.getElementById('basket').innerHTML = basketStructure
    for (let product of arrayBasket) {
        const rowStructure =
            `<tr>
                <td class="align-middle text-start">${product._name}</td>
                <td class="align-middle text-start">${product._color}</td>
                <td class="align-middle text-end">${new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(product._price)}</td>
                <td class="align-middle text-end">${product._quantity}</td>
                <td class="align-middle text-end">${new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format((product._price)*(product._quantity))}</td>
            </tr>`
        document.getElementById('row').innerHTML += rowStructure
        totalToPay += product._quantity * product._price;
        console.log(totalToPay);
    }
    document.querySelector('#toPay').textContent = new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(totalToPay);
    emptyBasket();
}