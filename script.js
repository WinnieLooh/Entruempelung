/**
 * Mobile Navigation Toggle
 * Toggles the open state of mobile navigation menu
 */
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.querySelector('.hamburger');

  navLinks?.classList.toggle('open');

  // Update ARIA attribute for accessibility
  const isOpen = navLinks?.classList.contains('open');
  hamburger?.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

/**
 * Initialize Scroll Animations
 * Uses Intersection Observer to trigger fade-in animations
 * when elements become visible in the viewport
 */
function initScrollAnimations() {
  const options = {
    threshold: 0.12, // Trigger when 12% of element is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Stop observing after animation to save performance
        observer.unobserve(entry.target);
      }
    });
  }, options);

  // Observe all elements with fade-in class
  document.querySelectorAll('.fade-in').forEach((el) => {
    observer.observe(el);
  });
}

/**
 * Initialize all interactive features
 * Called when DOM is fully loaded
 */
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
});

/**
 * Close mobile menu when a link is clicked
 * Improves UX on mobile devices
 */
document.addEventListener('click', (event) => {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.querySelector('.hamburger');

  // Close menu if clicking a nav link (except CTA buttons)
  if (
    event.target.closest('.nav-links a:not(.nav-cta)') &&
    navLinks?.classList.contains('open')
  ) {
    navLinks.classList.remove('open');
    hamburger?.setAttribute('aria-expanded', 'false');
  }

  // Close menu if clicking outside
  if (
    !event.target.closest('nav') &&
    navLinks?.classList.contains('open')
  ) {
    navLinks.classList.remove('open');
    hamburger?.setAttribute('aria-expanded', 'false');
  }
});
