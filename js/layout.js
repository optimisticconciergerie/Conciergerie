/* ============================================
   OPTIMISTIC CONCIERGERIE — Header & Footer
   ============================================ */

function getActivePage() {
  return window.location.pathname.split('/').pop() || '';
}

function renderHeader() {
  const page = getActivePage();

  const navLinks = [
    { href: 'index.html',        label: 'Accueil' },
    { href: 'nos-services.html', label: 'Nos services' },
    { href: 'nos-tarifs.html',   label: 'Nos tarifs' },
    /*{ href: 'nos-secteurs.html', label: 'Nos secteurs' },*/
    { href: 'a-propos.html',     label: 'À propos' },
  ];

  const navItems = navLinks.map(link =>
    `<li><a href="${link.href}"${page === link.href ? ' class="active"' : ''}>${link.label}</a></li>`
  ).join('\n        ');

  const contactClass = page === 'contact.html' ? 'btn-nav active' : 'btn-nav';

  return `<header>
    <a href="index.html" class="logo">
      <img src="images/Abeille jaune sans texte avec clef.png" alt="Optimistic Conciergerie" class="logo-icon">
      <div class="logo-text">
        <span class="logo-optimistic">Optimistic</span>
        <span class="logo-conciergerie">Conciergerie</span>
      </div>
    </a>
    <button class="menu-toggle" aria-label="Ouvrir le menu" onclick="this.closest('header').classList.toggle('nav-open')">
      <span></span><span></span><span></span>
    </button>
    <nav>
      <ul>
        ${navItems}
        <li><a href="contact.html" class="${contactClass}">Nous contacter</a></li>
      </ul>
    </nav>
  </header>`;
}

function renderFooter() {
  return `<footer>
    <div class="container">
      <div class="footer-grid">
        <div>
          <a href="index.html" class="logo" style="margin-bottom:0.75rem;">
            <img src="images/Abeille jaune sans texte avec clef.png" alt="Abeille Optimistic Conciergerie" class="logo-icon">
            <div class="logo-text">
              <span class="logo-optimistic">Optimistic</span>
              <span class="logo-conciergerie">Conciergerie</span>
            </div>
          </a>
          <p class="footer-desc">Votre partenaire de confiance pour la gestion de location courte durée.</p>
          <div class="footer-social">
            <a href="https://www.facebook.com/profile.php?id=61589095256528" target="_blank" rel="noopener" class="footer-social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
            </a>
            <a href="https://www.instagram.com/optimistic_conciergerie/" target="_blank" rel="noopener" class="footer-social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>📞 <a href="tel:0666011234">06.66.01.xx.xx</a></li>
            <li style="display:flex; align-items:baseline; gap:0.4rem;">✉️ <a href="mailto:conciergerie.optimistic@gmail.com">conciergerie.optimistic@gmail.com</a></li>
            <li>📍 Île-de-France</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">© 2026 Optimistic Conciergerie — Tous droits réservés &nbsp;|&nbsp; <a href="mentions-legales.html" style="color:inherit; opacity:0.7; text-decoration:underline;">Mentions légales</a> &nbsp;|&nbsp; <a href="politique-confidentialite.html" style="color:inherit; opacity:0.7; text-decoration:underline;">Politique de confidentialité</a></div>
    </div>
  </footer>`;
}

document.addEventListener('DOMContentLoaded', function () {
  const headerEl = document.getElementById('site-header');
  if (headerEl) headerEl.outerHTML = renderHeader();

  const footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.outerHTML = renderFooter();
});
