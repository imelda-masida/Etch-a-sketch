const conteneur = document.getElementById("grille");


const bouton = document.createElement("button");
bouton.innerText = "Nouvelle grille / Effacer";

document.body.insertBefore(bouton, conteneur);


function creerGrille(taille) {
    
    conteneur.innerHTML = ""; 

    const fragment = document.createDocumentFragment();
    const totalCarres = taille * taille;

    for (let i = 0; i < totalCarres; i++) {
        const carre = document.createElement("div");
        carre.classList.add("carre");

        
        carre.style.width = `calc(100% / ${taille})`;
        carre.style.height = `calc(100% / ${taille})`;

        // Effet de survol permanent (stylo)
        carre.addEventListener("mouseenter", () => {
            carre.classList.add("active");
        });

        fragment.appendChild(carre);
    }

    conteneur.appendChild(fragment);
}


bouton.addEventListener("click", () => {
    
    let saisie = prompt("Combien de carrés par côté pour la nouvelle grille ? (Maximum 100) :");
    
    
    if (saisie === null) return; 
    
    let nouvelleTaille = parseInt(saisie);

    
    if (isNaN(nouvelleTaille) || nouvelleTaille < 1 || nouvelleTaille > 100) {
        alert("Erreur : Veuillez entrer un nombre valide entre 1 et 100 !");
    } else {
        
        creerGrille(nouvelleTaille);
    }
});


creerGrille(16);
