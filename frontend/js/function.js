function addBasket() {
  // Déclenchement de la fonction avec le clic sur le bouton
  document.getElementById('addBasketBtn').addEventListener("click", (e) => {
    // Contrôle de l'évènement en console  
    console.log("Contrôle du clic sur le bouton Ajouter au panier : ", e);
    // Désactivation du bouton
    e.preventDefault();
    // Récupération des données
    const name = product__name.innerText;
    const color = document.querySelector('#colors').value;
    const price = parseFloat(product__price.innerText);
    const quantity = parseInt(document.querySelector('#product__quantity').value);
    // Utilisation de la classe Product
    let selectedProduct = new Product(id, name, color, price, quantity);
    // Contrôle des données en console
    console.log("Caractéristiques des produits envoyés au panier : ", selectedProduct);
    // Récupération du panier au format JS avec un opérateur conditionnel ternaire
    let basketItems = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : [];
    // Test avec la référence produit et la couleur
    const existItem = basketItems.find((items) => items._id === selectedProduct._id && items._color === selectedProduct._color);
    // Si la combinaison (produit,couleur) existe, MAJ de la quantité
    if (existItem) {
      basketItems.map((item) =>
        (item._id === selectedProduct._id && item._color === selectedProduct._color) ? item._quantity += selectedProduct._quantity : item
      );
    // Sinon, ajout de la nouvelle combinaison à la fin du tableau
    } else {
      basketItems = [...basketItems, selectedProduct];
    }
    // Envoi du nouveau panier au format JSON dans le stockage local
    localStorage.setItem("basket", JSON.stringify(basketItems));
    basketCount(quantity);
  })
}

function basketCount(productsNumber) {
  // Contrôle des données en console
  console.log("Quantité ajoutée au panier : ", productsNumber);
  // Conversion en nombre entier de la chaîne de caractères récupérée du stockage local
  let storage = parseInt(localStorage.getItem('basketCount'));
  // Si le compteur n'est pas vide, ajout de la nouvelle quantité au total du stockage local
  if (storage) {
      productsNumber += storage;
      localStorage.setItem('basketCount', parseInt(productsNumber));
      document.querySelector('.badge').textContent = productsNumber;
  // Si le compteur est vide, création avec la quantité du produit sélectionné
  } else {
      console.log("Nombre d'articles : " + productsNumber);
      localStorage.setItem('basketCount', parseInt(productsNumber));
      document.querySelector('.badge').textContent = productsNumber;
  }
  // Contrôle des données en console
  console.log("Nouveau nombre d'articles dans le panier : ", productsNumber);
}

