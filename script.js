// Script minimal pour des interactions futures
document.addEventListener('DOMContentLoaded', function() {
    console.log("Page chargée – Prêt pour des interactions !");
    // Exemple : Ajouter un effet au survol des liens
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#004499';
        });
        link.addEventListener('mouseleave', () => {
            link.style.color = 'var(--color-primary)';
        });
    });
});