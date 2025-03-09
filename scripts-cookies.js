// Vérifier si le consentement aux cookies est déjà donné
document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById("cookie-banner");
    if (getCookie("cookieConsent") === "accepted") {
        cookieBanner.style.display = "none";
    } else if (getCookie("cookieConsent") === "declined") {
        cookieBanner.style.display = "none";
    } else {
        cookieBanner.style.display = "flex";
    }
});

// Accepter les cookies
function acceptCookies() {
    setCookie("cookieConsent", "accepted", 365);
    document.getElementById("cookie-banner").style.display = "none";
    console.log("Cookies acceptés !");
}

// Refuser les cookies
function declineCookies() {
    setCookie("cookieConsent", "declined", 365);
    document.getElementById("cookie-banner").style.display = "none";
    console.log("Cookies refusés !");
}

// Fonction pour créer un cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Fonction pour lire un cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
    }
    return null;
}

// Vérifier si le consentement aux cookies existe déjà
function checkCookieConsent() {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
        document.getElementById("cookie-banner").style.display = "block";
    }
}

// Accepter les cookies
function acceptCookies() {
    localStorage.setItem("cookieConsent", "accepted");
    document.getElementById("cookie-banner").style.display = "none";
}

// Refuser les cookies
function declineCookies() {
    localStorage.setItem("cookieConsent", "declined");
    document.getElementById("cookie-banner").style.display = "none";
}

// Vérifier le consentement au chargement de la page
window.onload = checkCookieConsent;