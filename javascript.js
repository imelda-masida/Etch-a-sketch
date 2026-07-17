const conteneur = document.getElementById("grille");

const button = document.createElement("button");
button.textContent = "Mettez à jour la grille";
document.body.insertBefore(button, conteneur);


function creerGrille(taille) {
    conteneur.innerHTML = "";

    const fragment = document.createDocumentFragment();
    const totalcarres = taille * taille;

    for (let i = 0; i < totalcarres; i++) {
        const carre = document.createElement("div");
        carre.classList.add("carre");

        carre.style.width = `calc(100% / ${taille})`;
        carre.style.height = `calc(100% / ${taille})`;

        carre.addEventListener("mouseenter", () => {
            carre.classList.add("active");
        });

        fragment.appendChild(carre);
    }

    conteneur.appendChild(fragment);

 }

 button.addEventListener("click", () => {
   let choix = prompt("Entrez le nombre de carres par cote (maximum 100) :");

   if(choix === null) return;

   let nouvelleTaille = parseINT(choix);

   if (isNaN(nouvelleTaille)
|| nouvelleTaille < 1 || nouvelleTaille > 100) {
    alert("Veuillez entrer un nomber valide entre 1 et 100");
    }

    else {
        creerGrille(nouvelleTaille);
}

 });

 creerGrille(16);