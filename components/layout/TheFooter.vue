<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">

        <!-- Brand -->
        <div class="footer__brand">
          <img src="/images/logo-white.png" alt="Pirates Underground" height="50" class="footer__logo" />
          <p class="footer__tagline">Né à La Réunion.<br>Porté partout.</p>
          <div class="footer__social">
            <a href="https://www.instagram.com/piratesunderground" target="_blank" rel="noopener" aria-label="Instagram Pirates Underground">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div class="footer__nav">
          <h4>Navigation</h4>
          <ul>
            <li><NuxtLink to="/shop">Shop</NuxtLink></li>
            <li><NuxtLink to="/lookbook">Lookbook</NuxtLink></li>
            <li><NuxtLink to="/kids">Pirates Kids</NuxtLink></li>
            <li><NuxtLink to="/a-propos">À propos</NuxtLink></li>
          </ul>
        </div>

        <!-- Infos -->
        <div class="footer__nav">
          <h4>Infos</h4>
          <ul>
            <li><a href="mailto:contact@piratesunderground.com">Contact</a></li>
            <li><NuxtLink to="/mentions-legales">Mentions légales</NuxtLink></li>
            <li><NuxtLink to="/cgv">CGV</NuxtLink></li>
            <li><NuxtLink to="/livraison">Livraison & retours</NuxtLink></li>
            <li><NuxtLink to="/confidentialite">Confidentialité</NuxtLink></li>
          </ul>
        </div>

      </div>

      <div class="footer__bottom">
        <p>© {{ new Date().getFullYear() }} Pirates Underground. Tous droits réservés.</p>
        <p class="footer__payment">
          <span>Paiement sécurisé</span>
          <!-- Icônes CB/Paypal/Stripe à ajouter -->
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-bg-soft);
  border-top: 1px solid var(--color-border);
  padding: var(--space-16) 0 var(--space-8);
  margin-top: auto;
}

.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: var(--space-12);
  margin-bottom: var(--space-12);
}

.footer__logo { margin-bottom: var(--space-4); }

.footer__tagline {
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  line-height: 1.6;
  margin-bottom: var(--space-6);
}

.footer__social {
  display: flex;
  gap: var(--space-4);
}

.footer__social a {
  color: var(--color-text-muted);
  transition: color var(--transition-fast);
}
.footer__social a:hover { color: var(--color-red); }

.footer__nav h4 {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  color: var(--color-white);
  margin-bottom: var(--space-4);
  letter-spacing: 0.06em;
}

.footer__nav ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer__nav a {
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  transition: color var(--transition-fast);
}
.footer__nav a:hover { color: var(--color-white); }

.footer__bottom {
  border-top: 1px solid var(--color-border);
  padding-top: var(--space-6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-faint);
  font-size: var(--text-xs);
}

@media (max-width: 768px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-8);
  }
  .footer__brand { grid-column: 1 / -1; }
  .footer__bottom { flex-direction: column; gap: var(--space-3); text-align: center; }
}

@media (max-width: 480px) {
  .footer__grid { grid-template-columns: 1fr; }
}
</style>
