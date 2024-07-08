<template>
   <div class="bg-background py-2">
      <div class="container flex items-center lg:justify-end sm:gap-8 justify-between">
         <div class="">
            <div class="flex items-center gap-1 cursor-pointer" @click="selectLang(langs[0])" v-if="selectedLang.id === 'en'">
               <span> Русский </span>
            </div>
            <div class="flex items-center gap-1 cursor-pointer" @click="selectLang(langs[1])" v-if="selectedLang.id === 'ru'">
               <span> English </span>
            </div>
         </div>
      </div>
   </div>
   <header class="sticky z-40 top-0 bg-background/80 backdrop-blur-lg border-b border-border">
      <div class="container flex-y-center justify-between h-20 sm:h-[--header-height]">
         <NuxtLink :to="localePath('/')" class="flex-shrink-0">
            <img src="/assets/svg/logo.svg" alt="" />
         </NuxtLink>
         <nav class="hidden md:flex items-center md:gap-6 lg:gap-16 xl:gap-[90px] transition-all duration-300">
            <NuxtLink :to="localePath('/')" class="text-base font-medium transition-colors hover:text-primary"> {{ translations['header.home'] }} </NuxtLink>
            <NuxtLink :to="localePath('products')" class="text-base font-medium transition-colors hover:text-primary">{{ translations['header.products'] }} </NuxtLink>
            <NuxtLink :to="localePath('leasing')" class="text-base font-medium transition-colors hover:text-primary">{{ translations['header.leasing'] }} </NuxtLink>
            <NuxtLink :to="localePath('portfolios')" class="text-base font-medium transition-colors hover:text-primary">{{ translations['header.projects'] }} </NuxtLink>
         </nav>
         <button class="md:hidden flex items-center justify-center w-10 h-10 rounded-sm border" @click="navigationDrawer = true">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.33333 15.7012H16.6667C17.125 15.7012 17.5 15.3262 17.5 14.8678C17.5 14.4095 17.125 14.0345 16.6667 14.0345H3.33333C2.875 14.0345 2.5 14.4095 2.5 14.8678C2.5 15.3262 2.875 15.7012 3.33333 15.7012ZM3.33333 11.5345H16.6667C17.125 11.5345 17.5 11.1595 17.5 10.7012C17.5 10.2428 17.125 9.86784 16.6667 9.86784H3.33333C2.875 9.86784 2.5 10.2428 2.5 10.7012C2.5 11.1595 2.875 11.5345 3.33333 11.5345ZM2.5 6.53451C2.5 6.99284 2.875 7.36784 3.33333 7.36784H16.6667C17.125 7.36784 17.5 6.99284 17.5 6.53451C17.5 6.07617 17.125 5.70117 16.6667 5.70117H3.33333C2.875 5.70117 2.5 6.07617 2.5 6.53451Z"
                  fill="#969696"
               ></path>
            </svg>
         </button>
      </div>
   </header>
   <LayoutNavigationDrawer @closeNavigationDrawer="closeDrawer" :open="navigationDrawer" />
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useTranslationStore } from '~/stores/translations.js';

const localePath = useLocalePath();

const { setLocale, locale } = useI18n();

const translationsStore = useTranslationStore();

const { translations } = storeToRefs(translationsStore);

const route = useRoute();

const navigationDrawer = ref(false);

const langs = [
   {
      id: 'ru',
      label: 'Русский'
   },
   {
      id: 'en',
      label: 'English'
   }
];

const selectedLang = ref(langs.find((lang) => lang.id === locale.value));

const selectLang = (lang) => {
   selectedLang.value = lang;
   setLocale(lang.id);
};

function closeDrawer() {
   navigationDrawer.value = false;
}

watch(selectedLang, (newVal) => {
   setLocale(newVal.id);
});

watch(navigationDrawer, () => {
   if (navigationDrawer.value) {
      document.documentElement.style.overflow = 'hidden';
   } else {
      document.documentElement.style.overflow = 'auto';
   }
});

watch(route, () => {
   navigationDrawer.value = false;
});

watch(
   () => window.innerWidth,
   (newWidth) => {
      if (newWidth >= 768) {
         navigationDrawer.value = false;
         document.body.style.overflow = 'auto';
      }
   }
);

onMounted(() => {
   if (process.client) {
      window.addEventListener('resize', () => {
         if (window.innerWidth >= 768) {
            navigationDrawer.value = false;
            document.body.style.overflow = 'auto';
         }
      });
   }
});
</script>

<style scoped>
.router-link-exact-active {
   color: var(--primary);
}
</style>
