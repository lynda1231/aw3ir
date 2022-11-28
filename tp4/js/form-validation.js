window.onload = function () {
    displayContactList();

    console.log("DOM resady!");
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("form submitted!");
        test()
    });

    document.querySelector("#gps").addEventListener("click", function (event) {
        getLocation();
    });
};



function calcNbChar(id) {
    document.querySelector(`#${id} + span`).textContent = document.querySelector(`#${id}`).value.length + 1;
}

function validateDate() {
    let heureValide = true;
    let heureActuelle = Date.now();
    let date = new Date(document.querySelector("#Datedenaissance").value);
    if (heureActuelle < date) {
        heureValide = false;
    }
    return heureValide;
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateNombrecharactere(text) {
    let name = document.getElementById("Nom").value;
    let prenom = document.getElementById("Prenom").value;
    let adresse = document.getElementById("Adresse").value;
    let valide = true
    if (name.length < 5 || prenom.length < 5 || adresse.length < 5) {
        valide = false;
    }
    return valide;

}


function test() {
    let name = document.getElementById("Nom").value;
    let prenom = document.getElementById("Prenom").value;
    let adresse = document.getElementById("Adresse").value;
    let mail = document.getElementById("Email").value;
    let date = document.getElementById("Datedenaissance").value;
    var myModal = new bootstrap.Modal(document.getElementById("myModal"));

    if (validateDate(date) == false || validateEmail(mail) == false || validateNombrecharactere(name) == false
        || validateNombrecharactere(name) == false || validateNombrecharactere(prenom) == false || validateNombrecharactere(adresse) == false) {

        document.querySelector(".modal-title").textContent = "Erreur dans le formulaire";
        document.querySelector(".modal-body").innerHTML = "tous les champs sont obligatoires";
        myModal.show();
    }

    else {
        contactStore.add(name, prenom, adresse, mail, date);
        document.querySelector("table tbody").innerHTML =
            document.querySelector("table tbody").innerHTML +
            ` <tr>
                    <td>${name}</td>
                    <td>${prenom}</td>
                    <td>${date}</td>
                    <td>${adresse}</td>
                    <td>${mail}</td>
                </tr>`
    }
}

function displayContactList() {
    const contactListString = localStorage.getItem('contactList'); // ici on va récupérer la liste en forme de chaine de caractère (string)
    const contactList = contactListString ? JSON.parse(contactListString) : [];

    for (const contact of contactList) {
        document.querySelector("table tbody").innerHTML +=
            `<tr>
    <td>${contact.name}</td>
    <td> ${contact.firstName} </td>
    <td>${contact.date}</td>
    <td>${contact.adress}</td>
    <td>${contact.mail}</td>
    <tr>`;
    }

}