const conteneur = document.getElementById("grille");

//pour la performence,je crée un fragment qui contiendra les divs de la grille
const fragment = document.createDocumentFragment();

for (let i = 0; i < 256; i++) {
    const carre = document.createElement("div");
    carre.classList.add("carre");

    fragment.appendChild(carre);
}

conteneur.appendChild(fragment);