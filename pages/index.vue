<template>
  <div>
    <Head>
      <Title>Pirates Underground — Streetwear né à La Réunion</Title>
      <Meta name="description" content="Pirates Underground — Marque de streetwear underground née à La Réunion. Shop en ligne : t-shirts, débardeurs, accessoires." />
      <Meta property="og:title" content="Pirates Underground — Streetwear né à La Réunion" />
      <Meta property="og:description" content="Marque de streetwear underground née à La Réunion. Pour les esprits libres et les cœurs rebelles." />
    </Head>

    <!-- Hero carrousel -->
    <HeroCarousel />

    <!-- Best-sellers -->
    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>Les essentiels</h2>
          <div class="divider" />
          <p>Les pièces qui définissent la marque.</p>
        </div>
        <div class="products-grid">
          <ProductCard
            v-for="product in featuredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
        <div class="home-shop-cta">
          <NuxtLink to="/shop" class="btn btn-outline">Voir toute la collection</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Manifesto strip -->
    <section class="manifesto-strip">
      <div class="container manifesto-strip__inner">
        <blockquote class="manifesto-strip__quote">
          <p>
            "Nous sommes les pirates modernes — pas ceux qui volent,<br />
            mais ceux qui <span class="text-red">refusent d'être volés</span>."
          </p>
        </blockquote>
        <NuxtLink to="/a-propos" class="btn btn-ghost">Notre histoire →</NuxtLink>
      </div>
    </section>

    <!-- Ils portent Pirates -->
    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>Ils portent Pirates</h2>
          <div class="divider" />
          <p>Artistes, musiciens, esprits libres — ils ont choisi la marque.</p>
        </div>
        <!-- Placeholder — à remplir avec les vraies photos de célébrités -->
        <div class="celebrities-grid">
          <div
            v-for="i in 4"
            :key="i"
            class="celebrity-card celebrity-card--placeholder"
          >
            <div class="celebrity-card__img-wrap">
              <div class="celebrity-card__placeholder-img" />
            </div>
            <p class="celebrity-card__name">À venir</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Instagram feed -->
    <InstagramFeed />

    <!-- Pirates Kids teaser -->
    <section class="section kids-teaser">
      <div class="container kids-teaser__inner">
        <div class="kids-teaser__text">
          <span class="tag tag-red">Nouveauté</span>
          <h2>Pirates Kids</h2>
          <p>
            Le même esprit, en plus petit.<br />
            Une déclinaison pour les petits pirates en herbe.
          </p>
          <NuxtLink to="/kids" class="btn btn-primary">Découvrir Pirates Kids</NuxtLink>
        </div>
        <div class="kids-teaser__image">
          <!-- Placeholder pour photo kids -->
          <div class="kids-teaser__img-placeholder">
            <span>Photos Pirates Kids</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { featuredProducts } from '~/data/products'
import ProductCard from '~/components/ui/ProductCard.vue'
</script>

<style scoped>
/* Products grid */
.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
  margin-bottom: var(--space-12);
}

.home-shop-cta {
  text-align: center;
}

/* Manifesto strip */
.manifesto-strip {
  background: var(--color-bg-soft);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-16) 0;
}

.manifesto-strip__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-8);
}

.manifesto-strip__quote p {
  font-family: var(--font-display);
  font-size: clamp(var(--text-xl), 3vw, var(--text-3xl));
  line-height: 1.3;
  color: var(--color-white);
}

/* Celebrities */
.celebrities-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
}

.celebrity-card__img-wrap {
  aspect-ratio: 3/4;
  overflow: hidden;
  border-radius: var(--border-radius);
  margin-bottom: var(--space-3);
}

.celebrity-card__placeholder-img {
  width: 100%;
  height: 100%;
  background: var(--color-surface);
}

.celebrity-card__name {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  text-align: center;
}

/* Kids teaser */
.kids-teaser {
  background: var(--color-bg-soft);
}

.kids-teaser__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

.kids-teaser__text {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.kids-teaser__text h2 {
  font-size: clamp(var(--text-4xl), 6vw, var(--text-6xl));
}

.kids-teaser__text p {
  color: var(--color-text-muted);
  font-size: var(--text-lg);
  line-height: 1.6;
}

.kids-teaser__img-placeholder {
  aspect-ratio: 1;
  background: var(--color-surface);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-faint);
}

/* Responsive */
@media (max-width: 1024px) {
  .products-grid { grid-template-columns: repeat(2, 1fr); }
  .celebrities-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .manifesto-strip__inner { flex-direction: column; text-align: center; }
  .kids-teaser__inner { grid-template-columns: 1fr; }
  .kids-teaser__image { order: -1; }
}

@media (max-width: 480px) {
  .products-grid { grid-template-columns: repeat(2, 1fr); gap: var(--space-3); }
}
</style>
