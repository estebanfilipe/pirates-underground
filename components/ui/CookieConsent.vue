<template>
  <Transition name="cookie-slide">
    <div v-if="visible" class="cookie-banner" role="dialog" aria-label="Gestion des cookies">
      <div class="cookie-banner__text">
        <p>
          Nous utilisons des cookies pour le fonctionnement du panier et pour afficher notre fil
          Instagram. En poursuivant votre navigation, vous acceptez leur utilisation.
          <NuxtLink to="/confidentialite">En savoir plus</NuxtLink>.
        </p>
      </div>
      <div class="cookie-banner__actions">
        <button class="btn btn-ghost" @click="decline">Refuser</button>
        <button class="btn btn-primary" @click="accept">Accepter</button>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const STORAGE_KEY = 'pu-cookie-consent'
const visible = ref(false)

onMounted(() => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    visible.value = true
  }
})

function accept() {
  localStorage.setItem(STORAGE_KEY, 'accepted')
  visible.value = false
}

function decline() {
  localStorage.setItem(STORAGE_KEY, 'declined')
  visible.value = false
}
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: var(--space-6);
  left: var(--space-6);
  right: var(--space-6);
  max-width: 640px;
  margin: 0 auto;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  z-index: 1000;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.cookie-banner__text p {
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  line-height: 1.6;
}

.cookie-banner__text a {
  color: var(--color-red);
}

.cookie-banner__actions {
  display: flex;
  gap: var(--space-3);
  justify-content: flex-end;
}

.cookie-banner__actions .btn {
  padding: var(--space-2) var(--space-6);
  font-size: var(--text-base);
}

.cookie-slide-enter-active,
.cookie-slide-leave-active {
  transition: transform var(--transition-normal), opacity var(--transition-normal);
}

.cookie-slide-enter-from,
.cookie-slide-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

@media (max-width: 480px) {
  .cookie-banner__actions { flex-direction: column-reverse; }
  .cookie-banner__actions .btn { width: 100%; justify-content: center; }
}
</style>
