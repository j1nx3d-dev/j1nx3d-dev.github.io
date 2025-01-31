// Fonction pour afficher ou masquer les boutons flottants
window.onscroll = function() {
    // Vérifie la position du scroll
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        // Si l'utilisateur a scrollé plus de 100px, on affiche les boutons
        console.log("Scrolling down, buttons should appear!");
        document.getElementById("scrollToTopBtn").classList.add("show");
        document.getElementById("goToHomeBtn").classList.add("show");
    } else {
        // Si l'utilisateur est tout en haut de la page, on cache les boutons
        console.log("Top of the page, buttons should disappear.");
        document.getElementById("scrollToTopBtn").classList.remove("show");
        document.getElementById("goToHomeBtn").classList.remove("show");
    }
};

// Fonction pour remonter en haut de la page
function scrollToTop() {
    document.body.scrollTop = 0; // Pour Safari
    document.documentElement.scrollTop = 0; // Pour les autres navigateurs
    console.log("Scrolling back to top!");
}

// Fonction pour revenir à la page d'accueil (ou autre action)
function goToHomePage() {
    window.location.href = "index.html"; // Remplace par l'URL de ta page d'accueil
    console.log("Redirecting to home page!");
}
