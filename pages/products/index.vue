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
                        <li class="text-grey text-base xl:text-lg hover:text-primary transition-300 cursor-pointer">All products</li>
                        <li class="text-grey text-base xl:text-lg hover:text-primary transition-300 cursor-pointer">Серия DELTA CENTER</li>
                        <li class="text-grey text-base xl:text-lg hover:text-primary transition-300 cursor-pointer">Серия ALPHA CENTER</li>
                        <li class="text-grey text-base xl:text-lg hover:text-primary transition-300 cursor-pointer">Серия VFxxxUHP для силовой и скоростной обработки</li>
                        <li class="text-grey text-base xl:text-lg hover:text-primary transition-300 cursor-pointer">Серия POWER CENTER для силовой обработки</li>
                     </ul>
                  </div>
               </div>
            </div>

            <div class="lg:col-span-5">
               <div class="flex flex-col gap-10">
                  <div class="flex flex-col gap-6">
                     <h3 class="text-xl sm:text-2xl font-medium">Серия DELTA CENTER</h3>
                     <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <UICard v-for="(item, i) in 10" :key="i" />
                     </div>
                  </div>
                  <div class="flex flex-col gap-6">
                     <h3 class="text-xl sm:text-2xl font-medium">Серия VFxxxUHP для силовой и скоростной обработки</h3>
                     <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <UICard v-for="(item, i) in 10" :key="i" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {{ products }}
   </div>
   <UICheckbox />
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useProductsStore } from '~/stores/products.js';
import { useCategoriesStore } from '~/stores/categories.js';

const { productsStore } = useProductsStore();
const { categoriesStore } = useCategoriesStore();

const { categories } = storeToRefs(categoriesStore);

const { data } = await useAsyncData('products', () => productsStore.getProducts());
console.log(data);
</script>
