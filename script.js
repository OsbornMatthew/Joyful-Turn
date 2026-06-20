// Joyful Turn — small interactions

document.getElementById('year').textContent = new Date().getFullYear();

// mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============================================================
// HERO LOGO VIDEO — play → hold final frame 10s → repeat
// ============================================================
const heroVideo = document.querySelector('.hero-logo-video');

if (heroVideo) {
  // Remove loop attribute so we can control the cycle manually
  heroVideo.removeAttribute('loop');
  heroVideo.loop = false;

  let holdTimer = null;

  function startVideoPlay() {
    // Reset to beginning and play
    heroVideo.currentTime = 0;
    heroVideo.play().catch(() => {
      // Autoplay blocked — just leave it paused on first frame
    });
  }

  heroVideo.addEventListener('ended', () => {
    // Video finished — hold on last frame for 10 seconds, then loop
    clearTimeout(holdTimer);
    holdTimer = setTimeout(() => {
      startVideoPlay();
    }, 10000); // 10 000 ms = 10 seconds
  });

  // Kick off the first play
  startVideoPlay();
}

// ============================================================
// Prayer form — submit via fetch to Netlify, then show success
// ============================================================
const prayerForm = document.getElementById('prayerForm');
const prayerSuccess = document.getElementById('prayerSuccess');

if (prayerForm) {
  prayerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(prayerForm);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        prayerForm.hidden = true;
        prayerSuccess.hidden = false;
        prayerSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
      })
      .catch(() => {
        alert("Something went wrong sending your request. Please try again, or email us directly at joyfulturn@gmail.com.");
      });
  });
}