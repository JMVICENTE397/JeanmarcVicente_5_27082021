class Order {
    /**
    * Données de la commande à envoyer à l'API
    * @param {string} contact
    * @param {string} basket
    */
    constructor (contact, basket) {
        this._contact = contact;
        this._basket = basket;
    }
    // Getter et setter en ES6 : http://es6-features.org/#GetterSetter
    set contact(contact)    { this._contact = contact }
    get contact()           { return this._contact }
    set basket(basket)      { this._basket = basket }
    get basket()            { return this._basket }
}