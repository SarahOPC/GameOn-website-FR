function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal element
const closeBtn = document.getElementsByClassName("close")[0];
closeBtn.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}

// Regex
const nameRegex = /^.{2,}$/; // Au moins deux lettres
const emailRegex = /^((?!\.)[\w_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/; // Pas de . en debut ou fin mais ok au milieu, ok pour double nom de domaine, pas d'espace, pas de cq speciaux
const quantityRegex = /^[0-9]*$/; // Que des chiffres

function regexValidation() {
  if (!nameRegex.test(document.getElementById("first").value)) {
    window.alert("Une erreur s'est glissée dans votre formulaire au niveau du prénom");
  } else if(!nameRegex.test(document.getElementById("last").value)) {
    window.alert("Une erreur s'est glissée dans votre formulaire au niveau du nom");
  } else if(!emailRegex.test(document.getElementById("email").value)) {
    window.alert("Une erreur s'est glissée dans votre formulaire au niveau de l'email");
  } else if(!quantityRegex.test(document.getElementById("quantity").value)) {
    window.alert("Une erreur s'est glissée dans votre formulaire au niveau de la quantité");
  } else {
    return true;
  }
};

// Radio button is selected
function radioSelected() {
  if(document.querySelector('input[name="location"]:checked') == null) {
  window.alert("Vous devez choisir une option!");
  } else {
    return true;
  }
};

// Checkbox1 is selected
function checkboxSelected() {
  if(document.getElementById('input[id="checkbox1"]:checked') == null) {
  window.alert("Vous devez accepter nos conditions d'utilisation pour pouvoir valider le formulaire !");
  } else {
    return true;
  }
};

// Validation on submit
function validate() {
  if (regexValidation() && radioSelected() && checkboxSelected()) {
    window.alert("Votre formulaire a bien été envoyé à nos services");
  } else {
    window.alert("Une erreur s'est produite lors de l'envoi du formulaire");
  }
};