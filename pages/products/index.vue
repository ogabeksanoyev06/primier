<template>
   <div class="mt-20">
      <div class="container flex flex-col gap-20">
         <h2 class="text-2xl md:text-3xl xl:text-4xl text-center font-semibold">CNC vertical machining centre</h2>
         <div class="grid grid-cols-1 gap-10 lg:grid-cols-7">
            <div class="lg:col-span-2 hidden lg:block">
               <div class="sticky top-32 h-full max-h-[calc(100vh-170px)] shrink-0 overflow-x-clip overflow-y-scroll">
                  <div class="flex flex-col gap-8 border-r">
                     <h3 class="text-2xl font-medium">Product us</h3>
                     <ul class="flex flex-col gap-8">
                        <li
                           class="text-grey text-base xl:text-lg hover:text-primary transition-300 cursor-pointer"
                           v-for="(item, i) in categories"
                           :key="i"
                           :class="{ 'text-primary': isActiveCategory(item.id) }"
                           @click="navigateToCategory(item.id)"
                        >
                           {{ item.title.uz }}
                        </li>
                     </ul>
                  </div>
               </div>
            </div>

            <div class="lg:col-span-5">
               <div class="flex flex-col gap-10">
                  <div class="flex flex-col gap-6">
                     {{ productCategory }}
                     <h3 class="text-xl sm:text-2xl font-medium">Серия DELTA CENTER</h3>
                     <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <UICard v-for="(item, i) in 10" :key="i" />
                     </div>
                  </div>
                  <!-- <div class="flex flex-col gap-6">
                     <h3 class="text-xl sm:text-2xl font-medium">Серия VFxxxUHP для силовой и скоростной обработки</h3>
                     <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <UICard v-for="(item, i) in 10" :key="i" />
                     </div>
                  </div> -->
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useProductsStore } from '~/stores/products.js';
import { useCategoriesStore } from '~/stores/categories.js';

const router = useRouter();
const route = useRoute();

const productsStore = useProductsStore();
const categoriesStore = useCategoriesStore();

const { getProductCategoryId } = productsStore;
const { getProductsCategories } = categoriesStore;

const navigateToCategory = (categoryId) => {
   router.push({ query: { categoryId } });
};

const isActiveCategory = (categoryId) => {
   return route.query.categoryId === categoryId;
};

const { data: categories } = await useAsyncData('categories', async () => {
   return await getProductsCategories();
});

const { data: productCategory } = await useAsyncData('productCategory', async () => {
   return await getProductCategoryId(route.query.categoryId);
});
</script>
