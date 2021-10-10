class Product {
    constructor (id,name,color,price,quantity) {
        this._id = id;
        this._name = name;
        this._color = color;
        this._price = price;
        this._quantity = quantity;
        // this._priceTotal = this.price * this.quantity;
    }
set id(id) {
    this._id = id
}
get id() {
    return this._id
}
set name(name) {
    this._name = name
}
get name() {
    return this._name
}
set color(color) {
    this._color = color
}
get color() {
    return this._color
}

set price(price) {
    this._price = price
}
get price() {
    return this._price
}

set quantity(quantity) {
    this._quantity = quantity
}
get quantity() {
    return this._quantity
}

// set priceTotal(priceTotal) {
//     this._priceTotal = priceTotal
// }
// get priceTotal() {
//     return this._priceTotal
// }



get priceTotal() {
    return this._quantity * this._price
}
}