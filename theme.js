// Ruby Shima — theme toggle
// Applies saved preference on load, toggles + persists on click.
(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem('rs-theme');
  if (saved === 'dark') root.setAttribute('data-theme', 'dark');

  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      const isDark = root.getAttribute('data-theme') === 'dark';
      if (isDark) {
        root.removeAttribute('data-theme');
        localStorage.setItem('rs-theme', 'light');
      } else {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('rs-theme', 'dark');
      }
    });
  });
})();
