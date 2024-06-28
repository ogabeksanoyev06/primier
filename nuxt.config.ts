export default defineNuxtConfig({
   devtools: { enabled: true },
   app: {
      pageTransition: { name: 'page', mode: 'out-in' },
      layoutTransition: { name: 'layout', mode: 'out-in' }
   },
   css: ['@/assets/styles/main.css'],
   modules: ['@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-swiper']
});
