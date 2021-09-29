/* Travail de Keven Aubin */

/* Fonction mettreGras(), trouvant l'élément dont l'ID est en argument et changeant son style. */

function mettreGras(ID){
  document.getElementById(ID).style.fontWeight = "bold";
}

/* Fonction calculUS() qui demande à l'utilisateur d'entrer un montant CAD à convertir
 * en USD. La conversion (arrondie à deux chiffres après la virgule) est ensuite
 * affichée à l'écran. Si le nombre entré n'est pas un nombre
 * ou si l'utilisateur n'entre rien, un message différent est affiché.*/

function calculUS(){
  var nombre = prompt("Veuillez entrer le montant CAD à convertir an USD :")
  if (Number.isNaN(parseInt(nombre)))
    alert("Au revoir")
  else {
    var converti = nombre / 1.32;
    alert(nombre + "$ CAD converti en USD donne "+converti.toFixed(2) + "$");
  }
}
