<template>
  <div class="legal-page">
    <Head>
      <Title>Livraison &amp; retours — Pirates Underground</Title>
      <Meta name="description" content="Délais, frais de livraison et procédure de retour pour vos commandes Pirates Underground." />
    </Head>

    <div class="legal-header">
      <div class="container">
        <h1>Livraison &amp; retours</h1>
      </div>
    </div>

    <section class="section-sm">
      <div class="container legal-body">
        <h2>Zones et délais de livraison</h2>
        <p>
          Nous livrons actuellement 【zones à compléter — ex. France métropolitaine, La Réunion, Europe】.
          Le délai de préparation est de 【X】 jours ouvrés, puis 【X à X】 jours ouvrés de transport
          selon la destination.
        </p>

        <h2>Frais de livraison</h2>
        <p>
          Les frais de livraison sont calculés et affichés avant validation de la commande, selon le
          poids du colis et la destination. 【Préciser un éventuel seuil de livraison offerte】.
        </p>

        <h2>Suivi de commande</h2>
        <p>
          Un email de confirmation d'expédition avec numéro de suivi vous est envoyé dès que votre
          colis est pris en charge par le transporteur.
        </p>

        <h2>Retours</h2>
        <p>
          Conformément à nos <NuxtLink to="/cgv">conditions générales de vente</NuxtLink>, vous disposez
          de 14 jours après réception pour nous retourner un article, à condition qu'il soit neuf,
          non porté et dans son emballage d'origine. Pour initier un retour, contactez-nous à
          <a href="mailto:contact@piratesunderground.com">contact@piratesunderground.com</a> en
          indiquant votre numéro de commande.
        </p>

        <h2>Remboursement</h2>
        <p>
          Le remboursement est effectué sur le moyen de paiement utilisé lors de l'achat, dans un délai
          de 14 jours à compter de la réception du produit retourné.
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
