<template>
   <div class="mt-20">
      <div class="container flex flex-col gap-20 mb-20">
         <h2 class="text-2xl md:text-3xl xl:text-4xl text-center font-semibold">Our projects</h2>
         <section class="flex flex-col gap-6">
            <div class="flex border rounded overflow-hidden flex-col lg:flex-row lg:even:flex-row-reverse" v-for="(item, i) in portfolios" :key="i">
               <div class="flex items-stretch lg:max-w-[530px] h-[350px] lg:h-[450px] w-full">
                  <img :src="'https://web.verel-auto.uz/storage/' + item.photo" alt="" class="w-full h-full object-cover" />
               </div>
               <div class="p-4 xl:p-10 lg:w-[calc(100%-530px)]">
                  <h4 class="text-lg mb-4">
                     {{ item.title.uz }}
                  </h4>
                  <p class="text-grey text-lg mb-10" v-html="item.descriptions.uz"></p>
                  <UIButton class="rounded-full">
                     <span class="text-base font-medium">View product</span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M14 16L18 12M18 12L14 8M18 12L6 12" stroke="#020105" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                  </UIButton>
               </div>
            </div>
         </section>
      </div>
      <FormContactUs />
   </div>
</template>

<script setup>
import { usePortfolioStore } from '~/stores/portfolio.js';

const portfolioStore = usePortfolioStore();

const { getPortfolios } = portfolioStore;

const { data: portfolios } = await useAsyncData('portfolios', async () => {
   return await getPortfolios();
});
</script>
