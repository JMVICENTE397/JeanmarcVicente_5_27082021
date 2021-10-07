class Product {
    constructor (name,color,price,quantity) {
        this.name = name;
        this.color = color;
        this.price = price;
        this.quantity = quantity;
        this.priceTotal = this.price * this.quantity;
    }
}

main();

function main() {
    loadBasketCount();
    displayBasket();
//   emptyBasket();
}

function displayBasket() {
    // Création d'un tableau pour recevoir les produits du local storage
    let arrayBasket = [];
    console.log("Contenu du panier avant chargement",arrayBasket);
    arrayBasket = JSON.parse(localStorage.getItem('basket'));
    console.log("Contenu du panier après chargement",arrayBasket);
    console.log("Premier produit du panier",arrayBasket[0]);
    for (let product in arrayBasket) {
        const basketStructure =
            `<tr>
                <td class="align-middle text-start">${arrayBasket[product].name}</td>
                <td class="align-middle text-start">${arrayBasket[product].color}</td>
                <td class="align-middle text-end">${new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(arrayBasket[product].price)}</td>
                <td class="align-middle text-end">${arrayBasket[product].quantity}</td>
                <td class="align-middle text-end">${new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format((arrayBasket[product].price)*(arrayBasket[product].quantity))}</td>
            </tr>`
        document.getElementById('basket').innerHTML += basketStructure
    }
}

function emptyBasket() {
//   emptyBasketBtn.addEventListener("click", () => {
//     localStorage.clear();
//   });
}