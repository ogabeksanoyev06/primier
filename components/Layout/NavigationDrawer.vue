<template>
   <div>
      <div class="fixed top-0 right-0 md:hidden h-screen w-3/4 z-[9999] bg-white p-4 border-r sm:max-w-sm pr-0 transition-300" :class="open ? 'translate-x-0' : 'translate-x-full'">
         <div class="flex flex-col gap-6">
            <div class="flex items-center justify-between gap-2">
               <NuxtLink to="/">
                  <img src="/assets/svg/logo.svg" alt="" class="w-[200px]" />
               </NuxtLink>
               <button class="flex items-center justify-center h-8 w-8 border rounded-tl-sm rounded-bl-sm" @click="closeDrawer">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.2501 4.75794C14.9251 4.43294 14.4001 4.43294 14.0751 4.75794L10.0001 8.82461L5.9251 4.74961C5.6001 4.42461 5.0751 4.42461 4.7501 4.74961C4.4251 5.07461 4.4251 5.59961 4.7501 5.92461L8.8251 9.99961L4.7501 14.0746C4.4251 14.3996 4.4251 14.9246 4.7501 15.2496C5.0751 15.5746 5.6001 15.5746 5.9251 15.2496L10.0001 11.1746L14.0751 15.2496C14.4001 15.5746 14.9251 15.5746 15.2501 15.2496C15.5751 14.9246 15.5751 14.3996 15.2501 14.0746L11.1751 9.99961L15.2501 5.92461C15.5668 5.60794 15.5668 5.07461 15.2501 4.75794Z"
                        fill="#969696"
                     ></path>
                  </svg>
               </button>
            </div>
            <div class="relative overflow-hidden h-[calc(100vh-8rem)]">
               <nav class="h-full w-full flex flex-col rounded-md bg-white p-1" style="overflow: hidden scroll">
                  <NuxtLink to="/" class="rounded-[4px] px-4 py-2 text-base transition-colors hover:text-primary hover:bg-gray-100"> Home </NuxtLink>
                  <NuxtLink to="/products" class="rounded-[4px] px-4 py-2 text-base transition-colors hover:text-primary hover:bg-gray-100"> Products </NuxtLink>
                  <NuxtLink to="/leasing" class="rounded-[4px] px-4 py-2 text-base transition-colors hover:text-primary hover:bg-gray-100"> Financing / leasing </NuxtLink>
                  <NuxtLink to="/portfolios" class="rounded-[4px] px-4 py-2 text-base transition-colors hover:text-primary hover:bg-gray-100"> Our projects </NuxtLink>
               </nav>
            </div>
         </div>
      </div>
      <div class="fixed inset-0 md:hidden h-screen w-full z-[49] bg-[#000c]" @click="closeDrawer" :class="open ? 'opacity-100 visible' : 'opacity-0 hidden '"></div>
   </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
   open: {
      type: Boolean
   }
});

const emit = defineEmits(['closeNavigationDrawer']);

function closeDrawer() {
   emit('closeNavigationDrawer');
}

onBeforeUnmount(() => {
   document.body.style.overflow = 'auto';
});
</script>

<style scoped>
.router-link-exact-active {
   color: var(--primary);
   background-color: #f3f4f6;
}
</style>
