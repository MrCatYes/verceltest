var validerFormulaire = document.getElementById("ajouter");
validerFormulaire.addEventListener("click",validation);

var boutonSupprimer = document.getElementById("supprimer");
boutonSupprimer.addEventListener("click",supprimer);

var nomProduit = document.getElementById("nomProduit");
var erreurNom = document.getElementById("erreurNomProduit");
var prix = document.getElementById("prix");
var erreurPrix = document.getElementById("erreurPrix");
var quantite = document.getElementById("quantite");
var erreurQuantite = document.getElementById("erreurQuantite");
var fournisseur = document.getElementById("fournisseur");
var erreurFournisseur = document.getElementById("erreurFournisseur");
var dateAchat = document.getElementById("dateAchat");
var erreurDate = document.getElementById("erreurDate");
var tableau = document.getElementById("tableauResultats");
var codeValidationNumero = /^[0-9]*$/;
var validationDate= /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;

function validation(event){
  erreurNom.style.visibility="hidden";
  erreurPrix.style.visibility="hidden";
  erreurQuantite.style.visibility="hidden";
  erreurFournisseur.style.visibility="hidden";
  erreurDate.style.visibility="hidden";

  if (nomProduit.validity.valueMissing){
    event.preventDefault();
    erreurNom.style.visibility="visible";
  }
  else if (!codeValidationNumero.test(prix.value) || parseInt(prix.innerText) <= 0){
    event.preventDefault();
    erreurPrix.style.visibility="visible";
  }
  else if (!codeValidationNumero.test(quantite.value) || parseInt(quantite.innerText) <= 0){
    event.preventDefault();
    erreurQuantite.style.visibility="visible";
  }
  else if (fournisseur.validity.valueMissing){
    event.preventDefault();
    erreurFournisseur.style.visibility="visible";
  }
  else if (validationDate.test(dateAchat.value)){
    event.preventDefault();
    erreurDate.style.visibility="visible";
  }
  else {
    var nvRang = tableau.insertRow(1);
    var item0 = nvRang.insertCell(0);
    var item1 = nvRang.insertCell(1);
    var item2 = nvRang.insertCell(2);
    var item3 = nvRang.insertCell(3);
    var item4 = nvRang.insertCell(4);
    var item5 = nvRang.insertCell(5);
    item0.textContent = nomProduit.value;
    item1.textContent = prix.value;
    item2.textContent = quantite.value;
    item3.textContent = fournisseur.value;
    item4.textContent = dateAchat.value;
    var id = nomProduit.value + prix.value;
    item5.innerHTML = "<input type='radio' name='groupe' id="+id+">"
  }
}

// La fonction supprimer de fonctionne pas convenablement.
// Il est possible de supprimer le tableau en sélectionnant le bouton du premier enregistrement, mais il est impossible de supprimer une ligne en particulier.

function supprimer(event){
  var nbLignes = tableau.rows.length;
  for(var i= nbLignes - 1; i > 0; i--) {
    var ligne = tableau.rows[i];
    var valeurs = ligne.cells[0].innerText+ ligne.cells[1].innerText;
    var rdb = document.getElementById(valeurs);
    if(rdb.checked){
        tableau.deleteRow(i);
    }
}
}
