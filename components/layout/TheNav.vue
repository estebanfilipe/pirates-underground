<template>
  <nav class="nav" :class="{ 'nav--scrolled': isScrolled, 'nav--open': menuOpen }">
    <div class="container nav__inner">

      <!-- Logo -->
      <NuxtLink to="/" class="nav__logo" @click="menuOpen = false">
        <img src="/images/logo-white.png" alt="Pirates Underground" height="44" />
      </NuxtLink>

      <!-- Desktop links -->
      <ul class="nav__links">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="nav__link"
            :class="{ 'nav__link--red': link.highlight }"
            active-class="nav__link--active"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Actions -->
      <div class="nav__actions">
        <!-- Cart -->
        <button class="snipcart-checkout nav__cart" aria-label="Panier">
          <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
          </svg>
          <span class="snipcart-items-count nav__cart-count" />
        </button>

        <!-- Burger mobile -->
        <button
          class="nav__burger"
          :class="{ 'nav__burger--open': menuOpen }"
          @click="menuOpen = !menuOpen"
          :aria-label="menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
          aria-expanded="menuOpen"
        >
          <span /><span /><span />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition name="mobile-menu">
      <div v-if="menuOpen" class="nav__mobile">
        <ul>
          <li v-for="link in links" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="nav__mobile-link"
              :class="{ 'nav__mobile-link--red': link.highlight }"
              active-class="nav__mobile-link--active"
              @click="menuOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const links = [
  { to: '/shop', label: 'Shop' },
  { to: '/lookbook', label: 'Lookbook' },
  { to: '/kids', label: 'Pirates Kids', highlight: false },
  { to: '/a-propos', label: 'À propos' },
]

const isScrolled = ref(false)
const menuOpen = ref(false)

onMounted(() => {
  const handleScroll = () => { isScrolled.value = window.scrollY > 20 }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})

// Ferme le menu si on resize vers desktop
onMounted(() => {
  const handleResize = () => { if (window.innerWidth > 768) menuOpen.value = false }
  window.addEventListener('resize', handleResize)
  onUnmounted(() => window.removeEventListener('resize', handleResize))
})
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  height: var(--nav-height);
  background: transparent;
  transition: background var(--transition-normal), box-shadow var(--transition-normal);
}

.nav--scrolled,
.nav--open {
  background: rgba(10, 10, 10, 0.97);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 0 var(--color-border);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--nav-height);
}

.nav__logo img {
  height: 44px;
  width: auto;
  transition: opacity var(--transition-fast);
}
.nav__logo:hover img { opacity: 0.8; }

/* Desktop links */
.nav__links {
  display: flex;
  list-style: none;
  gap: var(--space-8);
}

.nav__link {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  transition: color var(--transition-fast);
  position: relative;
}

.nav__link::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0; right: 0;
  height: 2px;
  background: var(--color-red);
  transform: scaleX(0);
  transition: transform var(--transition-fast);
}

.nav__link:hover,
.nav__link--active {
  color: var(--color-white);
}

.nav__link:hover::after,
.nav__link--active::after {
  transform: scaleX(1);
}

.nav__link--red { color: var(--color-red); }
.nav__link--red:hover { color: var(--color-red-hover); }

/* Actions */
.nav__actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.nav__cart {
  background: none;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  border-radius: var(--border-radius);
  transition: color var(--transition-fast);
}
.nav__cart:hover { color: var(--color-red); }

.nav__cart-count {
  font-family: var(--font-display);
  font-size: var(--text-sm);
  min-width: 18px;
}

/* Burger */
.nav__burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.nav__burger span {
  display: block;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
  transition: all var(--transition-fast);
  transform-origin: center;
}

.nav__burger--open span:nth-child(1) { transform: translateY(9px) rotate(45deg); }
.nav__burger--open span:nth-child(2) { opacity: 0; }
.nav__burger--open span:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }

/* Mobile menu */
.nav__mobile {
  background: rgba(10, 10, 10, 0.98);
  padding: var(--space-6) var(--space-6) var(--space-8);
}

.nav__mobile ul { list-style: none; }

.nav__mobile-link {
  display: block;
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  color: var(--color-text-muted);
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--color-border);
  transition: color var(--transition-fast);
}
.nav__mobile-link:hover,
.nav__mobile-link--active { color: var(--color-white); }
.nav__mobile-link--red { color: var(--color-red); }

/* Transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity var(--transition-normal), transform var(--transition-normal);
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Responsive */
@media (max-width: 768px) {
  .nav__links { display: none; }
  .nav__burger { display: flex; }
}
</style>
