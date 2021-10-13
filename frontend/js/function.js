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

function displayForm() {
  document.getElementById('displayFormBtn').addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById('form').setAttribute("class","container mt-5");
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
      document.getElementById('input').innerHTML = inputStructure;
      validCommand();
  })
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

function validCommand() {
  // Création de la constante form afin de pouvoir utiliser la notation dot
  const form = document.querySelector('#contactForm');
  // Ecoute de la saisie du nom
  form.lastName.addEventListener('change', function() {
    checkLastName(this);
  });
  // Ecoute de la saisie du prénom
  form.firstName.addEventListener('change', function() {
    checkFirstName(this);
  });
  // Ecoute de la saisie de l'email
  form.email.addEventListener('change', function() {
    checkEmail(this);
  });
  // Ecoute de la saisie de numéro de téléphone
  form.phone.addEventListener('change', function() {
    checkPhone(this);
  });
  // Ecoute de la saisie de l'adresse
  form.address.addEventListener('change', function() {
    checkAddress(this);
  });
  // Ecoute de la saisie du code postal
  form.zip.addEventListener('change', function() {
    checkZip(this);
  });
    // Ecoute de la saisie de la ville
  form.city.addEventListener('change', function() {
    checkCity(this);
  });
  // Ecoute de la soumission du formulaire
  form.addEventListener('submit', function(e) {
    // Désactivation du boutton
    e.preventDefault();
    if (checkLastName(form.lastName) && checkFirstName(form.firstName) && checkEmail(form.email) && checkPhone(form.phone) && checkAddress(form.address) && checkZip(form.zip) && checkCity(form.city)) {
      // console.log('Saisie validée');
      window.location.href = "command.html";
    } else {
      // console.log('Saisie non validée');
    }
  });
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
}