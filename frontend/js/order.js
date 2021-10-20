// Déclaration et affectation de l'URL
const url = "http://localhost:3000/api/teddies/order";
// const total = localStorage.getItem(orderTotal);

fetch(url, {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    },
    body: localStorage.getItem("order")
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        // document.getElementById('order').setAttribute("class", " shadow alert alert-success mt-4");
        document.getElementById('order').innerHTML =
            `<p>Nous vous remercions pour votre achat.</p>
            <p>Votre commande de ${localStorage.getItem('orderTotal')} a été enregistrée sous la référence :</br><em>${data.orderId}.</em></p>
            <p class="mb-2">A très bientôt sur notre site.</p>`
    })
    .catch((err) => {
        alert("Il y a eu une erreur : " + err);
    })

    // function sendOrder() {
    //     fetch("http://localhost:3000/api/teddies/order", {
    //       method: "POST",
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-type': 'application/json'
    //       },
    //       body: JSON.stringify(order)
    //     })
    //       .then((response) => response.json())
    //       .then((data) => {
    //         // localStorage.clear();
    //         console.log(data)
    //         // localStorage.setItem("orderId", data.orderId);
    //         // localStorage.setItem("total", priceConfirmation[1]);
      
    //         //  On peut commenter cette ligne pour vérifier le statut 201 de la requête fetch. Le fait de préciser la destination du lien ici et non dans la balise <a> du HTML permet d'avoir le temps de placer les éléments comme l'orderId dans le localStorage avant le changement de page.
    //         // document.location.href = "confirmation.html";
    //       })
    //       .catch((err) => {
    //         alert("Il y a eu une erreur : " + err);
    //       });
    //   }