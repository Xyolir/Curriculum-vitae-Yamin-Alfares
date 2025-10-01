const video = document.getElementById('video-accueil');
const toggleBtn = document.getElementById('toggle-sound');
const icon = document.getElementById('sound-icon');

// L'état du son
let muted = true; // de base muet pour autoplay

// S'assurer que la vidéo peut être jouée avec son après interaction
toggleBtn.addEventListener('click', () => {
  video.muted = !video.muted;
  icon.textContent = video.muted ? '🔇' : '🔊';
  if (!video.muted) video.play(); // relance la vidéo pour certains navigateurs
});

// Si tu veux garder le défilement de la vidéo désactivé pour Accueil, supprime cette partie
// window.addEventListener('scroll', () => {
//   const scrollY = window.scrollY;
//   video.style.transform = `translateY(${scrollY * -0.2}px)`; 
// });
