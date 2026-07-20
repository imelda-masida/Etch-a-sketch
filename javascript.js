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

    for (let i = 0; i < totalcarres; i++){
        const carre = document.createElement("div");
        carre.classList.add("carre");

        carre.style.width = `calc(100% / ${taille})`;
         carre.style.height = `calc(100% / ${taille})`;

         carre.dataset.interactions

    }
}