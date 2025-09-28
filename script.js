const video = document.getElementById('video-accueil');
const toggleBtn = document.getElementById('toggle-sound');
const icon = document.getElementById('sound-icon');

// L'état du son
let muted = true; // de base muet (obligatoire pour autoplay)

toggleBtn.addEventListener('click', () => {
  if (muted) {
    // Activer le son
    video.muted = false;
    video.volume = 1; // plein volume
    icon.textContent = '🔊'; // icône son
    muted = false;
  } else {
    // Couper le son
    video.muted = true;
    icon.textContent = '🔇'; // icône muet
    muted = true;
  }
});
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  video.style.transform = `translateY(${scrollY * -0.2}px)`; 
});

