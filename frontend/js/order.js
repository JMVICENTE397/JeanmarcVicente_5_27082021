// Envoi des données vers le back end avec la méthode fetch
fetch("http://localhost:3000/api/teddies/order", {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    },
    body: localStorage.getItem('order')
})
    // Formatage de la réponse au format json
    .then((response) => response.json())
    // Traitement des données
    .then((order) => {
        // Contrôle console
        console.log("Vérification du contenu de l'objet retourné par le back end :", order);
        // Structure HTML (avec Bootstrap)
        const confirmStructure =
            `<p>${order.contact.firstName} ${order.contact.lastName},</p>
            <p>Nous vous remercions pour votre achat.</p>
            <p>Votre commande de ${localStorage.getItem('orderTotal')} a été enregistrée avec la référence :</p>
            <p><em>${order.orderId}.</em></p>
            <p class="mb-2">A très bientôt sur notre site.</p>`
        // Injection du HTML
        document.getElementById('order').innerHTML = confirmStructure;
        // Vidange du local storage
        localStorage.clear();
    })
    // Gestion des erreurs
    .catch((err) => {
        alert("L'erreur suivante est apparue : " + err);
    })