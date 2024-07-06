<template>
   <div>
      <AboutSwiperImage />
      <AboutCompanyInfo />
      <SectionProducts />
      <SectionOurWork />
      <FormContactUs />
   </div>
</template>

<script setup>
import { useMainStore } from '~/stores/main.js';
import { useCommonStore } from '~/stores/common.js';

const mainStore = useMainStore();
const commonStore = useCommonStore();

const { getGaleries, getBanners, getPosts, getPartners } = mainStore;
const { getTransitions } = commonStore;

const { data } = await useAsyncData('main', async () => {
   const [translations, posts, banners, partners, galeries] = await Promise.all([getTransitions(), getPosts(), getBanners(), getPartners(), getGaleries()]);

   return { translations, posts, banners, partners, galeries };
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
