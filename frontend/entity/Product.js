class Product {
    /**
    * Caractéristiques du produit acheté
    * @param {string} id
    * @param {string} name
    * @param {string} color
    * @param {number} price
    * @param {number} quantity
    */
    constructor (id,name,color,price,quantity) {
        this._id = id
        this._name = name
        this._color = color
        this._price = price
        this._quantity = quantity
    }
    // Getter et setter en ES6 : http://es6-features.org/#GetterSetter
    set id(id)                  { this._id = id }
    get id()                    { return this._id }
    set name(name)              { this._name = name }
    get name()                  { return this._name }
    set color(color)            { this._color = color }
    get color()                 { return this._color }
    set price(price)            { this._price = price }
    get price()                 { return this._price }
    set quantity(quantity)      { this._quantity = quantity }
    get quantity()              { return this._quantity }
    get priceTotal()            { return this._quantity * this._price }
}