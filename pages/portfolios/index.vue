<template>
   <div class="mt-20">
      <div class="container flex flex-col gap-20 mb-20">
         <h2 class="text-2xl md:text-3xl xl:text-4xl text-center font-semibold">
            {{ translations['projects.title'] }}
         </h2>
         <section class="flex flex-col gap-6">
            <div class="flex border rounded overflow-hidden flex-col lg:flex-row lg:even:flex-row-reverse max-w-[1200px] w-full mx-auto" v-for="(item, i) in portfolios" :key="i">
               <div class="flex items-stretch lg:max-w-[530px] sm:h-[350px] lg:h-[450px] w-full">
                  <img :src="`${useRuntimeConfig().public.apiBaseUrl}/storage/${item.photo}`" alt="Heroku" loading="lazy" class="h-full w-full object-cover" />
               </div>
               <div class="p-4 xl:p-10 lg:w-[calc(100%-530px)]">
                  <h4 class="text-lg mb-4">
                     {{ item.title[$i18n.locale] }}
                  </h4>
                  <div class="text-grey text-lg mb-10" v-html="item.descriptions[$i18n.locale]"></div>
               </div>
            </div>
         </section>
      </div>
      <FormContactUs />
   </div>
</template>

<script setup>
import { useTranslationStore } from '~/stores/translations.js';
import { usePortfolioStore } from '~/stores/portfolio.js';

const translationsStore = useTranslationStore();
const portfolioStore = usePortfolioStore();

const { translations } = storeToRefs(translationsStore);
const { getPortfolios } = portfolioStore;

const { data: portfolios } = await useAsyncData('portfolios', async () => {
   return await getPortfolios();
});
</script>
