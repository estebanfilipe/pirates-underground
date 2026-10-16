<template>
  <div class="layout">
    <TheNav />
    <main class="main-content">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: var(--nav-height);
}
</style>
