import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';
import { ref } from 'vue';

export const useProductsStore = defineStore('products', () => {
   const api = useApi();
   const products = ref([]);

   const getProducts = async () => {
      try {
         const response = await api.get('products/');
         products.value = response;
         return response;
      } catch (error) {
         console.log('error');
      }
   };

   return {
      getProducts,
      products
   };
});
