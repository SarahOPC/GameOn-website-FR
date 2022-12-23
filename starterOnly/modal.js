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
  getFromLocalStorage();
}

// close modal element
const closeBtn = document.getElementsByClassName("close")[0];
closeBtn.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}

// Regex
const nameRegex = /^[a-zA-Z]{2,}([^0-9]*)$/; // Au moins deux lettres, pas de chiffre
const emailRegex = /^((?!\.)[\w_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/; // Pas de . en debut ou fin mais ok au milieu, ok pour double nom de domaine, pas d'espace, pas de cq speciaux
const birthdateRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/; // YYYY/MM/DD
const quantityRegex = /^[0-9]*$/; // Que des chiffres

function firstRegexValidation() {
  if (!nameRegex.test(document.getElementById("first").value) || document.getElementById("first").value == "" || document.getElementById("first").value.length < 2) {
    document.getElementById("errorFirst").textContent="Veuillez entrer 2 caractères ou plus pour le champ du prénom."
  }
  else {
    document.getElementById("errorFirst").textContent="";
  }
}

  function lastRegexValidation() {
    if(!nameRegex.test(document.getElementById("last").value) || document.getElementById("last").value == "" || document.getElementById("last").value.length < 2) {
      document.getElementById("errorLast").textContent="Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    }
    else {
      document.getElementById("errorLast").textContent="";
    }
  }

  function emailRegexValidation() {
    if(!emailRegex.test(document.getElementById("email").value) || document.getElementById("email").value == "") {
      document.getElementById("errorEmail").textContent="Une erreur s'est glissée dans votre formulaire au niveau de l'email.";
    }
    else {
      document.getElementById("errorEmail").textContent="";
    }
  }

  function birthdateRegexValidation() {
    if(!birthdateRegex.test(document.getElementById("birthdate").value) || document.getElementById("birthdate").value == "") {
      document.getElementById("errorBirthdate").textContent="Vous devez entrer votre date de naissance";
    }
    else {
      document.getElementById("errorBirthdate").textContent="";
    }
  }

  function quantityRegexValidation() {
    if(!quantityRegex.test(document.getElementById("quantity").value) || document.getElementById("quantity").value == "") {
      document.getElementById("errorQuantity").textContent="Une erreur s'est glissée dans votre formulaire au niveau de la quantité";
    }
    else {
      document.getElementById("errorQuantity").textContent="";
    }
  }

  function regexValidation() {
    if(nameRegex.test(document.getElementById("first").value) && nameRegex.test(document.getElementById("last").value) 
    && emailRegex.test(document.getElementById("email").value) && birthdateRegex.test(document.getElementById("birthdate").value) 
    && quantityRegex.test(document.getElementById("quantity").value)) {
      return true;
    }
  }

// Check regex while typing

function checkWhileTyping() {
  document.getElementById("first").addEventListener('input', firstRegexValidation);
  document.getElementById("last").addEventListener('input', lastRegexValidation);
  document.getElementById("email").addEventListener('input', emailRegexValidation);
  document.getElementById("birthdate").addEventListener('input', birthdateRegexValidation);
  document.getElementById("quantity").addEventListener('input', quantityRegexValidation);
}

checkWhileTyping();

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
  if(!document.getElementById("checkbox1").checked) {
  window.alert("Vous devez vérifier que vous acceptez les termes et conditions.");
  } else {
    return true;
  }
};

// Retrieve elements from localStorage
function getFromLocalStorage() {
  modalbg.style.display = "block";
  const first = localStorage.getItem("firstName");
  const last = localStorage.getItem("lastName");
  const email = localStorage.getItem("email");
  const birthdate = localStorage.getItem("birthdate");
  const quantity = localStorage.getItem("quantity");

  document.getElementById("first").value = first;
  document.getElementById("last").value = last;
  document.getElementById("email").value = email;
  document.getElementById("birthdate").value = birthdate;
  document.getElementById("quantity").value = quantity;
}

// Validation on submit
function validate() {

  // Keep elements of form in localStorage
  localStorage.setItem("firstName", document.getElementById("first").value);
  localStorage.setItem("lastName", document.getElementById("last").value);
  localStorage.setItem("email", document.getElementById("email").value);
  localStorage.setItem("birthdate", document.getElementById("birthdate").value);
  localStorage.setItem("quantity", document.getElementById("quantity").value);

  if (regexValidation() && radioSelected() && checkboxSelected()) {
    const myModal = document.querySelector(".modal-body");
    myModal.textContent="Merci pour votre inscription";
    myModal.setAttribute("id", "thanksModal");
    const button = document.createElement('button');
    button.setAttribute("id", "myCloseButton");
    const text = document.createTextNode("Fermer");
    button.appendChild(text);
    myModal.appendChild(button);
    button.addEventListener("click", () => {
      closeModal();
      location.reload();
      localStorage.clear();
    });
    return true;
  } else {
    window.alert("Une erreur s'est produite lors de l'envoi du formulaire");
    return false;
  }
};