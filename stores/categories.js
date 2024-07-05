import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';
import { ref } from 'vue';

export const useCategoriesStore = defineStore('categories', () => {
   const api = useApi();
   const productsCategories = ref([]);

   const getProductsCategories = async () => {
      try {
         const response = await api.get('product-categories/');
         productsCategories.value = response.data;
         return response.data;
      } catch (error) {
         console.log(error);
      }
   };

   return {
      getProductsCategories,
      productsCategories
   };
});
