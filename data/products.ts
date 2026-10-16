// ============================================================
// Catalogue produits Pirates Underground
// Remplacer les images par les vraies photos produit
// Les prix sont en EUR
// ============================================================

export interface Product {
  id: string
  name: string
  description: string
  price: number
  images: string[]         // chemins relatifs dans /public/images/products/
  category: 'tshirt' | 'debardeur' | 'sweat' | 'accessoire' | 'kids'
  tags: string[]
  sizes: string[]
  inStock: boolean
  featured: boolean
  new: boolean
}

export const products: Product[] = [
  // --- T-SHIRTS ---
  {
    id: 'tshirt-skull-classic-black',
    name: 'T-Shirt Skull Classic',
    description: 'Le tee signature Pirates Underground. Sérigraphie skull emblématique sur fond noir 100% coton.',
    price: 35,
    images: ['products/tshirt-skull-classic-black.jpg'],
    category: 'tshirt',
    tags: ['signature', 'skull'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
    new: false,
  },
  {
    id: 'tshirt-pirates-ground-black',
    name: 'T-Shirt Pirates Ground',
    description: 'Typography "Pirates Underground" en lettrage gothique sur coton lourd.',
    price: 35,
    images: ['products/tshirt-pirates-ground-black.jpg'],
    category: 'tshirt',
    tags: ['typo', 'lettering'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
    new: false,
  },
  {
    id: 'tshirt-pirates-white',
    name: 'T-Shirt Pirates — Blanc',
    description: 'La même énergie, en blanc. Sérigraphie noire, coupe oversize.',
    price: 35,
    images: ['products/tshirt-pirates-white.jpg'],
    category: 'tshirt',
    tags: ['signature', 'white'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: false,
    new: false,
  },
  {
    id: 'tshirt-pirates-red',
    name: 'T-Shirt Pirates — Rouge',
    description: 'Edition rouge — la couleur du drapeau. Pour ceux qui ne se cachent pas.',
    price: 35,
    images: ['products/tshirt-pirates-red.jpg'],
    category: 'tshirt',
    tags: ['rouge', 'limited'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
    new: false,
  },
  // --- DÉBARDEURS ---
  {
    id: 'debardeur-pirates-ground-black',
    name: 'Débardeur Pirates Ground',
    description: 'Débardeur coupe large, dos nageur. Sérigraphie "Pirates Underground" en lettrage.',
    price: 30,
    images: ['products/debardeur-pirates-ground-black.jpg'],
    category: 'debardeur',
    tags: ['summer', 'lettering'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    featured: true,
    new: false,
  },
  {
    id: 'debardeur-skull-color-black',
    name: 'Débardeur Skull Color',
    description: 'Débardeur avec le skull en coloré — édition limitée.',
    price: 32,
    images: ['products/debardeur-skull-color-black.jpg'],
    category: 'debardeur',
    tags: ['color', 'limited'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    featured: false,
    new: true,
  },
]

// Produits mis en avant sur la home
export const featuredProducts = products.filter(p => p.featured)

// Catégories pour le filtre shop
export const categories = [
  { value: 'all', label: 'Tout' },
  { value: 'tshirt', label: 'T-Shirts' },
  { value: 'debardeur', label: 'Débardeurs' },
  { value: 'sweat', label: 'Sweats' },
  { value: 'accessoire', label: 'Accessoires' },
  { value: 'kids', label: 'Pirates Kids' },
] as const
