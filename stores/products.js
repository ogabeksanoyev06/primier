import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';
import { ref } from 'vue';

export const useProductsStore = defineStore('products', () => {
   const api = useApi();
   const products = ref([]);

   const getProducts = () => {
      return new Promise((resolve, reject) => {
         try {
            const response = api.get('products/');
            resolve(response);
         } catch (error) {
            console.log('error');
            reject(error);
         }
      });
   };

   return {
      getProducts,
      products
   };
});
