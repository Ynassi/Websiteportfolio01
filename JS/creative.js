window.onload = function() {
    // Récupérer toutes les progress bars
    const progressBars = document.querySelectorAll('.progress-bar');

    // Parcourir chaque progress bar et animer la largeur
    progressBars.forEach(bar => {
        const progressValue = bar.getAttribute('data-progress');
        const fillElement = document.createElement('div');
        fillElement.classList.add('fill');
        
        // Ajouter l'élément de remplissage à la progress bar
        bar.appendChild(fillElement);
        
        // Cacher le texte au début de l'animation
        const span = bar.querySelector('span');
        span.style.opacity = 0; // Masquer le texte initialement

        // Définir la largeur dynamiquement à l'aide de l'attribut data-progress
        setTimeout(() => {
            fillElement.style.width = `${progressValue}%`;
        }, 500); // Délai léger avant le début de l'animation

        // Afficher le texte en fade-in après l'animation
        setTimeout(() => {
            span.style.opacity = 1; // Applique le fade-in en rendant le texte visible
        }, 1500); // Délai de 1.5 seconde (après la fin de l'animation)
    });
};
