document.addEventListener('DOMContentLoaded', function() {
    
    // --- Effet d'apparition au défilement (Fade-in on scroll) ---
    const sections = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // se déclenche quand 10% de l'élément est visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    console.log("Page chargée – Script d'interaction et d'animation actif.");

});