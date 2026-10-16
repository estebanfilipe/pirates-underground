<template>
  <div class="legal-page">
    <Head>
      <Title>Politique de confidentialité — Pirates Underground</Title>
      <Meta name="description" content="Politique de confidentialité et gestion des données personnelles sur le site Pirates Underground." />
    </Head>

    <div class="legal-header">
      <div class="container">
        <h1>Politique de confidentialité</h1>
      </div>
    </div>

    <section class="section-sm">
      <div class="container legal-body">
        <h2>Responsable du traitement</h2>
        <p>
          【Raison sociale à compléter】, éditrice du site Pirates Underground
          (voir <NuxtLink to="/mentions-legales">mentions légales</NuxtLink>), est responsable
          du traitement des données personnelles collectées sur ce site.
        </p>

        <h2>Données collectées</h2>
        <p>
          Nous collectons les données que vous nous transmettez volontairement : nom, adresse email,
          adresse postale et informations de paiement lors d'une commande (traitées directement par
          notre prestataire de paiement, Snipcart, sans transiter par nos serveurs), ainsi que des
          données de navigation anonymes (statistiques de visite).
        </p>

        <h2>Finalités</h2>
        <ul>
          <li>Traiter et livrer vos commandes</li>
          <li>Répondre à vos demandes de contact</li>
          <li>Afficher notre fil Instagram (via le service Behold)</li>
          <li>Mesurer l'audience du site</li>
        </ul>

        <h2>Base légale</h2>
        <p>
          Les traitements reposent sur l'exécution du contrat de vente (commande), votre consentement
          (cookies non essentiels, affichage du widget Instagram) ou notre intérêt légitime
          (amélioration du site).
        </p>

        <h2>Destinataires des données</h2>
        <p>
          Vos données peuvent être transmises à nos prestataires techniques strictement nécessaires
          au fonctionnement du site : <strong>Snipcart</strong> (panier et paiement),
          <strong>Behold</strong> (affichage du fil Instagram) et <strong>GitHub Pages</strong> (hébergement).
          Aucune donnée n'est vendue à des tiers.
        </p>

        <h2>Durée de conservation</h2>
        <p>
          Les données liées aux commandes sont conservées conformément aux durées légales de
          conservation comptable et commerciale (10 ans). Les autres données sont conservées le
          temps nécessaire aux finalités décrites ci-dessus.
        </p>

        <h2>Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement,
          d'opposition, de limitation et de portabilité de vos données. Pour les exercer, contactez-nous
          à <a href="mailto:contact@piratesunderground.com">contact@piratesunderground.com</a>.
          Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).
        </p>

        <h2>Cookies</h2>
        <p>
          Le site utilise des cookies strictement nécessaires à son fonctionnement (panier Snipcart)
          ainsi que des cookies tiers soumis à votre consentement (Instagram/Behold, mesure d'audience).
          Vous pouvez gérer vos préférences via le bandeau affiché lors de votre première visite, ou
          en configurant votre navigateur.
        </p>

        <h2>Contact</h2>
        <p>
          Pour toute question relative à vos données personnelles :
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

.legal-body p,
.legal-body li {
  color: var(--color-text-muted);
  line-height: 1.7;
}

.legal-body p {
  margin-bottom: var(--space-3);
}

.legal-body ul {
  margin: 0 0 var(--space-4) var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.legal-body a {
  color: var(--color-red);
}
</style>
