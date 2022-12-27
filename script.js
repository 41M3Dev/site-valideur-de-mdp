let group_form = document.querySelector(".group-form");
let input = group_form.password;
let chiffre = document.getElementById("chiffre");
let majuscule = document.getElementById("majuscule");
let minuscule = document.getElementById("minuscule");
let generique = document.getElementById("generique");
let carac = document.getElementById("carac");
input.addEventListener("input", function () {
    validation(this);

    if (!this.value) {
        remove();
    }
})

function validation(password) {

    if (/[0-9]{1}/.test(password.value)) {
        input.classList.remove("error");
        chiffre.classList.remove("error");

        input.classList.add("succes");
        chiffre.classList.add("succes");
    }
    else {
        input.classList.remove("succes");
        chiffre.classList.remove("succes");

        input.classList.add("error");
        chiffre.classList.add("error");
    }

    if (/[A-Z]{1}/.test(password.value)) {
        input.classList.remove("error");
        majuscule.classList.remove("error");

        input.classList.add("succes");
        majuscule.classList.add("succes")
    }
    else {
        input.classList.remove("succes");
        majuscule.classList.remove("succes");

        input.classList.add("error");
        majuscule.classList.add("error");
    }

    if (/[a-z]{1}/.test(password.value)) {
        input.classList.remove("error");
        minuscule.classList.remove("error");

        input.classList.add("succes");
        minuscule.classList.add("succes")
    }
    else {
        input.classList.remove("succes");
        minuscule.classList.remove("succes");

        input.classList.add("error");
        minuscule.classList.add("error");
    }
    if (/[!-/]{1}/.test(password.value)) {
        input.classList.remove("error");
        carac.classList.remove("error");

        input.classList.add("succes");
        carac.classList.add("succes");
    }
    else {
        input.classList.remove("succes");
        carac.classList.remove("succes");

        input.classList.add("error");
        carac.classList.add("error");
    }

    if (password.value.length >= 6) {
        generique.classList.remove("error");
        generique.classList.add("succes");
    }
    else {
        generique.classList.add("error");
        generique.classList.remove("succes");
    }
}

// if ((password.value.length >= 6) && (/[!-/]{1}/.test(password.value)) && (/[a-z]{1}/.test(password.value)) && (/[A-Z]{1}/.test(password.value)) && /[0-9]{1}/.test(password.value)) {
//     input.classList.remove("succes");
// }

function remove() {

    input.classList.remove("error");
    input.classList.remove("succes");

    chiffre.classList.remove("error");
    chiffre.classList.remove("succes");

    majuscule.classList.remove("succes");
    majuscule.classList.remove("error");

    minuscule.classList.remove("succes");
    minuscule.classList.remove("error")

    generique.classList.remove("succes")
    generique.classList.remove("error");

    carac.classList.remove("succes")
    carac.classList.remove("error");
}