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

const mainStore = useMainStore();
const productsStore = useProductsStore();

const { getGaleries, getBanners, getPosts, getPartners } = mainStore;
const { getProducts } = productsStore;

const { data } = await useAsyncData('main', async () => {
   const [posts, banners, partners, galeries, products] = await Promise.all([getPosts(), getBanners(), getPartners(), getGaleries(), getProducts()]);

   return { posts, banners, partners, galeries, products };
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
