<template>
  <div class="shop-page">
    <Head>
      <Title>Shop — Pirates Underground</Title>
      <Meta name="description" content="Toute la collection Pirates Underground : t-shirts, débardeurs, accessoires. Streetwear né à La Réunion." />
    </Head>

    <!-- Header -->
    <div class="shop-header">
      <div class="container">
        <h1>Shop</h1>
        <p>{{ filteredProducts.length }} pièce{{ filteredProducts.length > 1 ? 's' : '' }}</p>
      </div>
    </div>

    <div class="container shop-layout">
      <!-- Filtres -->
      <aside class="shop-filters">
        <h3>Catégories</h3>
        <ul class="filter-list">
          <li
            v-for="cat in categories"
            :key="cat.value"
            class="filter-item"
            :class="{ 'filter-item--active': activeCategory === cat.value }"
            @click="activeCategory = cat.value"
          >
            {{ cat.label }}
          </li>
        </ul>
      </aside>

      <!-- Grille -->
      <div class="shop-grid-wrap">
        <!-- Barre de filtres mobile -->
        <div class="shop-filter-bar">
          <div class="filter-chips">
            <button
              v-for="cat in categories"
              :key="cat.value"
              class="filter-chip"
              :class="{ 'filter-chip--active': activeCategory === cat.value }"
              @click="activeCategory = cat.value"
            >
              {{ cat.label }}
            </button>
          </div>
        </div>

        <TransitionGroup name="product-list" tag="div" class="shop-grid">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
          />
        </TransitionGroup>

        <div v-if="filteredProducts.length === 0" class="shop-empty">
          <p>Aucun article dans cette catégorie pour l'instant.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { products, categories } from '~/data/products'
import ProductCard from '~/components/ui/ProductCard.vue'

const activeCategory = ref<string>('all')

const filteredProducts = computed(() => {
  if (activeCategory.value === 'all') return products
  return products.filter(p => p.category === activeCategory.value)
})
</script>

<style scoped>
.shop-page { padding-bottom: var(--space-24); }

.shop-header {
  background: var(--color-bg-soft);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-12) 0 var(--space-8);
}

.shop-header h1 {
  font-size: clamp(var(--text-4xl), 6vw, var(--text-6xl));
}

.shop-header p {
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  margin-top: var(--space-2);
}

.shop-layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: var(--space-12);
  padding-top: var(--space-12);
}

/* Sidebar filters */
.shop-filters {
  position: sticky;
  top: calc(var(--nav-height) + var(--space-8));
  align-self: start;
}

.shop-filters h3 {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  letter-spacing: 0.1em;
  margin-bottom: var(--space-4);
}

.filter-list { list-style: none; }

.filter-item {
  padding: var(--space-3) 0;
  font-family: var(--font-display);
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  cursor: pointer;
  border-bottom: 1px solid var(--color-border);
  transition: color var(--transition-fast);
  letter-spacing: 0.04em;
}

.filter-item:hover { color: var(--color-text); }
.filter-item--active { color: var(--color-red); }

/* Mobile filter chips */
.shop-filter-bar {
  display: none;
  margin-bottom: var(--space-6);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.shop-filter-bar::-webkit-scrollbar { display: none; }

.filter-chips {
  display: flex;
  gap: var(--space-2);
  padding-bottom: var(--space-2);
  white-space: nowrap;
}

.filter-chip {
  padding: var(--space-2) var(--space-4);
  font-family: var(--font-display);
  font-size: var(--text-base);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  border-radius: 100px;
  cursor: pointer;
  transition: all var(--transition-fast);
  letter-spacing: 0.04em;
}

.filter-chip:hover { color: var(--color-text); border-color: var(--color-text-muted); }
.filter-chip--active {
  background: var(--color-red);
  border-color: var(--color-red);
  color: var(--color-white);
}

/* Product grid */
.shop-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.shop-empty {
  grid-column: 1 / -1;
  text-align: center;
  padding: var(--space-16);
  color: var(--color-text-muted);
}

/* Transition */
.product-list-move,
.product-list-enter-active,
.product-list-leave-active {
  transition: all var(--transition-normal);
}
.product-list-enter-from,
.product-list-leave-to {
  opacity: 0;
  transform: scale(0.97);
}
.product-list-leave-active { position: absolute; }

/* Responsive */
@media (max-width: 1024px) {
  .shop-layout { grid-template-columns: 1fr; }
  .shop-filters { display: none; }
  .shop-filter-bar { display: block; }
}

@media (max-width: 768px) {
  .shop-grid { grid-template-columns: repeat(2, 1fr); gap: var(--space-4); }
}

@media (max-width: 480px) {
  .shop-grid { gap: var(--space-3); }
}
</style>
