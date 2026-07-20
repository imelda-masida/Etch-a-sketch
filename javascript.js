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

         carre.dataset.interactions = 0;


         carre.addEventListener("mouseenter", () => {
            let passages = parseInt(carre.dataset.interactions);

            if(passages === 0) {
                const r = nbentierAleatoire(256);
                const g = nbentierAleatoire(256);
                const b = nbentierAleatoire(256);

                carre.dataset.couleurOrigine = `${r}, ${g}, ${b}`;
                carre.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

            }

            if (passages < 10){
                passages++;
                carre.dataset.interactions = passages;

                const luminosite = 100 - (passages * 10);
                carre.style.filter = `brightness(${luminosite}%)`;
            }
         });

         fragment.appendChild(carre);

    }

    conteneur.appendChild(fragment);
}

bouton.addEventListener("click", () => {
     let saisie = prompt("Combien de carres par cote pour la nouvelle grille ? (Max 100) :");
     if (saisie === null) return;

     let nouvelleTaille = parseInt(saisie);

     if (isNaN(nouvelleTaille) || nouvelleTaille < 1 || nouvelleTaille > 100){
        alert("Erreur : Entre un nombre valide entre 1 et 100 ");
   }else {
    creerGrille(nouvelleTaille);
   }
});

creerGrille(16);