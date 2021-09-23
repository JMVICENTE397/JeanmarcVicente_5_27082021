let basket = JSON.parse(localStorage.getItem("teddy"));

main();

function main() {
  displayBasket();
  emptyBasket();
}

function displayBasket() {
    console.log(basket)
    basketStructure=[]
    for (let bear in basket) {
        const basketStructure =
            `<tr class="justify-content-end">
                <th class="align-middle">${bear.name}</th>
                <th class="align-middle">${bear.color}</th>
                <th class="align-middle text-right">${bear.price}<th>
            </tr>`
        document.getElementById('basket').innerHTML += basketStructure
    }
}

function emptyBasket() {
//   emptyBasketBtn.addEventListener("click", () => {
//     localStorage.clear();
//   });
}