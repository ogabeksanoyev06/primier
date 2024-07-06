<template>
   <div class="mt-20">
      <div class="container max-w-[1200px] w-full">
         <div class="flex flex-col items-center mx-auto gap-4">
            <h2 class="text-xl md:text-3xl xl:text-[40px] font-medium">Financing / leasing</h2>
            <span class="text-base text-grey text-center">
               Stellen Sie Ihrem Unternehmen die bestmögliche Ausstattung ohne hohe Einmalkosten zur Verfügung!  Sprechen Sie uns an! Mit unseren Leasingpartnern investieren Sie in
               Ihre Zukunft. Planbar und liquiditätsschonend.
            </span>
         </div>
         <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-x-32 gap-y-2 mt-12">
            <a :href="item.link" target="_blank" class="lg:hover:scale-105 transition-300 max-w-[350px] sm:w-[auto] h-[100px]" v-for="item in partners" :key="item">
               <img :src="'https://web.verel-auto.uz/storage/' + item.photo" alt="Heroku" loading="lazy" class="h-full w-full object-contain rounded-xl" />
            </a>
         </div>
         <div class="flex justify-center mt-24 mb-28">
            <UIButton class="!rounded-full">
               <span class="text-base">Impressum</span>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 16L18 12M18 12L14 8M18 12L6 12" stroke="#020105" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
               </svg>
            </UIButton>
         </div>
      </div>
      <FormContactUs />
   </div>
</template>

<script setup>
import { useMainStore } from '~/stores/main.js';

const mainStore = useMainStore();
const { getPartners } = mainStore;

const { data: partners } = await useAsyncData('partners', getPartners);
</script>
