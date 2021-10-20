class Contact {
    /**
     * Coordonnées des personnes ayant réalisé une commande
     * @param {string} firstName 
     * @param {string} lastName 
     * @param {string} address 
     * @param {string} city
     * @param {string} email
     */
    constructor (firstName, lastName, address, city, email) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._address = address;
        this._city = city;
        this._email = email;
    }
    // Getter et setter en ES6 : http://es6-features.org/#GetterSetter
    set firstName(firstName)    { this._firstName = firstName }
    get firstName()             { return this._firstName }
    set lastName(lastName)      { this._lastName = lastName }
    get lastName()              { return this._lastName }
    set address(address)        { this._address = address }
    get address()               { return this._address }
    set city(city)              { this._city = city }
    get city()                  { return this._city }
    set email(email)            { this._email = email }
    get email()                 { return this._email }
}