window.addEventListener('load', () => {
    const listItems = document.querySelectorAll('ul li'); // Sélectionner tous les éléments <li>
    
    // On ajoute la classe 'visible' à chaque <li> avec un délai progressif
    listItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, index * 1000); // 
    });
});
window.addEventListener('load', () => {
    const title = document.querySelector('h1'); // Sélectionner le titre h1 ou celui avec une autre classe spécifique
    
    // Après le chargement de la page, on ajoute la classe 'fade-in' au titre
    title.classList.add('fade-in');
});
