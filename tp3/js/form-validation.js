window.onload = function () {

    console.log("DOM resady!");
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("form submitted!");
        test()
    });


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
            adresse = document.getElementById("Adresse").value;
            document.querySelector(".modal-title").textContent = "Bienvenue " + prenom;
            document.querySelector(".modal-body").innerHTML = "Vous etes nés le " + date + " " + `et vous habitez á 
    <a href= 'https://maps.google.com/maps?q=${adresse}'> 
        <img style="max-width: 100%" src='https://maps.googleapis.com/maps/api/staticmap?markers=${adresse}&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg' > ${adresse}</a>`;
            myModal.show();
        }
    }
};