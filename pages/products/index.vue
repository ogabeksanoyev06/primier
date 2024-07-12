<template>
   <div class="mt-20">
      <div class="container flex flex-col gap-20">
         <h2 class="text-2xl md:text-3xl xl:text-4xl text-center font-semibold">CNC vertical machining centre</h2>
         <div class="grid grid-cols-1 gap-10 lg:grid-cols-7">
            <div class="lg:col-span-2 hidden lg:block">
               <div class="sticky top-32 h-full max-h-[calc(100vh-100px)] pb-4 shrink-0 overflow-x-clip overflow-y-scroll">
                  <div class="flex flex-col gap-8 border-r">
                     <h3 class="text-2xl font-medium">{{ translations['products.product_us'] }}</h3>
                     <ul class="flex flex-col gap-8 max-w-[370px] w-full">
                        <li
                           class="text-grey text-base xl:text-lg hover:text-primary transition-300 cursor-pointer"
                           v-for="(item, i) in categories"
                           :key="i"
                           :class="{ 'text-primary': item.id === Number(currentCategory) }"
                           @click="navigateToCategory(item.id)"
                        >
                           {{ item.title[$i18n.locale] }}
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div class="lg:col-span-5">
               <div class="flex flex-col gap-10">
                  <div class="flex flex-col gap-6">
                     <h3 class="text-xl sm:text-2xl font-medium">Серия DELTA CENTER</h3>
                     <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div v-for="(item, i) in productCategories" data-aos="fade-up">
                           <UICard :key="i" :photo="item?.photo[0]" :id="item?.id" :title="item.title[$i18n.locale]" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useProductsStore } from '~/stores/products.js';
import { useCategoriesStore } from '~/stores/categories.js';
import { useTranslationStore } from '~/stores/translations';

const route = useRoute();
const currentCategory = ref(null);

const productsStore = useProductsStore();
const categoriesStore = useCategoriesStore();
const translationsStore = useTranslationStore();

const { getProductCategoryId } = productsStore;
const { getProductsCategories } = categoriesStore;
const { translations } = storeToRefs(translationsStore);

const navigateToCategory = (categoryId) => {
   navigateTo({ query: { categoryId } });
};

watch(
   () => route.query.categoryId,
   (newCategoryId) => {
      currentCategory.value = newCategoryId;
   },
   { immediate: true }
);

const { data: categories } = await useAsyncData('categories', async () => {
   return await getProductsCategories();
});

currentCategory.value = route.query?.categoryId || categories.value?.[0]?.id;

const { data: productCategories } = await useAsyncData(
   'product-categories',
   async () => {
      if (currentCategory.value || route.query.categoryId) {
         return await getProductCategoryId({
            product_category_id: currentCategory.value
         });
      }
   },
   {
      watch: [() => route.query.categoryId]
   }
);
</script>
