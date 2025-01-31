// scripts.js

// Fonction pour afficher / cacher le menu burger
function toggleMenu() {
    var menu = document.getElementById('navLinksMobile');
    menu.classList.toggle('active');  // Affiche ou cache le menu mobile
    var burger = document.querySelector('.burger-menu');
    burger.classList.toggle('active');  // Modifie l'icône du menu burger
}

// Fonction pour remonter en haut avec une animation fluide
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fonction pour aller à la page d'accueil
function goToHome() {
    window.location.href = '/';  // Remplace par l'URL de la page d'accueil
}

// Affichage des boutons au défilement
window.onscroll = function() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    var goToHomeBtn = document.getElementById('goToHomeBtn');

    // Bouton "Remonter en haut"
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.classList.add('show');  // Affiche le bouton "Remonter"
    } else {
        scrollToTopBtn.classList.remove('show');  // Cache le bouton "Remonter"
    }

    // Bouton "Retour à la maison"
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        goToHomeBtn.classList.add('show');  // Affiche le bouton "Retour à l'accueil"
    } else {
        goToHomeBtn.classList.remove('show');  // Cache le bouton "Retour à l'accueil"
    }
};
