import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';
import { ref } from 'vue';

export const useProductsStore = defineStore('products', () => {
   const api = useApi();
   const products = ref([]);
   const productCategory = ref(null);
   const product = ref(null);

   async function getProducts() {
      try {
         const response = await api.get('products');
         products.value = response.data;
         return response.data;
      } catch (error) {
         console.log(error);
      }
   }

   async function getProductId(id) {
      try {
         const response = await api.get(`products/${id}`);
         product.value = response.data;
         return response.data;
      } catch (error) {
         console.log(error);
      }
   }

   async function getProductCategoryId(id) {
      try {
         const response = await api.get(`product-categories/${id}`);
         productCategory.value = response.data;
         return response.data;
      } catch (error) {
         console.log(error);
      }
   }

   return {
      getProducts,
      getProductId,
      getProductCategoryId,
      products,
      product,
      productCategory
   };
});
