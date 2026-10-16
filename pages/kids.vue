<template>
  <div class="kids-page">
    <Head>
      <Title>Pirates Kids — Pirates Underground</Title>
      <Meta name="description" content="Pirates Kids — La déclinaison enfant de Pirates Underground. Petit squelette, grand esprit." />
    </Head>

    <!-- Hero kids -->
    <div class="kids-hero">
      <div class="container kids-hero__inner">
        <div class="kids-hero__text">
          <span class="tag tag-red">Nouveauté</span>
          <h1>Pirates<br /><span class="text-red">Kids</span></h1>
          <p>
            Le même esprit libre, taillé pour les petits pirates.<br />
            Parce que la rébellion, ça commence tôt.
          </p>
        </div>
        <div class="kids-hero__image">
          <!-- Placeholder — remplacer par la vraie photo du petit squelette -->
          <div class="kids-hero__img-placeholder">
            <span>☠️</span>
            <p>Photo Pirates Kids</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Produits Kids -->
    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>La collection</h2>
          <div class="divider" />
        </div>

        <div class="kids-grid">
          <!-- Placeholder produits kids -->
          <div
            v-for="i in 4"
            :key="i"
            class="kids-product-placeholder"
          >
            <div class="kids-product-placeholder__img" />
            <div class="kids-product-placeholder__info">
              <p>Produit à venir</p>
            </div>
          </div>
        </div>

        <div class="kids-coming-soon">
          <p class="text-muted">La collection complète arrive bientôt.</p>
          <p>Tu veux être prévenu·e ? <a href="https://www.instagram.com/piratesunderground" target="_blank" rel="noopener" class="text-red">Suis-nous sur Instagram →</a></p>
        </div>
      </div>
    </section>

    <!-- Esprit kids -->
    <section class="section kids-spirit">
      <div class="container kids-spirit__inner">
        <h2>Le petit squelette</h2>
        <div class="divider" />
        <p>
          L'univers Pirates Underground a sa mascotte kids : un petit squelette tout mignon,<br />
          aussi rebelle que ses grands, mais avec plus de câlins.
        </p>
        <div class="kids-spirit__mascot">
          <!-- Placeholder mascotte -->
          <div class="kids-spirit__mascot-placeholder">
            <span>☠️</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.kids-page { padding-bottom: var(--space-24); }

/* Hero */
.kids-hero {
  background: var(--color-bg-soft);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-16) 0;
}

.kids-hero__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

.kids-hero__text {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.kids-hero__text h1 {
  font-size: clamp(var(--text-5xl), 8vw, var(--text-7xl));
  line-height: 0.9;
}

.kids-hero__text p {
  color: var(--color-text-muted);
  font-size: var(--text-lg);
  line-height: 1.6;
}

.kids-hero__img-placeholder {
  aspect-ratio: 3/4;
  background: var(--color-surface);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  color: var(--color-text-faint);
  font-size: 4rem;
}

.kids-hero__img-placeholder p {
  font-size: var(--text-sm);
}

/* Grid produits */
.kids-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
  margin-bottom: var(--space-12);
}

.kids-product-placeholder {
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  overflow: hidden;
}

.kids-product-placeholder__img {
  aspect-ratio: 3/4;
  background: var(--color-surface);
}

.kids-product-placeholder__info {
  padding: var(--space-4);
}

.kids-product-placeholder__info p {
  color: var(--color-text-faint);
  font-size: var(--text-sm);
  text-align: center;
}

/* Coming soon */
.kids-coming-soon {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  font-size: var(--text-lg);
}

/* Spirit section */
.kids-spirit { background: var(--color-bg-soft); text-align: center; }

.kids-spirit__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
}

.kids-spirit__inner p {
  color: var(--color-text-muted);
  font-size: var(--text-lg);
  max-width: 600px;
  line-height: 1.6;
}

.kids-spirit__mascot-placeholder {
  width: 200px; height: 200px;
  background: var(--color-surface);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  margin-top: var(--space-8);
}

@media (max-width: 1024px) {
  .kids-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .kids-hero__inner { grid-template-columns: 1fr; }
  .kids-hero__image { order: -1; }
}
</style>
