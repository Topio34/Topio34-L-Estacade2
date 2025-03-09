// 📞 Bouton pour appeler (vérifier le support mobile)
const callButton = document.querySelector('.call-button');
if (callButton) {
    callButton.addEventListener('click', () => {
        if (!navigator.userAgent.toLowerCase().includes('mobile')) {
            alert("Cette fonctionnalité est disponible uniquement sur mobile.");
        }
    });
}

// 🗺️ Initialiser la carte Google Maps
function initMap() {
    const estacadeLocation = { lat: 43.4017, lng: 3.6963 }; // Coordonnées de l'Estacade - Sète
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: estacadeLocation
    });
    new google.maps.Marker({
        position: estacadeLocation,
        map: map,
        title: "L'Estacade - Sète"
    });
}

// 💬 Système de commentaires local (pas de base de données)
const commentForm = document.querySelector('.comment-form');
const commentList = document.getElementById('comment-list');

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const comment = document.getElementById('comment').value.trim();

    if (username && comment) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${username} :</strong> ${comment}`;
        commentList.appendChild(listItem);
        commentForm.reset();
    } else {
        alert("Merci de remplir tous les champs.");
    }
});
