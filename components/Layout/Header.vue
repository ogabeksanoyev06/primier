<template>
   <div class="bg-background py-2">
      <div class="container flex items-center lg:justify-end sm:gap-8 justify-between">
         <a href="#">+998 93 005 05 05</a>
         <div class="">
            <div class="flex items-center gap-1 cursor-pointer">
               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_9302_12006" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                     <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F4F5F5"></path>
                  </mask>
                  <g mask="url(#mask0_9302_12006)">
                     <rect width="20" height="20" fill="#0099B5"></rect>
                     <rect y="13" width="20" height="7" fill="#1EB53A"></rect>
                     <rect y="13" width="20" height="1" fill="#CE1126"></rect>
                     <rect y="6" width="20" height="1" fill="#CE1126"></rect>
                     <rect y="6.5" width="20" height="7" fill="white"></rect>
                  </g>
               </svg>
               <span> Оʻzbekcha </span>
            </div>
            <div class="flex items-center gap-1 cursor-pointer" v-if="false">
               <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_9302_3025" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
                     <path
                        d="M10 20.5C15.5228 20.5 20 16.0228 20 10.5C20 4.97715 15.5228 0.5 10 0.5C4.47715 0.5 0 4.97715 0 10.5C0 16.0228 4.47715 20.5 10 20.5Z"
                        fill="#F4F5F5"
                     ></path>
                  </mask>
                  <g mask="url(#mask0_9302_3025)">
                     <rect y="0.5" width="20" height="20" fill="white"></rect>
                     <rect y="13.5" width="20" height="7" fill="#E63838"></rect>
                     <rect y="7" width="20" height="7" fill="#3131C4"></rect>
                  </g>
               </svg>
               <span> Русский </span>
            </div>
         </div>
      </div>
   </div>
   <header class="sticky z-40 top-0 bg-background/80 backdrop-blur-lg border-b border-border">
      <div class="container flex-y-center justify-between h-20 sm:h-[--header-height]">
         <NuxtLink to="/" class="flex-shrink-0">
            <img src="/assets/svg/logo.svg" alt="" />
         </NuxtLink>
         <nav class="hidden md:flex items-center md:gap-6 lg:gap-16 xl:gap-[90px] transition-all duration-300">
            <NuxtLink to="/" class="text-base font-medium transition-colors hover:text-primary"> Home </NuxtLink>
            <NuxtLink to="/products" class="text-base font-medium transition-colors hover:text-primary">Products</NuxtLink>
            <NuxtLink to="/leasing" class="text-base font-medium transition-colors hover:text-primary">Financing / leasing</NuxtLink>
            <NuxtLink to="/our-projects" class="text-base font-medium transition-colors hover:text-primary">Our projects</NuxtLink>
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

const route = useRoute();

const navigationDrawer = ref(false);

const langs = [
   {
      id: 'ru',
      label: 'Русский',
      click: () => {
         selectedLang.value = langs[0];
      }
   },
   {
      id: 'uz',
      label: "O'zbek",
      click: () => {
         selectedLang.value = langs[1];
      }
   },
   {
      id: 'en',
      label: 'English',
      click: () => {
         selectedLang.value = langs[2];
      }
   }
];

function closeDrawer() {
   navigationDrawer.value = false;
}

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
