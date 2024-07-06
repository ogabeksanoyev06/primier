export default defineNuxtConfig({
   ssr: true,
   devtools: { enabled: true },
   app: {
      pageTransition: { name: 'page', mode: 'out-in' },
      layoutTransition: { name: 'layout', mode: 'out-in' }
   },
   css: ['@/assets/styles/main.css'],

   modules: ['@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-swiper', '@nuxtjs/i18n', '@pinia/nuxt'],

   i18n: {
      strategy: 'prefix_except_default',
      locales: ['uz', 'ru'],
      defaultLocale: 'ru',
      vueI18n: './i18n.config.ts'
   },

   runtimeConfig: {
      public: {
         apiBaseUrl: process.env.NUXT_APP_BASE_URL || 'https://web.verel-auto.uz/'
      }
   },

   build: {
      transpile: ['vue-toastification']
   }
});
