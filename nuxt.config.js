export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Active Ambassadors',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Brand your jersey like a professional athlete - but for a good cause & support the NGOs you love. Become an ambassador now! 🏃'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/fonts/domine-v10-latin-regular.woff2',
        crossorigin: 'true'
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/fonts/domine-v10-latin-600.woff2',
        crossorigin: 'true'
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/fonts/open-sans-v17-latin-regular.woff2',
        crossorigin: 'true'
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/fonts/open-sans-v17-latin-700.woff2',
        crossorigin: 'true'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3352C3' },
  /*
   ** Global CSS
   */
  css: ['~assets/style/fontfaces.scss', '~assets/style/main.sass'],
  /*
   ** Load Variables
   */
  styleResources: {
    sass: ['~assets/style/_variables.sass']
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/vue-unicons', mode: 'client' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/prismic',
    '@nuxtjs/axios',
    'portal-vue/nuxt',
    'nuxt-responsive-loader',
    '@nuxtjs/sitemap'
  ],
  /*
   ** Build confiuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  /*
   * Sitemap Config
   */
  sitemap: {
    hostname: process.env.DOMAIN
  },
  /*
   * Prismic Config
   */
  prismic: {
    endpoint: 'https://active-ambassadors.cdn.prismic.io/api/v2',
    exclude: ['preview']
  }
}
