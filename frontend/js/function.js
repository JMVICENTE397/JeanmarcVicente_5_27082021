function addBasket() {
  // Déclenchement de la fonction avec le clic sur le boutton
  document.getElementById('addBasketBtn').addEventListener("click", (e) => {
      console.log(e);
      e.preventDefault();

      // Récupération des données de la page qui seront envoyées dans le panier
      // let selectedProduct = {
      //     id: id,
      //     name: product__name.innerText,
      //     color: document.querySelector('#colors').value,
      //     price: parseFloat(product__price.innerText),
      //     quantity: 1
      // };

      let selectedProduct = new Product(id,product__name.innerText,document.querySelector('#colors').value,parseFloat(product__price.innerText),parseInt(document.querySelector('#product__quantity').value));
      console.log("Prix total : " + selectedProduct.priceTotal + " euros");
      console.log(colors.value);
      console.log(selectedProduct);
      // Création d'un tableau pour stocker les objets
      let arrayBasket = [];
      let condition = false;
      // Si le panier n'est pas vide, on récupère son contenu
      if (localStorage.getItem("basket") !== null) {
          // Conversion du fichier JSON en objet JavaScript
          arrayBasket = JSON.parse(localStorage.getItem("basket"));
          console.log("Panier avant ajout du nouveau produit :",arrayBasket);
          // Boucle pour détecter si un couple (produit/couleur) existe dans le panier
          for (let product of arrayBasket){
              if (product._name === selectedProduct._name && product._color === selectedProduct._color) {
                  product._quantity += selectedProduct._quantity;
                  condition = true;
              }
          }
          console.log(condition);
          if (condition === false) {
              arrayBasket.push(selectedProduct);
          }
      } else {
          // La méthode push permet d'ajouter le nouvel objet à la fin du tableau
          arrayBasket.push(selectedProduct);
      }
      console.log("Panier après ajout du nouveau produit :",arrayBasket)
      // Conversion de l'objet JavaScript en fichier JSON
      localStorage.setItem("basket", JSON.stringify(arrayBasket));
      // Renvoi vers la page d'accueil
      window.location.href="index.html";

      // On appelle la fonction qui compte le nombre de produits dans le local storage
      basketCount();
      popupRedirection();
  })
}

function basketCount() {
  let productNumber = parseInt(document.querySelector('#product__quantity').value);
  let productsNumber = localStorage.getItem('basketCount');
  // Conversion en nombre entier de la chaîne de caractères récupérée du local storage.
  productsNumber = parseInt(productsNumber);
  // Si le compteur n'est pas vide, on ajoute la nouvelle quantité au total du local storage.
  if (productsNumber) {
      productsNumber += productNumber;
      localStorage.setItem('basketCount', parseInt(productsNumber));
      document.querySelector('.badge').textContent = productsNumber;
  // Si le compteur est vide, on le crée avec la quantité du produit sélectionné.
  } else {
      console.log("Nombre d'articles : " + productNumber);
      localStorage.setItem('basketCount', parseInt(productNumber));
      document.querySelector('.badge').textContent = productNumber;
  }
}

function emptyBasket() {
    // Déclenchement de la fonction avec le clic sur le boutton
    document.getElementById('emptyBasketBtn').addEventListener("click", (e) => {
      localStorage.clear();
      window.location.href="index.html";
    });
  }

function loadBasketCount() {
  let productsNumber = localStorage.getItem('basketCount');
  if (productsNumber) {
    document.querySelector('.badge').textContent = productsNumber;
  // } else {
  //   document.querySelector('.badge').textContent = 0
  }
}

function popupRedirection() {
  if (window.confirm("Le produit a été ajouté à votre panier.\nCliquez sur OK pour continuer vos achats.\nCliquez sur ANNULER pour aller au panier.")){
      window.location.href = "index.html";
  } else {
      window.location.href = "basket.html";
  }
}