<template>
  <div class="legal-page">
    <Head>
      <Title>Conditions générales de vente — Pirates Underground</Title>
      <Meta name="description" content="Conditions générales de vente du site Pirates Underground." />
    </Head>

    <div class="legal-header">
      <div class="container">
        <h1>Conditions générales de vente</h1>
      </div>
    </div>

    <section class="section-sm">
      <div class="container legal-body">
        <h2>Article 1 — Objet</h2>
        <p>
          Les présentes conditions générales de vente régissent les ventes effectuées sur le site
          piratesunderground.com par <strong>【Raison sociale à compléter】</strong>
          (voir <NuxtLink to="/mentions-legales">mentions légales</NuxtLink>) auprès de consommateurs
          non professionnels. Toute commande implique l'acceptation sans réserve des présentes CGV.
        </p>

        <h2>Article 2 — Produits et prix</h2>
        <p>
          Les produits proposés sont ceux présentés sur le site au jour de la consultation, dans la
          limite des stocks disponibles. Les prix sont indiqués en euros, toutes taxes comprises (TTC),
          hors frais de livraison précisés avant validation de la commande.
        </p>

        <h2>Article 3 — Commande</h2>
        <p>
          Les commandes sont passées en ligne via le système de panier Snipcart. La commande est
          définitive après confirmation du paiement et envoi d'un email récapitulatif.
        </p>

        <h2>Article 4 — Paiement</h2>
        <p>
          Le paiement s'effectue en ligne, par carte bancaire, via notre prestataire sécurisé Snipcart.
          Les données bancaires ne sont jamais stockées par Pirates Underground.
        </p>

        <h2>Article 5 — Livraison</h2>
        <p>
          Les modalités, délais et frais de livraison sont détaillés sur la page
          <NuxtLink to="/livraison">Livraison &amp; retours</NuxtLink>.
        </p>

        <h2>Article 6 — Droit de rétractation</h2>
        <p>
          Conformément à l'article L221-18 du Code de la consommation, vous disposez d'un délai de
          <strong>14 jours</strong> à compter de la réception de votre commande pour exercer votre
          droit de rétractation, sans avoir à justifier de motif. Les produits doivent être retournés
          neufs, non portés et dans leur emballage d'origine. Les frais de retour sont à la charge du client,
          sauf disposition contraire indiquée sur la page Livraison &amp; retours.
        </p>

        <h2>Article 7 — Garanties légales</h2>
        <p>
          Tous les produits bénéficient de la garantie légale de conformité (articles L217-3 et suivants
          du Code de la consommation) et de la garantie contre les vices cachés (articles 1641 et suivants
          du Code civil).
        </p>

        <h2>Article 8 — Données personnelles</h2>
        <p>
          Le traitement de vos données personnelles est décrit dans notre
          <NuxtLink to="/confidentialite">politique de confidentialité</NuxtLink>.
        </p>

        <h2>Article 9 — Litiges et médiation</h2>
        <p>
          En cas de litige, le client peut recourir à un médiateur de la consommation conformément
          aux articles L616-1 et suivants du Code de la consommation. Les présentes CGV sont soumises
          au droit français.
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
