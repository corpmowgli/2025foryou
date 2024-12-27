
document.addEventListener("DOMContentLoaded", () => {
    const memeContainer = document.querySelector('.meme-container');

    // Liste des GIFs
    const gifs = [
        'memes/meme1.gif',
        'memes/meme2.gif',
        'memes/meme3.gif',
        'memes/meme4.gif',
        'memes/meme5.gif'
    ];

    // Charger et afficher tous les GIFs
    gifs.forEach((gif, index) => {
        const img = document.createElement('img');
        img.src = gif;
        img.alt = `Mème ${index + 1}`;
        img.classList.add('meme');

        // Position aléatoire mais contrôlée
        const maxWidth = window.innerWidth - window.innerWidth * 0.2; // Réduit pour éviter la sortie
        const maxHeight = window.innerHeight - window.innerHeight * 0.2;

        img.style.left = `${Math.random() * maxWidth}px`;
        img.style.top = `${Math.random() * maxHeight}px`;
        img.style.animationDuration = `${Math.random() * 5 + 15}s`;

        memeContainer.appendChild(img);
    });

    // Ajouter un gestionnaire de contrôle de musique
    const backgroundMusic = document.getElementById('background-music');
    const toggleMusicButton = document.getElementById('toggle-music');
    let isPlaying = true;

    toggleMusicButton.addEventListener('click', () => {
        if (isPlaying) {
            backgroundMusic.pause();
            toggleMusicButton.textContent = '🎵 Reprendre la musique';
        } else {
            backgroundMusic.play();
            toggleMusicButton.textContent = '🎵 Arrêter la musique';
        }
        isPlaying = !isPlaying;
    });
});
