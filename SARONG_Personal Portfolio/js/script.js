(() => {

  const $ = sel => document.querySelector(sel);
  const $$ = sel => document.querySelectorAll(sel);

  /* NAV TOGGLE */
  const navToggle = $('#navToggle');
  const siteNav = $('#siteNav');

  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });

  /* SMOOTH SCROLL */
  $$('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const id = link.getAttribute('href').substring(1);
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
      siteNav.classList.remove('open');
    });
  });

  /* CONTACT FORM */
  const form = $('#contactForm');
  const feedback = $('#formFeedback');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name = $('#name').value.trim();
    const email = $('#email').value.trim();
    const message = $('#message').value.trim();

    if (!name || !email || !message) {
      feedback.style.color = 'crimson';
      feedback.textContent = 'Please complete all required fields.';
      return;
    }

    feedback.style.color = 'green';
    feedback.textContent = 'Message validated successfully!';
    form.reset();
  });

  /* SCROLL TO TOP + FADE */
  const scrollTopBtn = $('#scrollTop');

  window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';

    $$('.fade-in').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 80) {
        el.classList.add('visible');
      }
    });
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

})();
