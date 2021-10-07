// Représentation du format d'un article

class Product {
    constructor(jsonProduct){
        this._id = jsonProduct.id;
        this.name = jsonProduct.name;
        this.price = jsonProduct.price;
        this.imageUrl = jsonProduct.imageUrl;
        this.description = jsonProduct.description;
        this.colors = jsonProduct.colors;
        this.quantity = jsonProduct.quantity;
        // Les 7 lignes du dessus peuvent s'écrire plus facilement avec la fonction assign() :
        // jsonArticle && Object.assign(this, jsonArticle); 
    }

    // Créer une méthode pour afficher les montants en devise.

}

class ProductBasketGroupBy {

}