<template>
  <div>
    <!-- Snipcart hidden div (requis) -->
    <div
      hidden
      id="snipcart"
      data-api-key="YOUR_SNIPCART_PUBLIC_KEY"
      data-currency="eur"
      data-config-modal-style="side"
    />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <CookieConsent />
  </div>
</template>
