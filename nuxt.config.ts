// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // Static site generation pour GitHub Pages
  ssr: true,

  modules: [
    '@nuxt/image',
    '@nuxtjs/color-mode',
  ],

  // Résolution des composants dans les sous-dossiers (sections/, ui/, layout/)
  // sans préfixe — sinon Nuxt attend <SectionsHeroCarousel>, <UiProductCard>, etc.
  components: [
    { path: '~/components', pathPrefix: false },
  ],

  // GitHub Pages : dépôt projet servi sur username.github.io/pirates-underground
  // tant qu'aucun domaine custom n'est branché (public/CNAME) → remettre '/' le jour venu.
  app: {
    baseURL: '/pirates-underground/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Pirates Underground — Streetwear',
      meta: [
        { name: 'description', content: 'Pirates Underground — Marque de streetwear née à La Réunion. Vêtements et accessoires pour les esprits libres.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Pirates Underground' },
        { property: 'og:image', content: '/og-image.jpg' },
        { name: 'theme-color', content: '#0a0a0a' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        // Snipcart CSS
        {
          rel: 'stylesheet',
          href: 'https://cdn.snipcart.com/themes/v3.7.4/default/snipcart.css',
        },
      ],
      script: [
        // Snipcart JS — remplacer YOUR_SNIPCART_PUBLIC_KEY par la vraie clé
        {
          src: 'https://cdn.snipcart.com/themes/v3.7.4/default/snipcart.js',
          async: true,
        },
      ],
    },
  },

  // CSS global
  css: ['~/assets/css/main.css'],

  // Nitro pour la génération statique
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/shop', '/lookbook', '/kids', '/a-propos', '/mentions-legales', '/cgv', '/livraison', '/confidentialite'],
    },
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
  },

  image: {
    quality: 85,
    formats: ['webp', 'jpg'],
  },

  compatibilityDate: '2024-09-10',
})
