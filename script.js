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

// Prayer form — submit via fetch to Netlify, then show success card in place
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