function displayForm() {
  // Déclenchement de la fonction avec le clic sur le bouton
  document.getElementById('displayFormBtn').addEventListener("click", (e) => {
    // Désactivation du bouton
    e.preventDefault();
    // MAJ des attributs de la balise div
    document.getElementById('form').setAttribute("class","container mt-5");
    // Structure HTML (avec Bootstrap)
    const inputStructure =
      `<form id="contactForm" class="needs-validation" novalidate action="" method="POST">
        <div class="row g-3">
          <div class="col-sm-2">
            <label for="kind" class="form-label">Genre</label>
            <select class="form-select" id="kind" required>
              <option>M.</option>
              <option>Mme</option>
              <option>Mlle</option>
            </select>
          </div>
          <div class="col-sm-5">
            <label for="lastName" class="form-label">Nom</label>
            <input type="text" class="form-control" id="lastName" placeholder="" value="">
            <div id="invalidLastName" class="text-danger mt-2"></div>
          </div>
          <div class="col-sm-5">
            <label for="firsName" class="form-label">Prénom</label>
            <input type="text" class="form-control" id="firstName" placeholder="" value="">
            <div id="invalidFirstName" class="text-danger mt-2"></div>
          </div>
          <div class="col-md-8">
            <label for="email" class="form-label">Email <span class="text-muted"></span></label>
            <input type="text" class="form-control" id="email" placeholder="exemple@gmail.fr">
            <div id="invalidEmail" class="text-danger mt-2"></div>
          </div>
          <div class="col-md-4">
          <label for="phone" class="form-label">Téléphone <span class="text-muted"></span></label>
          <input type="text" class="form-control" id="phone" placeholder="00.00.00.00.00">
          <div id="invalidPhone" class="text-danger mt-2"></div>
        </div>
          <div class="col-12">
            <label for="address" class="form-label">Adresse</label>
            <input type="text" class="form-control" id="address" placeholder="Numéro et voie">
            <div id="invalidAddress" class="text-danger mt-2"></div>
          </div>
          <div class="col-12">
            <label for="address2" class="form-label">Complément d'adresse <span class="text-muted">(facultatif)</span></label>
            <input type="text" class="form-control" id="address2" placeholder="Résidence ou lieu-dit">
          </div>
          <div class="col-md-2">
            <label for="zip" class="form-label">Code Postal</label>
            <input type="text" class="form-control" id="zip" placeholder="00000">
            <div id="invalidZip" class="text-danger mt-2"></div>
          </div>
          <div class="col-md-6">
            <label for="city" class="form-label">Ville / Commune</label>
            <input type="text" class="form-control" id="city" placeholder="">
            <div id="invalidCity" class="text-danger mt-2"></div>
          </div>
          <div class="col-md-4">
            <label for="country" class="form-label">Pays</label>
            <select class="form-select" id="country">
              <option>France</option>
            </select>
          </div>
        </div>      
        <div class="col mt-4">
          <button type="submit" id="validCommandBtn" class="btn btn-primary me-3 mb-3">Valider la commande</button>
          <div id="invalidForm" class="text-danger mt-2"></div>
          </div>
      </form>`
      // Injection du HTML
      document.getElementById('input').innerHTML = inputStructure;
      // Appel de la fonction pour valider le formulaire
      validOrder();
  })
}

function emptyBasket() {
    // Déclenchement de la fonction avec le clic sur le boutton
    document.getElementById('emptyBasketBtn').addEventListener("click", (e) => {
      // Désactivation du bouton
      e.preventDefault();
      // Vidange du stockage local
      localStorage.clear();
      // Redirection vers la page d'accueil
      window.location.href="index.html";
    });
  }

function loadBasketCount() {
  // Récupération de la valeur du compteur
  let productsNumber = localStorage.getItem('basketCount');
  // Ternaire (fonction raccourcie du IF ELSE)
  productsNumber ? document.querySelector('.badge').textContent = productsNumber : [];
}

