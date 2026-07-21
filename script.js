// Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Light/dark theme toggle
  const themeToggle = document.getElementById('themeToggle');
  let isDark = true;
  themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    const root = document.documentElement.style;
    if (isDark) {
      root.setProperty('--bg', '#0a0e14');
      root.setProperty('--bg-soft', '#0d1220');
      root.setProperty('--text', '#f5f7fa');
      root.setProperty('--text-dim', '#97a2b5');
      root.setProperty('--border', 'rgba(255,255,255,0.08)');
      themeToggle.textContent = '🌙';
    } else {
      root.setProperty('--bg', '#f5f7fa');
      root.setProperty('--bg-soft', '#e9edf2');
      root.setProperty('--text', '#0a0e14');
      root.setProperty('--text-dim', '#4b5563');
      root.setProperty('--border', 'rgba(0,0,0,0.08)');
      themeToggle.textContent = '☀️';
    }
  });

// Reveal sections on scroll
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));

  // Contact form submit
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('cf-name').value;
      const email = document.getElementById('cf-email').value;
      const message = document.getElementById('cf-message').value;
      const mailto = `mailto:mostafaalnabarawy6@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + email)}`;
      window.location.href = mailto;
    });
  }

  // Project modal
  const projectModal = document.getElementById('projectModal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalTags = document.getElementById('modalTags');
  const modalGithub = document.getElementById('modalGithub');
  const modalClose = document.getElementById('projectModalClose');

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      modalImg.src = card.dataset.img;
      modalImg.alt = card.dataset.title;
      modalTitle.textContent = card.dataset.title;
      modalTags.textContent = card.dataset.tags;
      modalGithub.href = card.dataset.github;
      projectModal.classList.add('open');
    });
  });

  function closeProjectModal(){ projectModal.classList.remove('open'); }
  modalClose.addEventListener('click', closeProjectModal);
  projectModal.addEventListener('click', e => {
    if (e.target === projectModal) closeProjectModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeProjectModal();
  });

  // Show more/less toggle for qualification descriptions
  document.querySelectorAll('.show-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const desc = btn.previousElementSibling;
      const expanded = desc.getAttribute('data-expanded') === 'true';
      desc.setAttribute('data-expanded', !expanded);
      btn.textContent = expanded ? 'Show more' : 'Show less';
    });
  });

  // Smooth scroll for all in-page anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        navLinks.classList.remove('open');
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });