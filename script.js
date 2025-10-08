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

window.addEventListener('load', () => {
  const headerHeight = 150; // hauteur du header
  const accueil = document.getElementById('Accueil');

  // Scroll direct pour mettre Accueil juste sous le header
  window.scrollTo({
    top: accueil.offsetTop - headerHeight,
    behavior: 'auto' // sans animation
  });
});

document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);

    const headerHeight = 150; // hauteur du header
    const extraSpace = 25; // espace “jeu” pour les autres sections
    
    let position;

    if(targetId === "Accueil") {
      // fait défiler Accueil pour qu'elle commence juste sous le header
      position = target.offsetTop - headerHeight;
    } else {
      // les autres sections gardent le petit "jeu"
      position = target.offsetTop - (headerHeight + extraSpace);
    }

    window.scrollTo({
      top: position,
      behavior: "smooth"
    });
  });
});