function validOrder() {
  // Création de la constante form afin de pouvoir utiliser la notation dot
  const form = document.querySelector('#contactForm');
  // Ecoute de la saisie du nom
  form.lastName.addEventListener('change', function() {checkLastName(this);});
  // Validation du nom
  const checkLastName = function(inputLastName) {
    let msg;
    let valid = false;
    if (inputLastName.value.length < 2) {
      msg = "Le nom doit comporter au moins 2 caractères"
    } else if (/[0-9]/.test(inputLastName.value)) {
      msg = "Le nom ne doit pas contenir de chiffre"
    } else {
      msg = "Format correct";
      valid = true;
    }
    if (valid) {
      document.querySelector('#invalidLastName').innerHTML = '';
      return true;
    } else {
      document.querySelector('#invalidLastName').innerHTML = `${msg}`;
      return false;
    }
  }
  // Ecoute de la saisie du prénom
  form.firstName.addEventListener('change', function() { checkFirstName(this); });
  // Validation du prénom
  const checkFirstName = function(inputFirstName) {
    let msg;
    let valid = false;
    if (inputFirstName.value.length < 2) {
      msg = "Le nom doit comporter au moins 2 caractères"
    } else if (/[0-9]/.test(inputFirstName.value)) {
      msg = "Le nom ne doit pas contenir de chiffre"
    } else {
      msg = "Format correct";
      valid = true;
    }
    if (valid) {
      document.querySelector('#invalidFirstName').innerHTML = '';
      return true;
    } else {
      document.querySelector('#invalidFirstName').innerHTML = `${msg}`;
      return false;
    }
  } 
  // Ecoute de la saisie de l'email
  form.email.addEventListener('change', function() { checkEmail(this); });
  // Validation de l'email
  const checkEmail = function(inputEmail) {
    let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-zA-Z]{2,5}$','g');
    if (emailRegExp.test(inputEmail.value)) {
      document.querySelector('#invalidEmail').innerHTML = '';
      return true;
    } else {
      document.querySelector('#invalidEmail').innerText = 'Email non valide';
      return false;
    }
  };
  // Ecoute de la saisie de numéro de téléphone
  form.phone.addEventListener('change', function() { checkPhone(this); });
  // Validation du numéro de téléphone
  const checkPhone = function(inputPhone) {
    let phoneRegExp = new RegExp('^[0-9]{2}[.]{1}[0-9]{2}[.]{1}[0-9]{2}[.]{1}[0-9]{2}[.]{1}[0-9]{2}$','g');
    if (phoneRegExp.test(inputPhone.value)) {
      document.querySelector('#invalidPhone').innerHTML = '';
      return true;
    } else {
      document.querySelector('#invalidPhone').innerHTML = 'Format saisi incorrect';
      return false;
    }
  };
  // Ecoute de la saisie de l'adresse
  form.address.addEventListener('change', function() { checkAddress(this); });
  // Validation de l'adresse
  const checkAddress = function(inputAddress) {
    let msg;
    let valid = false;
    if (inputAddress.value.length < 2) {
      msg = "L'adresse doit comporter au moins 2 caractères"
    } else {
      msg = "Format correct";
      valid = true;
    }
    if (valid) {
      document.querySelector('#invalidAddress').innerHTML = '';
      return true;
    } else {
      document.querySelector('#invalidAddress').innerHTML = `${msg}`;
      return false;
    }
  };
  // Ecoute de la saisie du code postal
  form.zip.addEventListener('change', function() { checkZip(this); });
  // Validation du code postal
  const checkZip = function(inputZip) {
    let zipRegExp = new RegExp('[0-9]{5}','g');
    if (zipRegExp.test(inputZip.value)) {
      document.querySelector('#invalidZip').innerHTML = '';
      return true;
    } else {
      document.querySelector('#invalidZip').innerHTML = 'Format saisi incorrect';
      return false;
    }
  };
  // Ecoute de la saisie de la ville
  form.city.addEventListener('change', function() { checkCity(this); });
  // Validation de la ville
  const checkCity = function(inputCity) {
    let msg;
    let valid = false;
    if (inputCity.value.length < 2) {
      msg = "La ville ou commune doit comporter au moins 2 caractères"
    } else {
      msg = "Format correct";
      valid = true;
    }
    if (valid) {
      document.querySelector('#invalidCity').innerHTML = '';
      return true;
    } else {
      document.querySelector('#invalidCity').innerHTML = `${msg}`;
      return false;
    }
  };
  // Ecoute de la soumission du formulaire
  form.addEventListener('submit', function(e) {
    // Désactivation du boutton
    e.preventDefault();
    // Test pour vérifier que tous les contrôles sont OK
    if (checkLastName(form.lastName) && checkFirstName(form.firstName) && checkEmail(form.email) && checkPhone(form.phone) && checkAddress(form.address) && checkZip(form.zip) && checkCity(form.city)) {
      // Résultat du test en console
      console.log('Saisie validée');
      // Récupération du panier à partir du stockage local
      let basket = JSON.parse(localStorage.getItem('basket'));
      console.log("Vérification du contenu du panier :", basket);
      // Création d'un tableau pour stocker les ID des produits
      let products = [];
      for (let product of basket) {
        products.push(product._id);
      }
      // Contrôles des données en console
      console.log("Tableau avec les ID produits :", products);
      // Création de l'objet commande
      const order = {
        contact : {
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            address: form.address.value,
            city: form.city.value,
            email: form.email.value
        },
        products: products
      };
      // Contrôle des données en console
      console.log("Commande", order);
      // Stockage de la commande et du total à payer
      localStorage.setItem("order", JSON.stringify(order));
      localStorage.setItem("orderTotal", document.querySelector('#toPay').textContent);
      // Vidange du panier et du compteur d'articles
      localStorage.removeItem('basket');
      localStorage.removeItem('basketCount');
      // Redirection vers la page de commande
      window.location.href = "order.html";
    } else {
      // Résultat du test en console
      console.log('Saisie non validée');
    }
  });
}