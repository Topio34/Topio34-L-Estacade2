// Vérifier si le fichier JS est bien chargé
console.log("Le fichier JS est bien chargé !");

// Gestion du défilement automatique des sliders horizontaux
const sliders = document.querySelectorAll('.slider-horizontal');

sliders.forEach(slider => {
    const list = slider.querySelector('ul');
    if (list) {
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // Ajuster la vitesse du scroll
            slider.scrollLeft = scrollLeft - walk;
        });

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
ument.getElementById("popup-img");

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
