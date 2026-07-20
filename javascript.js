const conteneur = document.getElementById("grille");
const bouton = document.createElement("button");

bouton.innerText = "Nouvelle grille";
document.body.insertBefore(bouton, conteneur);

function nbentierAleatoire(max) {
    return Math.floor(Math.random() * max);
}


function creerGrille(taille) {
    conteneur.innerHTML= "";

    const fragment = document.createDocumentFragment();
    const totalcarres = taille * taille;
}