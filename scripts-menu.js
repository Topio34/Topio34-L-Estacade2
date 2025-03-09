// Vérifier si le fichier JS est bien chargé
console.log("Le fichier JS est bien chargé !");

// Gestion du défilement des sliders horizontaux
const sliders = document.querySelectorAll('.slider-horizontal');

sliders.forEach(slider => {
    const list = slider.querySelector('ul');
    if (list) {
        slider.addEventListener('wheel', (event) => {
            event.preventDefault();
            list.scrollBy({
                left: event.deltaY < 0 ? -200 : 200,
                behavior: 'smooth'
            });
        });
    }
});

// Fonction pour afficher le pop-up avec l'image
function showPopup(imagePath) {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");

    if (popup && popupImg) {
        popupImg.src = imagePath;
        popup.style.display = "block";
    }
}

// Fonction pour fermer le pop-up
function closePopup() {
    const popup = document.getElementById("popup");
    if (popup) {
        popup.style.display = "none";
    }
}

// Fermer le pop-up si on clique en dehors de l'image
window.addEventListener('click', (event) => {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    if (popup && event.target === popup && event.target !== popupImg) {
        popup.style.display = "none";
    }
});

// Gérer le bouton de fermeture du pop-up
const closeBtn = document.querySelector('.close-btn');
if (closeBtn) {
    closeBtn.addEventListener('click', closePopup);
}
