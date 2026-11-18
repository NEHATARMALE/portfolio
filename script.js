// Portfolio JavaScript for Neha Tarmale

// Inline toggle for quick expand / collapse
function toggleExpand(elementId) {
  const el = document.getElementById(elementId);
  const btnText = document.getElementById(`${elementId}-btn-text`);
  if (!el) return;

  const isHidden = el.classList.contains('hidden');
  if (isHidden) {
    el.classList.remove('hidden');
    if (btnText) {
      btnText.textContent = btnText.textContent.replace('▼', '▲');
    }
  } else {
    el.classList.add('hidden');
    if (btnText) {
      btnText.textContent = btnText.textContent.replace('▲', '▼');
    }
  }

  // Refresh icons if needed
  if (window.lucide) {
    lucide.createIcons();
  }
}

// Document Ready Setup
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Navbar background blur on scroll
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled-header');
      } else {
        navbar.classList.remove('scrolled-header');
      }
    });
  }
});
