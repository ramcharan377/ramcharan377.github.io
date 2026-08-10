/* ============================================================
   ATHYAM RAMCHARAN — PORTFOLIO JAVASCRIPT
   Minimal interactions for gameplay GIF zoom lightbox.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  const openLightbox = (imgSrc, imgAlt) => {
    if (lightbox && lightboxImg) {
      lightboxImg.src = imgSrc;
      lightboxCaption.textContent = imgAlt || 'Experiment Gameplay';
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeLightbox = () => {
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  // Add click listener to RL GIF elements and their parent boxes
  document.querySelectorAll('.rl-media-box, .rl-sub-box').forEach(box => {
    box.addEventListener('click', () => {
      const img = box.querySelector('img');
      if (img) {
        openLightbox(img.src, img.alt);
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });
});
