<template>
  <div class="legal-page">
    <Head>
      <Title>Mentions légales — Pirates Underground</Title>
      <Meta name="description" content="Mentions légales du site Pirates Underground." />
    </Head>

    <div class="legal-header">
      <div class="container">
        <h1>Mentions légales</h1>
      </div>
    </div>

    <section class="section-sm">
      <div class="container legal-body">
        <h2>Éditeur du site</h2>
        <p>
          Le site Pirates Underground est édité par <strong>【Raison sociale à compléter】</strong>,
          【forme juridique, ex. SASU/EI】 au capital de 【montant】 €,
          immatriculée au RCS de 【ville】 sous le numéro SIRET 【à compléter】,
          dont le siège social est situé 【adresse à compléter】.
        </p>
        <p>
          Numéro de TVA intracommunautaire : 【à compléter si applicable】<br />
          Directeur de la publication : 【nom】<br />
          Contact : <a href="mailto:contact@piratesunderground.com">contact@piratesunderground.com</a>
        </p>

        <h2>Hébergement</h2>
        <p>
          Le site est hébergé par <strong>GitHub, Inc.</strong>, 88 Colin P. Kelly Jr Street,
          San Francisco, CA 94107, États-Unis, via le service GitHub Pages.
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L'ensemble des éléments présents sur ce site (textes, visuels, logos, créations graphiques,
          sérigraphies) est la propriété exclusive de Pirates Underground, sauf mention contraire.
          Toute reproduction, totale ou partielle, sans autorisation préalable est interdite.
        </p>

        <h2>Crédits</h2>
        <p>Conception et développement : Pirates Underground.</p>

        <h2>Contact</h2>
        <p>
          Pour toute question relative au site, écrivez-nous à
          <a href="mailto:contact@piratesunderground.com">contact@piratesunderground.com</a>.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.legal-header {
  background: var(--color-bg-soft);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-12) 0 var(--space-8);
}

.legal-body h2 {
  font-size: var(--text-2xl);
  color: var(--color-white);
  margin-top: var(--space-8);
  margin-bottom: var(--space-3);
}

.legal-body h2:first-child {
  margin-top: 0;
}

.legal-body p {
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: var(--space-3);
}

.legal-body a {
  color: var(--color-red);
}
</style>
