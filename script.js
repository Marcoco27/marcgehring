document.addEventListener('DOMContentLoaded', () => {
    // --- Animation d'apparition au défilement ---
    const sections = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // --- NOUVEAU : Logique de copie pour l'adresse email ---
    const emailLink = document.getElementById('email-link');
    if (emailLink) {
        const emailIcon = document.getElementById('email-icon');
        const emailText = document.getElementById('email-text');
        const originalIconClass = emailIcon.className;
        const originalText = emailText.textContent;
        const emailToCopy = emailLink.getAttribute('data-email');

        emailLink.addEventListener('click', (event) => {
            // Empêche le comportement par défaut du lien mailto:
            event.preventDefault();

            // Utilise l'API moderne et sécurisée du presse-papiers
            navigator.clipboard.writeText(emailToCopy).then(() => {
                // Succès de la copie : on donne un retour visuel
                emailIcon.className = 'fa-solid fa-check';
                emailText.textContent = 'Copié !';
                emailLink.style.color = 'var(--color-live)'; // Changement de couleur pour confirmation

                // On remet le texte et l'icône d'origine après 2 secondes
                setTimeout(() => {
                    emailIcon.className = originalIconClass;
                    emailText.textContent = originalText;
                    emailLink.style.color = ''; // Rétablit la couleur par défaut
                }, 2000);

            }).catch(err => {
                // En cas d'erreur (très rare sur les navigateurs modernes)
                console.error('Erreur lors de la copie de l\'email :', err);
                emailText.textContent = 'Erreur';
                 setTimeout(() => {
                    emailText.textContent = originalText;
                }, 2000);
            });
        });
    }
});
