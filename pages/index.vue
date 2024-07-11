<template>
   <div>
      <AboutSwiperImage :banners="data.banners" />
      <AboutCompanyInfo :partners="data.partners" />
      <SectionProducts :products="data.products" />
      <SectionOurWork :galeries="data.galeries" />
      <FormContactUs />
   </div>
</template>

<script setup>
import { useMainStore } from '~/stores/main.js';
import { useProductsStore } from '~/stores/products.js';
import { usePortfolioStore } from '~/stores/portfolio.js';

const mainStore = useMainStore();
const productsStore = useProductsStore();
const portfolioStore = usePortfolioStore();

const { getBanners, getPartners } = mainStore;
const { getProducts } = productsStore;
const { getPortfolios } = portfolioStore;

const { data } = await useAsyncData('main', async () => {
   const [banners, partners, galeries, products] = await Promise.all([getBanners(), getPartners(), getPortfolios(), getProducts()]);

   return { banners, partners, galeries, products };
});

useHead(() => {
   return {
      title: '',
      meta: [
         {
            hid: 'description',
            name: 'description',
            content: ''
         }
      ]
   };
});
</script>
