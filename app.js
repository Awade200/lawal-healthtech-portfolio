// Intentionally light: the portfolio is content-first.
// Keep motion subtle and respect reduced-motion preferences.
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReduced && 'IntersectionObserver' in window) {
  const targets = document.querySelectorAll('.project, .edge-card, .background-cards article, .timeline article');
  targets.forEach(el => el.classList.add('reveal'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  targets.forEach(el => observer.observe(el));
}
