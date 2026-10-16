<template>
  <article class="product-card">
    <div class="product-card__image-wrap">
      <NuxtLink :to="`/shop#${product.id}`">
        <img
          :src="`/images/${product.images[0]}`"
          :alt="product.name"
          class="product-card__img"
          loading="lazy"
        />
      </NuxtLink>
      <div class="product-card__badges">
        <span v-if="product.new" class="tag tag-red">Nouveau</span>
        <span v-if="!product.inStock" class="tag tag-outline">Épuisé</span>
      </div>
      <!-- Quick add -->
      <div class="product-card__overlay">
        <button
          v-if="product.inStock"
          class="btn btn-primary product-card__quick-add"
          @click.prevent="quickAdd"
        >
          Ajouter au panier
        </button>
      </div>
    </div>

    <div class="product-card__info">
      <h3 class="product-card__name">{{ product.name }}</h3>
      <p class="product-card__price">{{ product.price }} €</p>
    </div>

    <!-- Snipcart button caché pour le quick-add -->
    <button
      ref="snipcartBtn"
      class="sr-only"
      :class="`snipcart-add-item`"
      :data-item-id="product.id"
      :data-item-price="product.price"
      :data-item-url="`/shop`"
      :data-item-description="product.description"
      :data-item-image="`/images/${product.images[0]}`"
      :data-item-name="product.name"
      :data-item-custom1-name="'Taille'"
      :data-item-custom1-options="product.sizes.join('|')"
      :data-item-custom1-required="true"
    >
      Ajouter
    </button>
  </article>
</template>

<script setup lang="ts">
import type { Product } from '~/data/products'

const props = defineProps<{ product: Product }>()
const snipcartBtn = ref<HTMLButtonElement | null>(null)

function quickAdd() {
  snipcartBtn.value?.click()
}
</script>

<style scoped>
.product-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: transform var(--transition-normal), border-color var(--transition-normal);
}

.product-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-text-faint);
}

.product-card__image-wrap {
  position: relative;
  aspect-ratio: 3/4;
  overflow: hidden;
  background: var(--color-surface);
}

.product-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.product-card:hover .product-card__img {
  transform: scale(1.04);
}

.product-card__badges {
  position: absolute;
  top: var(--space-3);
  left: var(--space-3);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.product-card__overlay {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: var(--space-4);
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  transform: translateY(100%);
  transition: transform var(--transition-normal);
  display: flex;
  justify-content: center;
}

.product-card:hover .product-card__overlay {
  transform: translateY(0);
}

.product-card__quick-add {
  width: 100%;
  justify-content: center;
  font-size: var(--text-base);
  padding: var(--space-3) var(--space-4);
}

.product-card__info {
  padding: var(--space-4);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.product-card__name {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  color: var(--color-white);
  letter-spacing: 0.04em;
}

.product-card__price {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  color: var(--color-red);
  white-space: nowrap;
}
</style>
