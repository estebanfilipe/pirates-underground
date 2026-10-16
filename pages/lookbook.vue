<template>
  <div class="lookbook-page">
    <Head>
      <Title>Lookbook — Pirates Underground</Title>
      <Meta name="description" content="Shootings Pirates Underground — La Réunion, plages, esprit underground." />
    </Head>

    <div class="lookbook-header">
      <div class="container">
        <h1>Lookbook</h1>
        <p class="lookbook-header__sub">Shootings & moments</p>
      </div>
    </div>

    <div class="lookbook-grid container">
      <div
        v-for="(photo, i) in photos"
        :key="i"
        class="lookbook-item"
        :class="[`lookbook-item--${photo.size}`]"
        @click="openLightbox(i)"
      >
        <img
          :src="photo.src"
          :alt="photo.alt"
          loading="lazy"
          class="lookbook-item__img"
        />
        <div class="lookbook-item__overlay">
          <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div v-if="lightboxOpen" class="lightbox" @click.self="lightboxOpen = false">
          <button class="lightbox__close" @click="lightboxOpen = false" aria-label="Fermer">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button class="lightbox__nav lightbox__nav--prev" @click="lightboxPrev" aria-label="Photo précédente">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <img
            :src="photos[lightboxIndex]?.src"
            :alt="photos[lightboxIndex]?.alt"
            class="lightbox__img"
          />
          <button class="lightbox__nav lightbox__nav--next" @click="lightboxNext" aria-label="Photo suivante">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <p class="lightbox__counter">{{ lightboxIndex + 1 }} / {{ photos.length }}</p>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
// Liste des photos du lookbook
// Remplacer les src par les vraies photos
// size : 'normal' | 'wide' | 'tall'
const photos = [
  { src: '/images/lookbook/plage-groupe.jpg', alt: 'Groupe Pirates Underground sur la plage', size: 'wide' },
  { src: '/images/lookbook/yoga-plage.jpg', alt: 'Shooting yoga plage', size: 'normal' },
  { src: '/images/lookbook/piscine.jpg', alt: 'Shooting piscine', size: 'normal' },
  { src: '/images/lookbook/tapis-rouge.jpg', alt: 'Vue du dessus tapis rouge', size: 'tall' },
  { src: '/images/products/tshirt-skull-classic-black.jpg', alt: 'T-shirt Skull Classic', size: 'normal' },
  { src: '/images/products/tshirt-pirates-red.jpg', alt: 'T-shirt Pirates Rouge', size: 'normal' },
  { src: '/images/products/debardeur-pirates-ground-black.jpg', alt: 'Débardeur Pirates Ground', size: 'wide' },
]

const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

function openLightbox(i: number) {
  lightboxIndex.value = i
  lightboxOpen.value = true
}

function lightboxNext() {
  lightboxIndex.value = (lightboxIndex.value + 1) % photos.length
}

function lightboxPrev() {
  lightboxIndex.value = (lightboxIndex.value - 1 + photos.length) % photos.length
}

// Keyboard navigation
onMounted(() => {
  const handler = (e: KeyboardEvent) => {
    if (!lightboxOpen.value) return
    if (e.key === 'Escape') lightboxOpen.value = false
    if (e.key === 'ArrowRight') lightboxNext()
    if (e.key === 'ArrowLeft') lightboxPrev()
  }
  document.addEventListener('keydown', handler)
  onUnmounted(() => document.removeEventListener('keydown', handler))
})
</script>

<style scoped>
.lookbook-page { padding-bottom: var(--space-24); }

.lookbook-header {
  background: var(--color-bg-soft);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-12) 0 var(--space-8);
}

.lookbook-header h1 {
  font-size: clamp(var(--text-4xl), 6vw, var(--text-6xl));
}

.lookbook-header__sub {
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  margin-top: var(--space-2);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* Grid masonry-like */
.lookbook-grid {
  padding-top: var(--space-12);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 300px;
  gap: var(--space-3);
}

.lookbook-item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background: var(--color-surface);
}

.lookbook-item--wide { grid-column: span 2; }
.lookbook-item--tall { grid-row: span 2; }

.lookbook-item__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.lookbook-item:hover .lookbook-item__img {
  transform: scale(1.05);
}

.lookbook-item__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0;
  transition: all var(--transition-normal);
}

.lookbook-item:hover .lookbook-item__overlay {
  background: rgba(0,0,0,0.4);
  opacity: 1;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0,0,0,0.95);
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox__img {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
}

.lightbox__close {
  position: absolute;
  top: var(--space-6);
  right: var(--space-6);
  background: rgba(255,255,255,0.1);
  border: none;
  color: white;
  width: 44px; height: 44px;
  border-radius: 50%;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: background var(--transition-fast);
}
.lightbox__close:hover { background: rgba(255,255,255,0.2); }

.lightbox__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.1);
  border: none;
  color: white;
  width: 48px; height: 48px;
  border-radius: 50%;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: background var(--transition-fast);
}
.lightbox__nav:hover { background: rgba(255,255,255,0.2); }
.lightbox__nav--prev { left: var(--space-6); }
.lightbox__nav--next { right: var(--space-6); }

.lightbox__counter {
  position: absolute;
  bottom: var(--space-6);
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255,255,255,0.5);
  font-size: var(--text-sm);
  font-family: var(--font-display);
  letter-spacing: 0.1em;
}

/* Lightbox transition */
.lightbox-enter-active, .lightbox-leave-active {
  transition: opacity var(--transition-normal);
}
.lightbox-enter-from, .lightbox-leave-to { opacity: 0; }

@media (max-width: 768px) {
  .lookbook-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 200px;
  }
  .lookbook-item--wide { grid-column: span 2; }
  .lookbook-item--tall { grid-row: span 1; }
}
</style>
