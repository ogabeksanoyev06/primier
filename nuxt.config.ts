export default defineNuxtConfig({
   ssr: true,
   devtools: { enabled: true },
   app: {
      pageTransition: { name: 'page', mode: 'out-in' },
      layoutTransition: { name: 'layout', mode: 'out-in' }
   },
   css: ['@/assets/styles/main.css'],

   modules: ['@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-swiper', '@nuxtjs/i18n', '@pinia/nuxt'],

   runtimeConfig: {
      public: {
         apiBaseUrl: 'https://web.verel-auto.uz/api/'
      }
   }
});
