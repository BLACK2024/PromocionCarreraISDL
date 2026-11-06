const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

// Modo claro/oscuro: conserva la elección del visitante entre visitas.
const themeButton = document.querySelector('.theme-toggle');
const themeIcon = themeButton?.querySelector('.theme-icon');
const themeLabel = themeButton?.querySelector('.theme-label');
const savedTheme = localStorage.getItem('isdl-theme');
const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;

function applyTheme(theme) {
  const isDark = theme === 'dark';
  document.body.dataset.theme = isDark ? 'dark' : 'light';
  themeButton?.setAttribute('aria-pressed', String(isDark));
  themeButton?.setAttribute('aria-label', isDark ? 'Activar modo claro' : 'Activar modo oscuro');
  if (themeIcon) themeIcon.textContent = isDark ? '☀' : '☾';
  if (themeLabel) themeLabel.textContent = isDark ? 'Modo claro' : 'Modo oscuro';
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark ? '#101827' : '#102653');
}

applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
themeButton?.addEventListener('click', () => {
  const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('isdl-theme', nextTheme);
  applyTheme(nextTheme);
});

document.querySelector('#year').textContent = new Date().getFullYear();
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
