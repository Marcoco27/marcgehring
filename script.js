document.addEventListener('DOMContentLoaded', function() {
    
    // --- Effet d'apparition au défilement (Fade-in on scroll) ---
    // Utilise l'API IntersectionObserver pour plus de performance.
    
    const sections = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // par rapport au viewport
        rootMargin: '0px',
        threshold: 0.1 // se déclenche quand 10% de l'élément est visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si l'élément entre dans le viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // On arrête d'observer cet élément une fois qu'il est visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // On observe chaque section
    sections.forEach(section => {
        observer.observe(section);
    });

    console.log("Page chargée – Script d'interaction et d'animation actif.");

});