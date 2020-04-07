export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Active-Ambassadors',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '' // TODO: edit
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
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
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-162950945-1',
        dev: false,
        set: [{ field: 'anonymizeIp', value: true }]
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['portal-vue/nuxt'],
  /*
   ** Build confiuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
