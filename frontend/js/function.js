// function addBasket() {
    
//     document.getElementById('addBasketBtn').addEventListener("click", (e) => {

//       e.preventDefault();
//       // ------ Création du produit qui sera ajouté au panier
//       const product = {
//         id: id,
//         // name: product.name,
//         name: productName.innerText,
//         color: productColors.options[productColors.selectedIndex].innerText,
//         price: parseFloat(productPrice.innerHTML),
//         quantity: 1
//       };
//       console.log(product)
//       // -------------------
//       // -- LOCAL STORAGE --
//       // -------------------
//       let arrayBasket = [];
//       // alert('Vous avez ajouter un article à votre panier');
      
//       // Si le localStorage n'est pas vide, on récupère son contenu.
//       if (localStorage.getItem("teddy") !== null) {
//         arrayBasket = JSON.parse(localStorage.getItem("teddy"));
//       }
//       // On ajoute le nouveau produit
//       arrayBasket.push(product);
//       localStorage.setItem("teddy", JSON.stringify(arrayBasket));

//     });
// }

function loadBasketCount() {
  let productsNumber = localStorage.getItem('basketCount');
  if (productsNumber) {
    document.querySelector('.badge').textContent = productsNumber;
  // } else {
  //   document.querySelector('.badge').textContent = 0
  }
}