<template>
  <div class="about-page">
    <Head>
      <Title>À propos — Pirates Underground</Title>
      <Meta name="description" content="L'histoire de Pirates Underground — née à La Réunion, inspirée de Jeanne de Belleville, pour les âmes rebelles du monde entier." />
    </Head>

    <!-- Hero manifesto -->
    <div class="about-hero">
      <img src="/images/hero/hero-1-plage-groupe.jpg" alt="La tribu Pirates Underground" class="about-hero__bg" />
      <div class="about-hero__overlay" />
      <div class="about-hero__content container">
        <h1>Notre histoire</h1>
        <p class="about-hero__sub">Née à La Réunion. Portée partout.</p>
      </div>
    </div>

    <!-- Manifesto -->
    <section class="section">
      <div class="container about-grid">
        <div class="about-text">
          <h2>Pirates Underground</h2>
          <div class="divider" style="margin: 1.5rem 0;" />
          <div class="about-body">
            <p>
              Tout a commencé avec une femme. <strong>Jeanne de Belleville</strong>, noble bretonne du XIVe siècle
              qui, après l'exécution injuste de son mari, arma trois navires et passa quinze ans à semer
              la terreur dans les eaux françaises. Pas pour l'or. Pour la justice. Pour la liberté.
              Pour l'amour.
            </p>
            <p>
              C'est cette énergie-là — la rage transfigurée en force, l'underground comme mode de vie —
              qui a donné naissance à <strong>Pirates Underground</strong>.
            </p>
            <p>
              Née à <strong>La Réunion</strong>, île de métissages et de contrastes, la marque s'est construite
              loin des codes du mainstream. Ici, on ne suit pas les tendances. On les ignore ou on les
              devance. On porte ce qu'on est.
            </p>
            <p>
              Pirates Underground, c'est un mouvement. Une plateforme pour les artistes, les tatoueurs,
              les musiciens, les danseurs, tous ceux qui vivent en dehors des cases. Une invitation à
              rejoindre la tribu des esprits libres.
            </p>
            <blockquote class="about-quote">
              "Nous sommes les pirates modernes — pas ceux qui volent, mais ceux qui refusent d'être volés."
            </blockquote>
          </div>
        </div>

        <div class="about-image">
          <img
            src="/images/hero/hero-1-plage-groupe.jpg"
            alt="La tribu Pirates Underground à La Réunion"
            class="about-image__img"
          />
        </div>
      </div>
    </section>

    <!-- Valeurs -->
    <section class="section about-values">
      <div class="container">
        <div class="section-title">
          <h2>Ce qu'on défend</h2>
          <div class="divider" />
        </div>
        <div class="values-grid">
          <div v-for="value in values" :key="value.title" class="value-card">
            <div class="value-card__icon">{{ value.icon }}</div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Melie -->
    <section class="section about-founder">
      <div class="container about-founder__inner">
        <div class="about-founder__image">
          <!-- Placeholder photo Melie -->
          <div class="about-founder__placeholder">
            <span>Photo Melie</span>
          </div>
        </div>
        <div class="about-founder__text">
          <span class="tag tag-outline">La fondatrice</span>
          <h2>Melie Gipsy</h2>
          <p>
            Créatrice, voyageuse, âme libre. Melie a lancé Pirates Underground depuis La Réunion,
            portée par la conviction que la mode peut être un acte de résistance.
          </p>
          <p>
            Chaque collection est pensée comme une déclaration : ne jamais faire semblant,
            ne jamais se conformer, porter ses convictions sur soi.
          </p>
          <a
            href="https://www.instagram.com/piratesunderground"
            target="_blank"
            rel="noopener"
            class="btn btn-outline"
          >
            Suivre sur Instagram
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const values = [
  {
    icon: '⚓',
    title: 'Liberté',
    text: 'Aucune règle, aucun code imposé. Tu portes ce que tu es, pas ce qu\'on attend de toi.',
  },
  {
    icon: '☠️',
    title: 'Authenticité',
    text: 'Chaque pièce est pensée sans compromis. On ne fait pas de la mode, on fait un manifeste.',
  },
  {
    icon: '🌊',
    title: 'Communauté',
    text: 'Pirates Underground est une plateforme. Artistes, musiciens, rebelles — tous les bienvenu·es.',
  },
  {
    icon: '🔥',
    title: 'Résistance',
    text: 'Contre l\'uniformité, contre le superficiel. L\'underground comme mode de vie permanent.',
  },
]
</script>

<style scoped>
.about-page { padding-bottom: var(--space-24); }

/* Hero */
.about-hero {
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  align-items: flex-end;
}

.about-hero__bg {
  position: absolute;
  inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center top;
}

.about-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent 20%, rgba(0,0,0,0.8) 100%);
}

.about-hero__content {
  position: relative;
  z-index: 1;
  padding-bottom: var(--space-16);
}

.about-hero__content h1 {
  color: white;
}

.about-hero__sub {
  color: rgba(255,255,255,0.7);
  font-size: var(--text-lg);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: var(--space-3);
}

/* About grid */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: start;
}

.about-text h2 {
  font-size: clamp(var(--text-3xl), 4vw, var(--text-5xl));
}

.about-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.about-body p {
  color: var(--color-text-muted);
  font-size: var(--text-lg);
  line-height: 1.7;
}

.about-body strong { color: var(--color-white); }

.about-quote {
  border-left: 3px solid var(--color-red);
  padding-left: var(--space-6);
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  color: var(--color-white);
  line-height: 1.3;
}

.about-image__img {
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  border-radius: var(--border-radius);
  position: sticky;
  top: calc(var(--nav-height) + var(--space-8));
}

/* Values */
.about-values { background: var(--color-bg-soft); }

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

.value-card {
  text-align: center;
  padding: var(--space-8) var(--space-4);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
}

.value-card__icon {
  font-size: 2.5rem;
  margin-bottom: var(--space-4);
}

.value-card h3 {
  font-size: var(--text-2xl);
  color: var(--color-white);
  margin-bottom: var(--space-3);
}

.value-card p {
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  line-height: 1.6;
}

/* Founder */
.about-founder__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

.about-founder__placeholder {
  aspect-ratio: 3/4;
  background: var(--color-surface);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-faint);
}

.about-founder__text {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.about-founder__text h2 {
  font-size: clamp(var(--text-4xl), 5vw, var(--text-6xl));
}

.about-founder__text p {
  color: var(--color-text-muted);
  font-size: var(--text-lg);
  line-height: 1.7;
}

@media (max-width: 1024px) {
  .values-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .about-grid, .about-founder__inner { grid-template-columns: 1fr; }
  .about-image { display: none; }
}
</style>
