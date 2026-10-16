<template>
  <section class="hero" aria-label="Carrousel hero Pirates Underground">
    <div class="hero__slides">
      <TransitionGroup name="hero-slide" tag="div" class="hero__track">
        <div
          v-for="(slide, i) in slides"
          :key="slide.image"
          v-show="current === i"
          class="hero__slide"
        >
          <img
            :src="slide.image"
            :alt="slide.alt"
            class="hero__bg"
            :fetchpriority="i === 0 ? 'high' : 'low'"
          />
          <div class="hero__overlay" />
          <div class="hero__content container">
            <p v-if="slide.eyebrow" class="hero__eyebrow">{{ slide.eyebrow }}</p>
            <h1 class="hero__title">{{ slide.title }}</h1>
            <p v-if="slide.subtitle" class="hero__subtitle">{{ slide.subtitle }}</p>
            <div class="hero__actions">
              <NuxtLink to="/shop" class="btn btn-primary">Shop maintenant</NuxtLink>
              <NuxtLink v-if="slide.secondaryCta" :to="slide.secondaryCta.to" class="btn btn-outline">
                {{ slide.secondaryCta.label }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>

    <!-- Dots -->
    <div class="hero__dots" role="tablist" aria-label="Navigation du carrousel">
      <button
        v-for="(slide, i) in slides"
        :key="i"
        class="hero__dot"
        :class="{ 'hero__dot--active': current === i }"
        :aria-selected="current === i"
        :aria-label="`Slide ${i + 1}`"
        role="tab"
        @click="goTo(i)"
      />
    </div>

    <!-- Arrows -->
    <button class="hero__arrow hero__arrow--prev" @click="prev" aria-label="Slide précédente">
      <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button class="hero__arrow hero__arrow--next" @click="next" aria-label="Slide suivante">
      <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Scroll indicator -->
    <div class="hero__scroll">
      <span>Scroll</span>
      <div class="hero__scroll-line" />
    </div>
  </section>
</template>

<script setup lang="ts">
const slides = [
  {
    image: '/images/hero/hero-1-plage-groupe.jpg',
    alt: 'Groupe Pirates Underground sur la plage de La Réunion',
    eyebrow: 'Né à La Réunion',
    title: 'Pirates\nUnderground',
    subtitle: 'Pour les esprits libres et les cœurs rebelles.',
    secondaryCta: { to: '/a-propos', label: 'Notre histoire' },
  },
  {
    image: '/images/hero/hero-2-yoga-plage.jpg',
    alt: 'Pirates Underground — shooting yoga sur la plage',
    eyebrow: 'Nouvelle collection',
    title: 'Wear your\nfreedom',
    subtitle: null,
    secondaryCta: null,
  },
  {
    image: '/images/hero/hero-3-piscine.jpg',
    alt: 'Pirates Underground — shooting piscine',
    eyebrow: 'Summer drop',
    title: 'L\'underground\nà la surface',
    subtitle: null,
    secondaryCta: { to: '/shop', label: 'Voir la collection' },
  },
]

const current = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

function goTo(i: number) {
  current.value = i
  resetTimer()
}

function next() {
  current.value = (current.value + 1) % slides.length
  resetTimer()
}

function prev() {
  current.value = (current.value - 1 + slides.length) % slides.length
  resetTimer()
}

function resetTimer() {
  if (timer) clearInterval(timer)
  timer = setInterval(next, 6000)
}

onMounted(() => resetTimer())
onUnmounted(() => { if (timer) clearInterval(timer) })
</script>

<style scoped>
.hero {
  position: relative;
  height: 100svh;
  min-height: 600px;
  overflow: hidden;
  margin-top: calc(-1 * var(--nav-height));
}

.hero__slides,
.hero__track {
  position: absolute;
  inset: 0;
}

.hero__slide {
  position: absolute;
  inset: 0;
}

.hero__bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.3) 0%,
    rgba(0,0,0,0.1) 40%,
    rgba(0,0,0,0.6) 100%
  );
}

.hero__content {
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  color: var(--color-white);
}

.hero__eyebrow {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-red);
  margin-bottom: var(--space-3);
}

.hero__title {
  font-size: clamp(3.5rem, 10vw, 8rem);
  line-height: 0.95;
  white-space: pre-line;
  margin-bottom: var(--space-6);
  text-shadow: 0 2px 20px rgba(0,0,0,0.5);
}

.hero__subtitle {
  font-size: var(--text-xl);
  color: rgba(255,255,255,0.85);
  margin-bottom: var(--space-8);
  max-width: 480px;
}

.hero__actions {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
}

/* Dots */
.hero__dots {
  position: absolute;
  bottom: var(--space-8);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: var(--space-3);
  z-index: 10;
}

.hero__dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.4);
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);
  padding: 0;
}

.hero__dot--active {
  background: var(--color-white);
  transform: scale(1.3);
}

/* Arrows */
.hero__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.2);
  color: var(--color-white);
  width: 48px; height: 48px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
  z-index: 10;
}

.hero__arrow:hover {
  background: rgba(0,0,0,0.6);
  border-color: rgba(255,255,255,0.5);
}

.hero__arrow--prev { left: var(--space-6); }
.hero__arrow--next { right: var(--space-6); }

/* Scroll indicator */
.hero__scroll {
  position: absolute;
  bottom: var(--space-8);
  right: var(--space-8);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  color: rgba(255,255,255,0.5);
  font-size: var(--text-xs);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  z-index: 10;
}

.hero__scroll-line {
  width: 1px;
  height: 40px;
  background: rgba(255,255,255,0.3);
  animation: scrollLine 2s ease-in-out infinite;
}

@keyframes scrollLine {
  0%, 100% { transform: scaleY(1); opacity: 0.5; }
  50% { transform: scaleY(0.3); opacity: 1; }
}

/* Transitions */
.hero-slide-enter-active,
.hero-slide-leave-active {
  transition: opacity 1s ease;
  position: absolute;
  inset: 0;
}

.hero-slide-enter-from,
.hero-slide-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .hero__arrow { display: none; }
  .hero__scroll { display: none; }
  .hero__content { bottom: 12%; }
}
</style>
